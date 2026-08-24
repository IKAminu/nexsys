export interface ServiceArea {
  id: string
  name: string
  venture: string
  ventureColor: string
  capabilities: string[]
  icon: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export const serviceAreas: ServiceArea[] = [
  {
    id: "technology",
    name: "Technology",
    venture: "Nexora Systems",
    ventureColor: "#1769FF",
    capabilities: [
      "Digital solutions",
      "Business technology",
      "Software solutions",
      "Business management technology",
      "Digital transformation",
    ],
    icon: "tech",
  },
  {
    id: "commerce",
    name: "Commerce",
    venture: "Nexora Marketplace",
    ventureColor: "#A855F7",
    capabilities: [
      "Digital marketplace services",
      "Merchant enablement",
      "Digital commerce",
      "Product discovery",
      "Business-to-consumer commerce",
    ],
    icon: "commerce",
  },
  {
    id: "logistics",
    name: "Logistics",
    venture: "Enyigo Logistics",
    ventureColor: "#F97316",
    capabilities: [
      "Logistics",
      "Delivery",
      "Fulfilment",
      "Business logistics support",
      "Technology-enabled movement of goods",
    ],
    icon: "logistics",
  },
  {
    id: "skills",
    name: "Skills",
    venture: "Nexora SkillNet",
    ventureColor: "#22C55E",
    capabilities: [
      "Digital skills development",
      "Professional learning",
      "Business skills",
      "Digital literacy",
      "Talent development",
    ],
    icon: "skills",
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "We listen carefully to the problem before reaching for solutions.",
  },
  {
    number: "02",
    title: "Design",
    description: "We design systems and approaches that fit the actual context.",
  },
  {
    number: "03",
    title: "Build",
    description: "We build with discipline, using the right tools for the task.",
  },
  {
    number: "04",
    title: "Connect",
    description: "We connect capabilities across the ecosystem where it adds value.",
  },
  {
    number: "05",
    title: "Grow",
    description: "We support growth through continued iteration and improvement.",
  },
]

export const outcomes = [
  { verb: "Operate", adverb: "better." },
  { verb: "Connect", adverb: "better." },
  { verb: "Sell", adverb: "better." },
  { verb: "Deliver", adverb: "better." },
  { verb: "Learn", adverb: "better." },
  { verb: "Grow", adverb: "" },
]
