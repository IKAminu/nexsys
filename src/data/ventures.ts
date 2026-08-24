export interface Venture {
  id: string
  name: string
  tagline: string
  description: string
  focusPhrase: string
  accentColor: string
  accentColorDim: string
  letter: string
}

export const ventures: Venture[] = [
  {
    id: "nexora-systems",
    name: "Nexora Systems",
    tagline: "Technology & Digital Solutions",
    description:
      "Digital solutions, software development, systems integration and technology infrastructure for businesses.",
    focusPhrase: "Manages its operations through",
    accentColor: "#1769FF",
    accentColorDim: "rgba(23, 105, 255, 0.15)",
    letter: "N",
  },
  {
    id: "nexora-skillnet",
    name: "Nexora SkillNet",
    tagline: "Digital Skills & Talent",
    description:
      "Digital learning, professional development and talent development programmes designed to build capable people.",
    focusPhrase: "Develops its people through",
    accentColor: "#22C55E",
    accentColorDim: "rgba(34, 197, 94, 0.15)",
    letter: "SK",
  },
  {
    id: "nexora-marketplace",
    name: "Nexora Marketplace",
    tagline: "Digital Commerce",
    description:
      "A digital marketplace connecting buyers and sellers through reliable, technology-enabled commerce infrastructure.",
    focusPhrase: "Reaches customers through",
    accentColor: "#A855F7",
    accentColorDim: "rgba(168, 85, 247, 0.15)",
    letter: "M",
  },
  {
    id: "enyigo-logistics",
    name: "Enyigo Logistics",
    tagline: "Logistics & Fulfilment",
    description:
      "Technology-enabled movement, delivery and fulfilment solutions supporting businesses across Nigeria.",
    focusPhrase: "Moves products through",
    accentColor: "#F97316",
    accentColorDim: "rgba(249, 115, 22, 0.15)",
    letter: "E",
  },
]

export const parentCompany = {
  name: "Nexora Systems Limited",
  tagline: "Parent Company / Technology Group",
  description:
    "Building a connected ecosystem of technology-driven ventures.",
  accentColor: "#1769FF",
}
