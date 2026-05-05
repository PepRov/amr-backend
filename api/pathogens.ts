import { VercelRequest, VercelResponse } from '@vercel/node';
import * as fs from 'fs';
import * as path from 'path';

export default function (request: VercelRequest, response: VercelResponse) {
  const filePath = path.join(process.cwd(), 'data', 'pathogens.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const pathogens = JSON.parse(jsonData);

  response.status(200).json(pathogens);
}
