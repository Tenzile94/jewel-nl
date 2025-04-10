import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The History of Jewelry
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore how jewelry has evolved throughout human history, from
            prehistoric adornments to modern masterpieces.
          </p>
        </div>
      </div>

      <Tabs defaultValue="ancient" className="mt-12">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="ancient">Ancient</TabsTrigger>
          <TabsTrigger value="medieval">Medieval</TabsTrigger>
          <TabsTrigger value="renaissance">Renaissance</TabsTrigger>
          <TabsTrigger value="victorian">Victorian</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {timelinePeriods.map((period) => (
          <TabsContent key={period.id} value={period.id} className="mt-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Image
                src={period.image || "/placeholder.svg"}
                alt={period.title}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full aspect-[3/2]"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-2xl font-bold">{period.title}</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  {period.description}
                </p>
                <div className="space-y-2">
                  <h3 className="font-medium">Key Characteristics:</h3>
                  <ul className="space-y-2">
                    {period.characteristics.map((characteristic, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                        <span>{characteristic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Notable Examples:</h3>
                  <ul className="space-y-2">
                    {period.examples.map((example, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Jewelry Timeline
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gray-200 dark:bg-gray-800" />
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="flex w-full md:w-1/2">
                  <div
                    className={`${
                      index % 2 === 0 ? "mr-8 md:mr-12" : "ml-8 md:ml-12"
                    } relative rounded-lg bg-white p-6 shadow-md dark:bg-gray-800`}
                  >
                    <h3 className="font-bold">{event.year}</h3>
                    <p className="mt-2">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const timelinePeriods = [
  {
    id: "ancient",
    title: "Ancient Jewelry (7000 BCE - 500 CE)",
    description:
      "The earliest jewelry was created from natural materials like bone, animal teeth, shell, wood, and carved stone. As metalworking technologies developed, gold became the primary material for jewelry among those who could afford it. Ancient Egyptian, Greek, and Roman civilizations all developed distinctive jewelry styles.",
    image: "/pharaohs-treasure.png",
    characteristics: [
      "Use of gold as the primary precious metal",
      "Religious and protective symbols",
      "Gemstones valued for magical properties rather than brilliance",
      "Techniques included granulation, filigree, and repoussé",
    ],
    examples: [
      "Egyptian pectoral necklaces featuring scarab beetles",
      "Greek gold wreaths and diadems",
      "Etruscan granulation work",
      "Roman cameos and intaglios",
    ],
  },
  {
    id: "medieval",
    title: "Medieval Jewelry (500 - 1500 CE)",
    description:
      "Medieval jewelry reflected the hierarchical society of the time. Sumptuary laws often dictated who could wear certain types of jewelry. Religious symbolism was prominent, and jewelry often served practical purposes as well as decorative ones.",
    image:
      "/placeholder.svg?height=400&width=600&query=medieval gold and gemstone jewelry",
    characteristics: [
      "Heavy use of religious imagery",
      "Cabochon-cut gemstones (polished rather than faceted)",
      "Enameling techniques, particularly cloisonné",
      "Rings used as seals for documents",
    ],
    examples: [
      "Byzantine enameled jewelry",
      "Gothic brooches with religious motifs",
      "Posy rings with inscriptions",
      "Livery collars indicating political allegiance",
    ],
  },
  {
    id: "renaissance",
    title: "Renaissance Jewelry (1400 - 1700 CE)",
    description:
      "Renaissance jewelry reflected the period's renewed interest in classical art and culture. Jewelry became more intricate, with improved gemstone cutting techniques allowing for greater brilliance. Portraiture of the era shows elaborate jewelry worn by the nobility and wealthy merchants.",
    image:
      "/placeholder.svg?height=400&width=600&query=renaissance pendant with pearls and gemstones",
    characteristics: [
      "Pendants with complex designs and religious themes",
      "Development of the rose cut for diamonds",
      "Elaborate enameling techniques",
      "Pearls were highly prized",
    ],
    examples: [
      "Pendant crosses with religious scenes",
      "Aigrettes (hair ornaments)",
      "Pomanders (perfume containers)",
      "Memento mori jewelry reminding of mortality",
    ],
  },
  {
    id: "victorian",
    title: "Victorian Jewelry (1837 - 1901)",
    description:
      "Victorian jewelry is named after Queen Victoria of England, whose 64-year reign saw various jewelry trends. The era is often divided into three periods: the Romantic period, the Grand period, and the Aesthetic period, each with distinctive styles.",
    image:
      "/placeholder.svg?height=400&width=600&query=victorian cameo brooch and locket",
    characteristics: [
      "Sentimental and memorial jewelry",
      "Nature motifs including flowers, birds, and insects",
      "Use of hair jewelry as mementos",
      "Revival styles drawing from earlier historical periods",
    ],
    examples: [
      "Mourning jewelry containing hair of the deceased",
      "Cameo brooches",
      "Acrostic jewelry spelling words with gemstones",
      "Scottish pebble jewelry",
    ],
  },
  {
    id: "modern",
    title: "Modern Jewelry (1900 - Present)",
    description:
      "The 20th and 21st centuries have seen rapid changes in jewelry styles, from the flowing lines of Art Nouveau to the geometric patterns of Art Deco, and from the bold statements of mid-century design to contemporary artistic expressions.",
    image:
      "/placeholder.svg?height=400&width=600&query=modern art deco and contemporary jewelry",
    characteristics: [
      "Experimentation with new materials",
      "Influence of fashion trends on jewelry design",
      "Mass production making jewelry more accessible",
      "Computer-aided design and 3D printing technologies",
    ],
    examples: [
      "Art Nouveau jewelry by René Lalique",
      "Art Deco designs by Cartier and Van Cleef & Arpels",
      "Mid-century modernist jewelry",
      "Contemporary artist-designed pieces",
    ],
  },
];

const timelineEvents = [
  {
    year: "7000 BCE",
    description: "First copper jewelry appears in the Middle East",
  },
  {
    year: "5000 BCE",
    description: "Gold jewelry first created in ancient Mesopotamia and Egypt",
  },
  {
    year: "2000 BCE",
    description: "Development of granulation technique in Mesopotamia",
  },
  {
    year: "1200 BCE",
    description: "Lost-wax casting technique refined in ancient Greece",
  },
  {
    year: "500 BCE",
    description: "Etruscan goldsmiths perfect granulation techniques",
  },
  {
    year: "100 CE",
    description: "Romans popularize the use of colored gemstones in jewelry",
  },
  {
    year: "1200 CE",
    description: "European guilds establish standards for goldsmithing",
  },
  {
    year: "1477 CE",
    description:
      "Archduke Maximilian gives Mary of Burgundy the first diamond engagement ring",
  },
  {
    year: "1700s",
    description:
      "Development of the brilliant cut diamond increases sparkle and brilliance",
  },
  {
    year: "1837",
    description:
      "Tiffany & Co. founded, later becoming an iconic jewelry brand",
  },
  {
    year: "1895",
    description: "Art Nouveau movement brings organic forms to jewelry design",
  },
  {
    year: "1920s",
    description:
      "Art Deco style introduces geometric patterns and bright colors",
  },
  {
    year: "1948",
    description: "De Beers launches the 'A Diamond is Forever' campaign",
  },
  {
    year: "2000s",
    description:
      "Computer-aided design and 3D printing revolutionize jewelry manufacturing",
  },
];
