import { VercelRequest, VercelResponse } from '@vercel/node';

export default function (request: VercelRequest, response: VercelResponse) {
  // This is your global landscape data
const pathogens = [
  {
    "name": "N. gonorrhoeae (Super Gonorrhea)",
    "tier": "HIGH",
    "status": "Rapid Evolution",
    "description": "Neisseria gonorrhoeae with high resistance to traditional therapies.",
    "detailMarkdown": "### Global Surveillance\nIncreasing resistance to ceftriaxone (the last line of defense). In late 2025/2026, the approval of Zoliflodacin and Gepotidacin has provided new clinical paths, though access remains limited in high-burden urban centers.",
    "hotspots": [
      {
        "region": "Western Pacific",
        "latitude": 35.67,
        "longitude": 139.65,
        "intensity": 0.85
      },
      {
        "region": "United Kingdom",
        "latitude": 51.5,
        "longitude": -0.12,
        "intensity": 0.7
      },
      {
        "region": "Sub-Saharan Africa",
        "latitude": -1.29,
        "longitude": 36.82,
        "intensity": 0.8
      }
    ],
    "effectiveAntibiotics": [
      "Zoliflodacin",
      "Gepotidacin",
      "Ceftriaxone",
      "Azithromycin",
      "Spectinomycin"
    ]
  },
  {
    "name": "MRSA (S. aureus)",
    "tier": "HIGH",
    "status": "Stable",
    "description": "Methicillin-resistant Staphylococcus aureus.",
    "detailMarkdown": "### Community vs. Hospital\nWhile hospital-acquired MRSA is stabilizing due to better hygiene, community-acquired MRSA (CA-MRSA) remains a significant global burden, particularly in skin and soft tissue infections.",
    "hotspots": [
      {
        "region": "Western Europe",
        "latitude": 48.85,
        "longitude": 2.35,
        "intensity": 0.6
      },
      {
        "region": "South America",
        "latitude": -34.6,
        "longitude": -58.38,
        "intensity": 0.7
      },
      {
        "region": "North America",
        "latitude": 38.89,
        "longitude": -77.03,
        "intensity": 0.65
      }
    ],
    "effectiveAntibiotics": [
      "Vancomycin",
      "Daptomycin",
      "Linezolid",
      "Ceftaroline",
      "Dalbavancin"
    ]
  },
  {
    "name": "M. tuberculosis (RR-TB)",
    "tier": "CRITICAL",
    "status": "High Burden",
    "description": "Rifampicin-resistant Tuberculosis; top global AMR threat.",
    "detailMarkdown": "### 2026 Global Update\nThe BPaLM regimen (Bedaquiline, Pretomanid, Linezolid, and Moxifloxacin) has become the gold standard, drastically shortening treatment duration and improving outcomes for resistant strains.",
    "hotspots": [
      {
        "region": "Eastern Europe / Central Asia",
        "latitude": 55.75,
        "longitude": 37.61,
        "intensity": 0.9
      },
      {
        "region": "Southeast Asia",
        "latitude": 14.59,
        "longitude": 120.98,
        "intensity": 0.85
      },
      {
        "region": "Southern Africa",
        "latitude": -26.2,
        "longitude": 28.04,
        "intensity": 0.8
      }
    ],
    "effectiveAntibiotics": [
      "Bedaquiline",
      "Pretomanid",
      "Linezolid",
      "Moxifloxacin",
      "Delamanid"
    ]
  },
  {
    "name": "XDR Salmonella Typhi",
    "tier": "HIGH",
    "status": "Outbreak Alert",
    "description": "Extensively drug-resistant Typhoid fever.",
    "detailMarkdown": "### 2025-2026 Surveillance\nResistant to all first-line antibiotics. Surveillance in Karachi has noted emerging concerns regarding Azithromycin susceptibility, which is the current mainstay of oral treatment.",
    "hotspots": [
      {
        "region": "South Asia (Karachi)",
        "latitude": 24.86,
        "longitude": 67.0,
        "intensity": 0.95
      },
      {
        "region": "East Africa",
        "latitude": -1.28,
        "longitude": 36.82,
        "intensity": 0.75
      }
    ],
    "effectiveAntibiotics": [
      "Azithromycin",
      "Meropenem",
      "Tigecycline",
      "Cefixime"
    ]
  },
  {
    "name": "Acinetobacter baumannii (CRAB)",
    "tier": "CRITICAL",
    "status": "Global Crisis",
    "description": "Carbapenem-resistant Acinetobacter baumannii.",
    "detailMarkdown": "### Hospital Sentinel\nOften associated with ventilator-associated pneumonia and bloodstream infections in ICU settings. It is inherently resistant to many disinfectants and antibiotics.",
    "hotspots": [
      {
        "region": "South East Asia",
        "latitude": 13.75,
        "longitude": 100.5,
        "intensity": 0.9
      },
      {
        "region": "Eastern Europe",
        "latitude": 52.23,
        "longitude": 21.01,
        "intensity": 0.85
      }
    ],
    "effectiveAntibiotics": [
      "Cefiderocol",
      "Sulbactam-durlobactam",
      "Colistin",
      "Tigecycline"
    ]
  },
  {
    "name": "Klebsiella pneumoniae (CRKP)",
    "tier": "CRITICAL",
    "status": "High Burden",
    "description": "Carbapenem-resistant Klebsiella pneumoniae.",
    "detailMarkdown": "### Enterobacterales Concern\nMajor cause of hospital-acquired infections. The spread of KPC and NDM enzymes makes this one of the most difficult pathogens to treat in 2026.",
    "hotspots": [
      {
        "region": "India",
        "latitude": 28.61,
        "longitude": 77.2,
        "intensity": 0.95
      },
      {
        "region": "Mediterranean",
        "latitude": 37.98,
        "longitude": 23.72,
        "intensity": 0.8
      }
    ],
    "effectiveAntibiotics": [
      "Meropenem-vaborbactam",
      "Plazomicin",
      "Ceftazidime-avibactam",
      "Eravacycline"
    ]
  },
  {
    "name": "Pseudomonas aeruginosa (CRPA)",
    "tier": "CRITICAL",
    "status": "Increasing",
    "description": "Carbapenem-resistant Pseudomonas aeruginosa.",
    "detailMarkdown": "### Biofilm Threat\nStrong ability to form biofilms on medical devices. In 2026, it is a priority for new antibiotic development due to high mortality rates in immunocompromised patients.",
    "hotspots": [
      {
        "region": "Latin America",
        "latitude": -23.55,
        "longitude": -46.63,
        "intensity": 0.75
      },
      {
        "region": "North America",
        "latitude": 40.71,
        "longitude": -74.0,
        "intensity": 0.6
      }
    ],
    "effectiveAntibiotics": [
      "Ceftolozane-tazobactam",
      "Imipenem-relebactam",
      "Cefiderocol"
    ]
  },
  {
    "name": "Enterococcus faecium (VRE)",
    "tier": "HIGH",
    "status": "Increasing",
    "description": "Vancomycin-resistant Enterococcus faecium.",
    "detailMarkdown": "### Persistent Colonizer\nVRE is a major cause of surgical site infections and urinary tract infections. It persists in the hospital environment for long periods.",
    "hotspots": [
      {
        "region": "North America",
        "latitude": 41.87,
        "longitude": -87.62,
        "intensity": 0.8
      },
      {
        "region": "Australia",
        "latitude": -33.86,
        "longitude": 151.2,
        "intensity": 0.65
      }
    ],
    "effectiveAntibiotics": [
      "Daptomycin",
      "Linezolid",
      "Tigecycline",
      "Quinupristin-dalfopristin"
    ]
  }
];

  // Set the response to JSON format
  response.status(200).json(pathogens);
}
