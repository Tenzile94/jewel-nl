import Image from "next/image"

export default function PlatinumPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Platinum</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The rare, dense, and durable noble metal prized for fine jewelry.
          </p>
        </div>
      </div>

      <div className="grid gap-12 mt-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/platinum-jewelry-collection.png"
            alt="Collection of platinum jewelry pieces"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full aspect-[3/2]"
          />
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold">The Exceptional Nature of Platinum</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Platinum stands apart from other precious metals with its remarkable combination of rarity, density,
              durability, and natural white color. Approximately 30 times rarer than gold, platinum is one of the
              scarcest elements in the Earth's crust.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              While platinum's use in jewelry is relatively recent compared to gold and silver—becoming popular only in
              the late 19th century—it has quickly established itself as the premier metal for high-end jewelry,
              particularly for setting diamonds and other precious gemstones.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Its natural white luster, resistance to tarnish and wear, and hypoallergenic properties make platinum an
              ideal choice for jewelry meant to last generations.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Properties of Platinum</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {platinumProperties.map((property) => (
              <div key={property.title} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold mb-2">{property.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{property.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Platinum Alloys in Jewelry</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            While platinum is often used in a much purer form than gold or silver, it is still typically alloyed with
            other platinum group metals to improve its working properties for jewelry.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border p-2 text-left">Alloy</th>
                  <th className="border p-2 text-left">Composition</th>
                  <th className="border p-2 text-left">Markings</th>
                  <th className="border p-2 text-left">Characteristics</th>
                </tr>
              </thead>
              <tbody>
                {platinumAlloys.map((alloy) => (
                  <tr key={alloy.alloy} className="border-b">
                    <td className="border p-2">{alloy.alloy}</td>
                    <td className="border p-2">{alloy.composition}</td>
                    <td className="border p-2">{alloy.markings}</td>
                    <td className="border p-2">{alloy.characteristics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Platinum vs. Other White Metals</h2>
          <div className="grid gap-8">
            {metalComparisons.map((comparison) => (
              <div key={comparison.title} className="grid gap-6 md:grid-cols-2 items-center">
                <div className="relative h-[250px]">
                  <Image
                    src={comparison.image || "/placeholder.svg"}
                    alt={comparison.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{comparison.title}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">{comparison.description}</p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Advantages</h4>
                      <ul className="mt-2 space-y-1">
                        {comparison.advantages.map((advantage, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <div className="mr-2 h-2 w-2 rounded-full bg-green-500 mt-1.5" />
                            <span>{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Disadvantages</h4>
                      <ul className="mt-2 space-y-1">
                        {comparison.disadvantages.map((disadvantage, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <div className="mr-2 h-2 w-2 rounded-full bg-red-500 mt-1.5" />
                            <span>{disadvantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Caring for Platinum Jewelry</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold mb-4">Cleaning Platinum</h3>
              <ol className="space-y-2 list-decimal list-inside">
                <li>Mix mild soap with warm water.</li>
                <li>Soak the platinum jewelry for a few minutes.</li>
                <li>Gently scrub with a soft-bristled brush, focusing on areas that might collect dirt.</li>
                <li>Rinse thoroughly with clean water.</li>
                <li>Pat dry with a soft, lint-free cloth.</li>
              </ol>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                For pieces with gemstones, ensure the stones can safely be exposed to water and soap. Some gems require
                special care.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Maintenance Tips</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Have platinum jewelry professionally cleaned and inspected annually.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Remove platinum jewelry during rough activities to prevent scratches.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Store platinum pieces separately to avoid scratching other jewelry.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Polish with a jewelry cloth specifically designed for platinum if needed.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Consider professional re-polishing every few years to restore luster.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Platinum in Jewelry History</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {platinumHistory.map((period) => (
              <div key={period.era} className="border rounded-lg p-6">
                <h3 className="font-bold mb-2">{period.era}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{period.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Interesting Facts About Platinum</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {platinumFacts.map((fact, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                  {index + 1}
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">{fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const platinumProperties = [
  {
    title: "Chemical Symbol",
    description: "Pt (from the Spanish 'platina', meaning 'little silver')",
  },
  {
    title: "Atomic Number",
    description: "78",
  },
  {
    title: "Melting Point",
    description: "1,768°C (3,214°F)",
  },
  {
    title: "Density",
    description: "21.45 g/cm³ (one of the densest metals, about twice as dense as silver)",
  },
  {
    title: "Hardness",
    description: "4-4.5 on the Mohs scale (harder than gold, softer than iron)",
  },
  {
    title: "Malleability",
    description: "Highly malleable, though less so than gold",
  },
  {
    title: "Corrosion Resistance",
    description: "Excellent; resistant to oxidation and tarnishing",
  },
  {
    title: "Hypoallergenic",
    description: "Naturally hypoallergenic, making it ideal for sensitive skin",
  },
]

const platinumAlloys = [
  {
    alloy: "Platinum 950",
    composition: "95% platinum, 5% other metals (often ruthenium, iridium, or cobalt)",
    markings: "950, Plat, Platinum",
    characteristics: "Most common in jewelry; excellent balance of purity and durability",
  },
  {
    alloy: "Platinum 900",
    composition: "90% platinum, 10% other metals (often iridium)",
    markings: "900, Plat, Platinum",
    characteristics: "Slightly harder than 950; used in some vintage jewelry and settings",
  },
  {
    alloy: "Platinum 850",
    composition: "85% platinum, 15% other metals (often palladium or iridium)",
    markings: "850, Plat, Platinum",
    characteristics: "More affordable; still considered fine platinum jewelry",
  },
  {
    alloy: "Platinum-Iridium",
    composition: "Typically 90-95% platinum with iridium",
    markings: "Varies by specific composition",
    characteristics: "Harder and more durable; used for settings that need extra strength",
  },
  {
    alloy: "Platinum-Ruthenium",
    composition: "Typically 95% platinum with ruthenium",
    markings: "Varies by specific composition",
    characteristics: "Improved casting properties; popular in modern manufacturing",
  },
  {
    alloy: "Platinum-Cobalt",
    composition: "Typically 95% platinum with cobalt",
    markings: "Varies by specific composition",
    characteristics: "Magnetic; harder than other platinum alloys; good for precision castings",
  },
]

const metalComparisons = [
  {
    title: "Platinum vs. White Gold",
    description:
      "While both metals offer a similar appearance at first glance, platinum and white gold have significant differences in composition, durability, and maintenance requirements.",
    image: "/platinum-vs-white-gold.png",
    advantages: [
      "Natural white color that never fades",
      "More durable for gemstone settings",
      "Hypoallergenic",
      "Develops a desirable patina over time",
      "No rhodium plating required",
    ],
    disadvantages: [
      "Significantly more expensive",
      "Heavier weight (can be pro or con)",
      "Scratches more easily (though doesn't lose metal)",
      "Fewer color options for mixed metal designs",
      "Fewer jewelers specialize in platinum work",
    ],
  },
  {
    title: "Platinum vs. Palladium",
    description:
      "Palladium is another platinum group metal that has gained popularity as a white metal alternative. It shares many properties with platinum but has some distinct differences.",
    image: "/placeholder.svg?height=250&width=400&query=palladium and platinum rings comparison",
    advantages: [
      "Similar appearance to platinum",
      "Lighter weight (about 40% lighter)",
      "Lower price point",
      "Natural white color",
      "Hypoallergenic",
    ],
    disadvantages: [
      "Less dense and substantial feel",
      "Not as strong for holding gemstones",
      "Less prestigious in consumer perception",
      "Fewer jewelers work with palladium",
      "More reactive to chemicals",
    ],
  },
  {
    title: "Platinum vs. Silver",
    description:
      "While both platinum and silver offer a white metal appearance, they differ dramatically in durability, value, and maintenance requirements.",
    image: "/placeholder.svg?height=250&width=400&query=platinum and silver jewelry comparison",
    advantages: [
      "Much more durable and scratch-resistant",
      "Doesn't tarnish like silver",
      "Better for securing gemstones",
      "Maintains its appearance over decades",
      "Higher value and prestige",
    ],
    disadvantages: [
      "Significantly more expensive",
      "Heavier weight",
      "Fewer design options in the market",
      "Less traditional for some jewelry types",
      "More difficult to resize or repair",
    ],
  },
]

const platinumHistory = [
  {
    era: "Pre-Columbian America",
    description:
      "Indigenous peoples in what is now Colombia and Ecuador worked with platinum, creating small objects and jewelry. They used a sintering technique to work with the metal,  creating small objects and jewelry. They used a sintering technique to work with the metal, which they couldn't melt due to its high melting point.",
  },
  {
    era: "European Discovery",
    description:
      "Spanish conquistadors encountered platinum in South America in the 16th century but considered it an impurity in gold and often discarded it. They named it 'platina', or 'little silver', considering it inferior.",
  },
  {
    era: "Scientific Recognition (18th Century)",
    description:
      "European scientists began studying platinum seriously in the 1700s. In 1751, Swedish scientist Henrik Scheffer published the first scientific paper on platinum, recognizing it as a new element.",
  },
  {
    era: "Early Jewelry Use (19th Century)",
    description:
      "King Louis XVI of France declared platinum the only metal fit for royalty. By the early 1800s, improved refining techniques made platinum more workable, and it began appearing in high-end jewelry.",
  },
  {
    era: "Art Nouveau & Edwardian Era",
    description:
      "Platinum became the preferred metal for fine jewelry around 1900. Its strength allowed for delicate, intricate designs with minimal metal showing, perfect for the lacey, feminine Edwardian aesthetic.",
  },
  {
    era: "Art Deco Period",
    description:
      "The 1920s and 30s saw platinum at its height of popularity. Art Deco jewelry featured geometric platinum settings that showcased diamonds and colored gemstones with minimal metal visible.",
  },
  {
    era: "WWII Restrictions",
    description:
      "Platinum was declared a strategic metal during World War II, and its use in jewelry was prohibited in the United States as it was needed for military applications. This led to a rise in white gold jewelry.",
  },
  {
    era: "Modern Renaissance",
    description:
      "Since the late 20th century, platinum has regained its status as the premier metal for fine jewelry, particularly for engagement rings and wedding bands, valued for its durability and natural white color.",
  },
]

const platinumFacts = [
  "All the platinum ever mined throughout history would fit in an average-sized living room.",
  "Platinum is so rare that only a few hundred tons are produced annually, compared to thousands of tons of gold.",
  "About 20% of consumer products contain platinum, often in catalytic converters, hard drives, and medical devices.",
  "The largest platinum deposits are found in South Africa, which produces about 80% of the world's platinum.",
  "Platinum is used in cancer treatments; the drug cisplatin contains platinum and is used in chemotherapy.",
  "The standard kilogram weight stored in France was made from platinum-iridium alloy due to its stability and resistance to corrosion.",
  "Platinum's name comes from the Spanish word 'platina', meaning 'little silver', as Spanish conquistadors initially considered it an impurity in silver.",
  "Unlike gold, which has been known and used for thousands of years, platinum only became widely used in jewelry in the late 19th century.",
]
