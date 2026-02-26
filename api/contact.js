import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  const airtableData = {
    fields: {
      "fld4j9154PgMlmsjr": name,
      "fldtRhbSn8UpRWTeY": email,
      "fldtEfvQLMqP6Nc0p": message,
      "fldh0oGEe9buJxB8B": new Date().toISOString().split('T')[0],
      "fldA9vY1rMBeEyIb8": "High Priority" // Now set to High Priority
    },
    "typecast": true
  };

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(process.env.AIRTABLE_TABLE_NAME)}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(airtableData)
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Airtable Error', details: result });
    }

    res.status(200).json({ success: true, id: result.id });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
