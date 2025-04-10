import Image from "next/image";

export default function SilverPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Silver
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The lustrous white metal with a rich history in jewelry and
            decorative arts.
          </p>
        </div>
      </div>

      <div className="grid gap-12 mt-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/silver-jewelry-collection.png"
            alt="Collection of silver jewelry pieces"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full aspect-[3/2]"
          />
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold">
              The Timeless Appeal of Silver
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Silver has been treasured for its lustrous beauty and workability
              since ancient times. As one of the first metals discovered and
              used by humans, silver has played a significant role in currency,
              tableware, jewelry, and decorative arts throughout history.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Its bright white color, high luster, and excellent reflectivity
              make silver uniquely beautiful among metals. While it's more
              abundant in the Earth's crust than gold, silver's beauty and
              versatility have ensured its status as a precious metal.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Today, silver remains a popular choice for jewelry, offering an
              elegant aesthetic at a more accessible price point than gold or
              platinum.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Properties of Silver</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {silverProperties.map((property) => (
              <div
                key={property.title}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="font-bold mb-2">{property.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {property.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Types of Silver</h2>
          <div className="grid gap-8">
            {silverTypes.map((type) => (
              <div
                key={type.title}
                className="grid gap-6 md:grid-cols-2 items-center"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={type.image || "/placeholder.svg"}
                    alt={type.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{type.title}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {type.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Silver Purity Standards</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Pure silver (999 fine silver) is too soft for most practical
            applications, so it's typically alloyed with other metals, usually
            copper, to increase durability. Different standards exist around the
            world to indicate silver purity.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border p-2 text-left">Standard</th>
                  <th className="border p-2 text-left">Silver Content</th>
                  <th className="border p-2 text-left">Markings</th>
                  <th className="border p-2 text-left">Common Uses</th>
                </tr>
              </thead>
              <tbody>
                {silverStandards.map((standard) => (
                  <tr key={standard.standard} className="border-b">
                    <td className="border p-2">{standard.standard}</td>
                    <td className="border p-2">{standard.content}</td>
                    <td className="border p-2">{standard.markings}</td>
                    <td className="border p-2">{standard.uses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Caring for Silver Jewelry</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold mb-4">Preventing Tarnish</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Store silver in anti-tarnish bags or cloth.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Keep silver away from rubber, latex, and certain plastics.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Remove silver jewelry before swimming, bathing, or using
                    household chemicals.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Wear your silver regularly—natural oils help prevent
                    tarnish.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Wipe silver with a soft cloth after wearing to remove oils
                    and moisture.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">
                Cleaning Tarnished Silver
              </h3>
              <ol className="space-y-2 list-decimal list-inside">
                <li>Use a silver polishing cloth for light tarnish.</li>
                <li>
                  For moderate tarnish, use a commercial silver cleaner
                  following product instructions.
                </li>
                <li>
                  For a gentle home solution, line a bowl with aluminum foil,
                  add hot water and baking soda (1 tablespoon per cup), and
                  submerge silver items.
                </li>
                <li>
                  For silver with gemstones, check if the stones can safely be
                  exposed to cleaning solutions.
                </li>
                <li>
                  Rinse thoroughly after cleaning and dry completely with a soft
                  cloth.
                </li>
              </ol>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Note: Avoid using toothpaste or abrasive cleaners, which can
                scratch silver.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Silver Throughout History</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {silverHistory.map((period) => (
              <div key={period.era} className="border rounded-lg p-6">
                <h3 className="font-bold mb-2">{period.era}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {period.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">
            Silver Techniques and Treatments
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {silverTechniques.map((technique) => (
              <div key={technique.name} className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                  {technique.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold">{technique.name}</h3>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    {technique.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const silverProperties = [
  {
    title: "Chemical Symbol",
    description: "Ag (from the Latin 'argentum', meaning 'shining')",
  },
  {
    title: "Atomic Number",
    description: "47",
  },
  {
    title: "Melting Point",
    description: "961.8°C (1,763.2°F)",
  },
  {
    title: "Density",
    description: "10.49 g/cm³",
  },
  {
    title: "Malleability",
    description:
      "Highly malleable; can be hammered into sheets as thin as 0.00025 mm",
  },
  {
    title: "Ductility",
    description:
      "Extremely ductile; can be drawn into wire finer than human hair",
  },
  {
    title: "Reflectivity",
    description:
      "Highest optical reflectivity of any metal (95% reflective when polished)",
  },
  {
    title: "Conductivity",
    description: "Best electrical and thermal conductor of all metals",
  },
];

const silverTypes = [
  {
    title: "Sterling Silver",
    description:
      "The most common silver alloy used in jewelry and silverware, sterling silver contains 92.5% silver and 7.5% other metals (usually copper). This composition provides a good balance between the beauty of pure silver and the durability needed for everyday use.",
    image: "/sterling-silver-jewelry.png",
    features: [
      "Marked with '925' or 'sterling' to indicate 92.5% purity",
      "More durable than fine silver while maintaining excellent workability",
      "Will tarnish over time due to the copper content",
      "Used for a wide range of jewelry from everyday pieces to high-end designs",
      "The standard for silver jewelry in most Western countries",
    ],
  },
  {
    title: "Fine Silver",
    description:
      "Fine silver is 99.9% pure silver, making it softer and more lustrous than sterling silver. While beautiful, its softness limits its use in jewelry to pieces that won't receive much wear or stress.",
    image: "/fine-silver-jewelry.png",
    features: [
      "Marked with '999' to indicate 99.9% purity",
      "Bright white color with the highest luster",
      "Tarnishes more slowly than sterling silver",
      "Too soft for many jewelry applications, especially rings",
      "Often used in silver clay jewelry, Thai hill tribe silver, and some art jewelry",
    ],
  },
  {
    title: "Argentium Silver",
    description:
      "A modern, patented silver alloy that replaces some of the copper in sterling silver with germanium. This creates a more tarnish-resistant silver with several beneficial working properties for jewelers.",
    image: "/argentium-silver-collection.png",
    features: [
      "Contains at least 92.5% silver, just like sterling",
      "Significantly more tarnish-resistant than traditional sterling",
      "Harder and more scratch-resistant than sterling silver",
      "Can be fused rather than soldered in some applications",
      "Environmentally friendly as it requires less cleaning chemicals",
    ],
  },
  {
    title: "Coin Silver",
    description:
      "Historically made from melted silver coins, coin silver contains 90% silver and 10% copper. It was commonly used for silverware and jewelry in America during the 18th and 19th centuries before sterling became the standard.",
    image:
      "/placeholder.svg?height=250&width=400&query=antique coin silver jewelry",
    features: [
      "Marked with '900' to indicate 90% purity",
      "Slightly more durable but less bright than sterling silver",
      "Historical significance in American silver items",
      "Less commonly used in modern jewelry",
      "Often found in antique pieces and some Native American jewelry",
    ],
  },
];

const silverStandards = [
  {
    standard: "Sterling Silver",
    content: "92.5% silver, 7.5% other metals (usually copper)",
    markings: "925, Sterling, Ster, STG",
    uses: "Most jewelry, tableware, hollowware",
  },
  {
    standard: "Fine Silver",
    content: "99.9% silver",
    markings: "999, Fine Silver",
    uses: "Silver bullion, some art jewelry, silver clay pieces",
  },
  {
    standard: "Coin Silver",
    content: "90% silver, 10% copper",
    markings: "900, Coin",
    uses: "Historical American silverware, some Native American jewelry",
  },
  {
    standard: "Britannia Silver",
    content: "95.8% silver, 4.2% other metals",
    markings: "958, Britannia",
    uses: "High-end British silverware, some premium jewelry",
  },
  {
    standard: "Mexican Silver",
    content: "95% silver, 5% copper",
    markings: "950, Mexican Silver",
    uses: "Traditional Mexican jewelry and decorative items",
  },
  {
    standard: "Silver Plate",
    content: "Thin layer of silver over base metal",
    markings: "EPNS (Electroplated Nickel Silver), Silver on Copper",
    uses: "Affordable silverware, costume jewelry",
  },
];

const silverHistory = [
  {
    era: "Ancient Civilizations (3000 BCE)",
    description:
      "Silver mining began in Anatolia (modern Turkey). Ancient Egyptians, Mesopotamians, and Greeks valued silver for jewelry, religious objects, and as currency.",
  },
  {
    era: "Roman Empire",
    description:
      "Romans extensively mined silver throughout their empire. The denarius silver coin became the standard currency, and silver tableware signified wealth and status.",
  },
  {
    era: "Middle Ages",
    description:
      "Silver mining expanded in Central Europe. Guilds established standards for silversmithing, and hallmarking systems began to ensure quality and purity.",
  },
  {
    era: "Colonial Americas",
    description:
      "Spanish conquistadors discovered vast silver deposits in Mexico and Peru. The influx of New World silver dramatically affected global economies and trade patterns.",
  },
  {
    era: "Victorian Era",
    description:
      "Silver became more accessible to the middle class. Elaborate silver tableware, decorative objects, and jewelry flourished, with intricate designs and patterns.",
  },
  {
    era: "Arts & Crafts Movement",
    description:
      "Reaction against industrial production led to handcrafted silver pieces with simpler designs emphasizing craftsmanship over ornamentation.",
  },
  {
    era: "Art Nouveau & Art Deco",
    description:
      "Silver jewelry featured flowing, nature-inspired forms in Art Nouveau, followed by geometric patterns and clean lines in Art Deco.",
  },
  {
    era: "Modern & Contemporary",
    description:
      "Silver jewelry ranges from traditional to avant-garde designs. Studio jewelry movement elevated silver as an artistic medium beyond its material value.",
  },
];

const silverTechniques = [
  {
    name: "Filigree",
    description:
      "Delicate, intricate metalwork using thin silver wire twisted and soldered into complex patterns. This ancient technique creates lace-like designs and is particularly associated with Mediterranean and Indian jewelry traditions.",
  },
  {
    name: "Repoussé and Chasing",
    description:
      "Repoussé involves pushing the metal from the back to create a raised design, while chasing is working from the front to add detail. Together, these techniques create dimensional designs in silver sheet.",
  },
  {
    name: "Granulation",
    description:
      "Tiny spheres of silver are attached to a silver surface using heat and a special flux rather than solder. This ancient technique creates textured surfaces and intricate patterns.",
  },
  {
    name: "Niello",
    description:
      "A black mixture of copper, silver, and lead sulfides is inlaid into engraved designs on silver, creating a dramatic contrast between the black niello and the bright silver.",
  },
  {
    name: "Oxidation",
    description:
      "Silver is deliberately darkened (usually with liver of sulfur) to create contrast and highlight details. The raised areas are then polished to reveal the bright silver against the darkened recesses.",
  },
  {
    name: "Mokume Gane",
    description:
      "A Japanese metalworking technique that creates a wood-grain pattern by fusing layers of different colored metals (often silver combined with copper, gold, or other metals) and then manipulating the layers.",
  },
];
