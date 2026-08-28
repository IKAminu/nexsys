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
      "Builds software, digital solutions, and technology systems that helps businesses operate smarter and grow.",
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
      "Provide digital learning and skills development that prepares people for opportunities in the digital economy.",
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
      "Connect businesses and customers through digital marketplace that make buying and selling easier.",
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
      "Uses technology to make the movement, delivery and fulfillment of goods faster and more efficient.",
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
