import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const airtableData = {
    fields: {
      "fld4j9154PgMlmsjr": name,
      "fldtRhbSn8UpRWTeY": email,
      "fldtEfvQLMqP6Nc0p": message,
      "fldh0oGEe9buJxB8B": new Date().toISOString().split('T')[0],
      "fldA9vY1rMBeEyIb8": "High Priority"
    },
    "typecast": true
  };

  console.log('Sending to Airtable:', JSON.stringify(airtableData, null, 2));

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

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable Error Detail:', JSON.stringify(errorData, null, 2));
      return res.status(response.status).json({ error: 'Failed to save to Airtable', details: errorData });
    }

    const result = await response.json();
    res.status(200).json({ success: true, id: result.id });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
