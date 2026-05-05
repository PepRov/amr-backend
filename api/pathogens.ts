import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function (request: VercelRequest, response: VercelResponse) {
  try {
    const res = await fetch('https://amr-backend.vercel.app/data/pathogens.json');
    const data = await res.json();

    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: 'Failed to load AMR data' });
  }
}
