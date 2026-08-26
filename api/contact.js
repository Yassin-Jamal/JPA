// Vercel Serverless Function — verstuurt het contactformulier via Resend.
// Vereist de omgevingsvariabele RESEND_API_KEY (ingesteld in Vercel).

const FROM = 'JPA Website <forms@mail.permaflare.com>';
const TO = 'jpvdwal@tiscali.nl';

const MAX = { naam: 100, email: 200, telefoon: 50, bericht: 5000 };

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Enkelregelige velden: control-tekens (incl. nieuwe regels) worden spaties.
// Dit voorkomt header-injectie via bijvoorbeeld het reply-to adres.
function cleanLine(value, limit) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\x00-\x1F\x7F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, limit);
}

// Berichtveld: nieuwe regels behouden, overige control-tekens eruit.
function cleanText(value, limit) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/\r\n/g, '\n')
    .replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .trim()
    .slice(0, limit);
}

function isValidEmail(value) {
  return typeof value === 'string' &&
    value.length <= MAX.email &&
    /^[^\s@<>,;:"]+@[^\s@<>,;:"]+\.[^\s@<>,;:"]+$/.test(value);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY ontbreekt in de omgevingsvariabelen.');
    return res.status(500).json({ error: 'De mailservice is niet geconfigureerd.' });
  }

  // Vercel parseert JSON automatisch, maar val terug op handmatig parsen.
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Ongeldige aanvraag.' });
    }
  }
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Ongeldige aanvraag.' });
  }

  // Honeypot: bots vullen dit verborgen veld in, echte bezoekers niet.
  if (cleanLine(body.website, 100)) {
    return res.status(200).json({ ok: true });
  }

  const naam = cleanLine(body.naam, MAX.naam);
  const email = cleanLine(body.email, MAX.email);
  const telefoon = cleanLine(body.telefoon, MAX.telefoon);
  const bericht = cleanText(body.bericht, MAX.bericht);

  if (!naam || !bericht) {
    return res.status(400).json({ error: 'Vul uw naam en vraag in.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Vul een geldig e-mailadres in.' });
  }

  const subject = `Contactaanvraag website — ${naam}`;

  const text = [
    `Naam: ${naam}`,
    `E-mail: ${email}`,
    `Telefoon: ${telefoon || '(niet opgegeven)'}`,
    '',
    bericht
  ].join('\n');

  const html = `
    <div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;color:#123a69;line-height:1.6">
      <h2 style="margin:0 0 16px">Nieuwe contactaanvraag via de website</h2>
      <table cellpadding="0" cellspacing="0" style="margin-bottom:20px">
        <tr><td style="padding:2px 16px 2px 0"><strong>Naam</strong></td><td>${escapeHtml(naam)}</td></tr>
        <tr><td style="padding:2px 16px 2px 0"><strong>E-mail</strong></td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:2px 16px 2px 0"><strong>Telefoon</strong></td><td>${escapeHtml(telefoon) || '<em>niet opgegeven</em>'}</td></tr>
      </table>
      <p style="margin:0 0 6px"><strong>Bericht</strong></p>
      <p style="white-space:pre-wrap;margin:0;padding:12px 16px;background:#f6f7f9;border-left:3px solid #c8a256;border-radius:4px">${escapeHtml(bericht)}</p>
      <p style="margin-top:24px;font-size:13px;color:#5a6b80">
        Antwoord op deze mail om direct te reageren — de reply gaat naar ${escapeHtml(email)}.
      </p>
    </div>
  `;

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject,
        text,
        html
      })
    });

    if (!resendRes.ok) {
      const detail = await resendRes.text();
      console.error('Resend-fout', resendRes.status, detail);
      return res.status(502).json({ error: 'Het bericht kon niet worden verzonden.' });
    }

    const data = await resendRes.json();
    return res.status(200).json({ ok: true, id: data.id });
  } catch (err) {
    console.error('Onverwachte fout bij verzenden', err);
    return res.status(500).json({ error: 'Het bericht kon niet worden verzonden.' });
  }
}
