import { VercelRequest, VercelResponse } from '@vercel/node';

export default function (request: VercelRequest, response: VercelResponse) {
  // This is your global landscape data
  const data = [
    {
      "name": "A. baumannii",
      "tier": "CRITICAL",
      "status": "Rising",
      "description": "Multi-drug resistant strains increasing in clinical settings.",
      "detailMarkdown": "# Acinetobacter baumannii\nOften referred to as 'Iraqibacter' due to its prevalence in military treatment facilities."
    },
    {
      "name": "N. gonorrhoeae",
      "tier": "HIGH",
      "status": "Stable",
      "description": "Ceftriaxone-resistant cases under surveillance.",
      "detailMarkdown": "# Neisseria gonorrhoeae\nSurveillance is critical for tracking high-level azithromycin resistance."
    }
  ];

  // Set the response to JSON format
  response.status(200).json(data);
}
