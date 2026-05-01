import { VercelRequest, VercelResponse } from '@vercel/node';

export default function (request: VercelRequest, response: VercelResponse) {
  // This is your global landscape data
const pathogens = [
  {
    "name": "A. baumannii",
    "tier": "CRITICAL",
    "status": "Rising",
    "description": "Highly resistant in clinical settings.",
    "detailMarkdown": "# Acinetobacter baumannii\nDetailed clinical analysis...",
    "hotspots": [
      { "region": "North Africa", "latitude": 30.04, "longitude": 31.23, "intensity": 0.8 },
      { "region": "Southeast Asia", "latitude": 13.75, "longitude": 100.51, "intensity": 0.9 }
    ]
  },
  {
    "name": "S. aureus (MRSA)",
    "tier": "HIGH",
    "status": "Stable",
    "description": "Common community-acquired resistance.",
    "detailMarkdown": "# MRSA\nDetailed community impact...",
    "hotspots": [
      { "region": "North America", "latitude": 40.71, "longitude": -74.00, "intensity": 0.6 },
      { "region": "Western Europe", "latitude": 48.85, "longitude": 2.35, "intensity": 0.5 }
    ]
  }
];

  // Set the response to JSON format
  response.status(200).json(data);
}
