import { VercelRequest, VercelResponse } from '@vercel/node';
//import pathogens from '../data/pathogens.json';
import * as fs from 'fs';
import * as path from 'path';

export default function (request: VercelRequest, response: VercelResponse) {
  response.status(200).json(pathogens);
}
