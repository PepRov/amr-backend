import { VercelRequest, VercelResponse } from '@vercel/node';
import pathogens from '../data/pathogens.json';

export default function (request: VercelRequest, response: VercelResponse) {
  response.status(200).json(pathogens);
}
