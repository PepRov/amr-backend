import { VercelRequest, VercelResponse } from '@vercel/node';

export default function (request: VercelRequest, response: VercelResponse) {
  fetch('https://amr-backend.vercel.app/data/pathogens.json')
    .then(res => res.json())
    .then(data => {
      response.status(200).json(data);
    })
    .catch(err => {
      response.status(500).json({ error: 'Failed to load AMR data' });
    });
}
