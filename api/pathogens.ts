import { VercelRequest, VercelResponse } from '@vercel/node';

export default function (request: VercelRequest, response: VercelResponse) {
  // This is your global landscape data
const pathogens = [
  {
    "name": "Carbapenem-resistant Enterobacterales (CRE)",
    "tier": "CRITICAL",
    "status": "Spreading",
    "description": "Includes NDM-CRE, which has seen a 460% increase in some regions.",
    "detailMarkdown": "### 2025 CDC/WHO Alert\nSignificant rise in NDM-producing strains (New Delhi metallo-β-lactamase). These are resistant to nearly all available antibiotics, making treatment selection extremely complex.",
    "hotspots": [
      { "region": "South Asia (Origin)", "latitude": 28.61, "longitude": 77.20, "intensity": 0.95 },
      { "region": "North America (Emerging)", "latitude": 40.71, "longitude": -74.00, "intensity": 0.8 },
      { "region": "Southeast Asia", "latitude": 13.75, "longitude": 100.51, "intensity": 0.85 }
    ],
    "effectiveAntibiotics": ["Ceftazidime-avibactam", "Meropenem-vaborbactam", "Eravacycline", "Aztreonam", "Colistimethate sodium"]
  },
  {
    "name": "CRAB (Acinetobacter baumannii)",
    "tier": "CRITICAL",
    "status": "High Risk",
    "description": "Carbapenem-resistant strains; major hospital-acquired threat.",
    "detailMarkdown": "### Environmental Persistence\nCRAB survives for weeks on clinical surfaces. The 2024 BPPL update emphasizes its role in ventilator-associated pneumonia.",
    "hotspots": [
      { "region": "Eastern Mediterranean", "latitude": 30.04, "longitude": 31.23, "intensity": 0.9 },
      { "region": "Latin America", "latitude": -23.55, "longitude": -46.63, "intensity": 0.75 },
      { "region": "Southern Europe", "latitude": 41.90, "longitude": 12.49, "intensity": 0.7 }
    ],
    "effectiveAntibiotics": ["Cefiderocol", "Sulbactam-durlobactam", "Minocycline", "Polymyxin B2 Sulfate", "Tigecycline"]
  },
  {
    "name": "Neisseria gonorrhoeae",
    "tier": "HIGH",
    "status": "Monitoring",
    "description": "Third-generation cephalosporin and fluoroquinolone-resistant.",
    "detailMarkdown": "### Global Surveillance\nIncreasing resistance to ceftriaxone (the last line of defense). GLASS reports indicate high prevalence in urban centers.",
    "hotspots": [
      { "region": "Western Pacific", "latitude": 35.67, "longitude": 139.65, "intensity": 0.85 },
      { "region": "United Kingdom", "latitude": 51.50, "longitude": -0.12, "intensity": 0.65 },
      { "region": "Sub-Saharan Africa", "latitude": -1.29, "longitude": 36.82, "intensity": 0.8 }
    ],
    "effectiveAntibiotics": ["Ceftriaxone", "Zoliflodacin", "Gepotidacin", "Azithromycin", "Spectinomycin"]
  },
  {
    "name": "MRSA (S. aureus)",
    "tier": "HIGH",
    "status": "Stable",
    "description": "Methicillin-resistant Staphylococcus aureus.",
    "detailMarkdown": "### Community vs. Hospital\nWhile hospital-acquired MRSA is stabilizing, community-acquired MRSA (CA-MRSA) remains a significant global burden.",
    "hotspots": [
      { "region": "Western Europe", "latitude": 48.85, "longitude": 2.35, "intensity": 0.6 },
      { "region": "South America", "latitude": -34.60, "longitude": -58.38, "intensity": 0.7 }
    ],
    "effectiveAntibiotics": ["Vancomycin", "Daptomycin", "Linezolid", "Ceftaroline", "Dalbavancin"]
  },
  {
    "name": "M. tuberculosis (RR-TB)",
    "tier": "CRITICAL",
    "status": "High Burden",
    "description": "Rifampicin-resistant Tuberculosis; top global AMR threat.",
    "detailMarkdown": "### 2026 Global Update\nResistance to Rifampicin is a surrogate marker for Multidrug-Resistant TB (MDR-TB).",
    "hotspots": [
      { "region": "Eastern Europe / Central Asia", "latitude": 55.75, "longitude": 37.61, "intensity": 0.9 },
      { "region": "Southeast Asia", "latitude": 14.59, "longitude": 120.98, "intensity": 0.85 },
      { "region": "Southern Africa", "latitude": -26.20, "longitude": 28.04, "intensity": 0.8 }
    ],
    "effectiveAntibiotics": ["Bedaquiline", "Pretomanid", "Linezolid", "Moxifloxacin", "Delamanid"]
  },
  {
    "name": "XDR Salmonella Typhi",
    "tier": "HIGH",
    "status": "Outbreak Alert",
    "description": "Extensively drug-resistant Typhoid fever.",
    "detailMarkdown": "### 2025-2026 Surveillance\nResistant to all first-line antibiotics, including ciprofloxacin and ceftriaxone.",
    "hotspots": [
      { "region": "South Asia (Karachi)", "latitude": 24.86, "longitude": 67.00, "intensity": 0.95 },
      { "region": "East Africa", "latitude": -1.28, "longitude": 36.82, "intensity": 0.75 }
    ],
    "effectiveAntibiotics": ["Azithromycin", "Meropenem", "Tigecycline", "Cefixime"]
  }
];

  // Set the response to JSON format
  response.status(200).json(pathogens);
}
