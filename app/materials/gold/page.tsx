import Image from "next/image";

export default function GoldPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Gold
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The timeless precious metal that has captivated humanity for
            millennia.
          </p>
        </div>
      </div>

      <div className="grid gap-12 mt-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/gold-jewelry-collection.png"
            alt="Collection of gold jewelry pieces"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full aspect-[3/2]"
          />
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold">The Enduring Allure of Gold</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Gold has been treasured by virtually every civilization throughout
              human history. Its warm, yellow glow, resistance to corrosion, and
              relative rarity have made it a symbol of wealth, power, and
              divinity across cultures.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              As one of the first metals to be worked by humans, gold's history
              in jewelry dates back to at least 4000 BCE. Its malleability—the
              ability to be hammered into extremely thin sheets—and
              ductility—the ability to be drawn into wire—made it ideal for
              early metalworking techniques.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Today, gold remains one of the most popular materials for fine
              jewelry, prized for both its beauty and investment value.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Properties of Gold</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {goldProperties.map((property) => (
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
          <h2 className="text-2xl font-bold mb-6">Types of Gold</h2>
          <div className="grid gap-8">
            {goldTypes.map((type) => (
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
          <h2 className="text-2xl font-bold mb-6">
            Gold Purity: Understanding Karats
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Pure gold (24K) is too soft for most jewelry applications, so it's
            typically alloyed with other metals to increase durability. The
            karat system indicates the proportion of pure gold in an alloy.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border p-2 text-left">Karat</th>
                  <th className="border p-2 text-left">Gold Content</th>
                  <th className="border p-2 text-left">Parts Pure Gold</th>
                  <th className="border p-2 text-left">Common Uses</th>
                </tr>
              </thead>
              <tbody>
                {goldKarats.map((karat) => (
                  <tr key={karat.karat} className="border-b">
                    <td className="border p-2">{karat.karat}</td>
                    <td className="border p-2">{karat.content}</td>
                    <td className="border p-2">{karat.parts}</td>
                    <td className="border p-2">{karat.uses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Caring for Gold Jewelry</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold mb-4">Cleaning Gold</h3>
              <ol className="space-y-2 list-decimal list-inside">
                <li>Mix a few drops of mild dish soap in warm water.</li>
                <li>Soak the gold jewelry for 15-30 minutes.</li>
                <li>
                  Gently scrub with a soft-bristled brush (like a toothbrush).
                </li>
                <li>Rinse thoroughly with clean water.</li>
                <li>Pat dry with a soft, lint-free cloth.</li>
              </ol>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                For pieces with gemstones, check if the stones can safely be
                exposed to water and soap. Some gems require special care.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Storage Tips</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Store gold pieces separately to prevent scratching.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Keep in a fabric-lined jewelry box or pouch.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Avoid exposure to chemicals like chlorine and household
                    cleaners.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Remove gold jewelry before swimming, bathing, or heavy
                    physical activity.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Consider professional cleaning once or twice a year.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Gold Throughout History</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {goldHistory.map((period) => (
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
            Interesting Facts About Gold
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {goldFacts.map((fact, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold">
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
  );
}

const goldProperties = [
  {
    title: "Chemical Symbol",
    description: "Au (from the Latin 'aurum', meaning 'shining dawn')",
  },
  {
    title: "Atomic Number",
    description: "79",
  },
  {
    title: "Melting Point",
    description: "1,064°C (1,947°F)",
  },
  {
    title: "Density",
    description: "19.3 g/cm³ (one of the densest metals)",
  },
  {
    title: "Malleability",
    description:
      "Extremely malleable; can be hammered into sheets as thin as 0.000013 cm",
  },
  {
    title: "Ductility",
    description:
      "Highly ductile; one ounce can be drawn into a wire 50 miles long",
  },
  {
    title: "Corrosion Resistance",
    description: "Excellent; does not tarnish, rust, or corrode",
  },
  {
    title: "Electrical Conductivity",
    description: "Excellent conductor of electricity",
  },
];

const goldTypes = [
  {
    title: "Yellow Gold",
    description:
      "The most traditional color of gold, with the warm, rich tone most people associate with gold jewelry. Yellow gold is created by alloying pure gold with silver, copper, and zinc.",
    image: "/yellow-gold-jewelry.png",
    features: [
      "Traditional, classic appearance",
      "Complements warm skin tones",
      "Requires minimal maintenance as it doesn't tarnish",
      "Available in various karats (10K, 14K, 18K, 22K)",
      "Higher karat yellow gold has a more intense golden color",
    ],
  },
  {
    title: "White Gold",
    description:
      "White gold was developed as an alternative to platinum in the early 20th century. It's created by alloying gold with white metals like nickel, silver, or palladium, and is often plated with rhodium for extra whiteness and shine.",
    image: "/white-gold-jewelry.png",
    features: [
      "Modern, bright appearance similar to platinum",
      "Complements cool skin tones",
      "More affordable than platinum",
      "Rhodium plating may need to be renewed every few years",
      "Nickel-free options available for those with allergies",
    ],
  },
  {
    title: "Rose Gold",
    description:
      "Rose gold has a warm, pinkish hue created by alloying gold with copper. The higher the copper content, the more pronounced the rosy color. It became particularly popular during the Victorian era and has seen a significant revival in recent years.",
    image: "/rose-gold-jewelry.png",
    features: [
      "Romantic, vintage appearance",
      "Flattering on most skin tones",
      "Does not require rhodium plating",
      "More durable than yellow or white gold due to copper content",
      "Available in various karats, with lower karats having a stronger pink hue",
    ],
  },
  {
    title: "Green Gold",
    description:
      "Less common than other gold colors, green gold (also called electrum) has a pale, greenish-yellow appearance. It's created by alloying gold with silver, sometimes with small amounts of copper and zinc.",
    image: "/verdant-aurum-set.png",
    features: [
      "Unique, subtle greenish tint",
      "Often used as an accent color in multi-toned jewelry",
      "Natural alloy of gold and silver found in nature",
      "Popular in Art Nouveau and nature-inspired designs",
      "Typically available in 14K and 18K",
    ],
  },
];

const goldKarats = [
  {
    karat: "24K",
    content: "99.9% pure",
    parts: "24 parts gold out of 24",
    uses: "Investment, some cultural jewelry (especially in Asia)",
  },
  {
    karat: "22K",
    content: "91.7% pure",
    parts: "22 parts gold, 2 parts other metals",
    uses: "High-end jewelry, cultural jewelry (Indian, Middle Eastern)",
  },
  {
    karat: "18K",
    content: "75% pure",
    parts: "18 parts gold, 6 parts other metals",
    uses: "Fine jewelry, engagement rings, luxury watches",
  },
  {
    karat: "14K",
    content: "58.3% pure",
    parts: "14 parts gold, 10 parts other metals",
    uses: "Most common for everyday jewelry in the US",
  },
  {
    karat: "10K",
    content: "41.7% pure",
    parts: "10 parts gold, 14 parts other metals",
    uses: "Affordable jewelry, minimum legal standard for gold in the US",
  },
];

const goldHistory = [
  {
    era: "Ancient Egypt (3000 BCE)",
    description:
      "Gold was associated with the sun god Ra and considered the flesh of the gods. Egyptians were among the first to work extensively with gold, creating elaborate jewelry and funerary masks.",
  },
  {
    era: "Ancient Greece & Rome",
    description:
      "Greeks and Romans advanced goldsmithing techniques, creating intricate filigree and granulation. Gold wreaths, coins, and jewelry symbolized status and wealth.",
  },
  {
    era: "Medieval Period",
    description:
      "Gold was primarily used for religious objects, royal regalia, and as currency. Techniques like enameling and niello (black mixture inlaid into engraved designs) were popular.",
  },
  {
    era: "Renaissance",
    description:
      "Saw a revival of classical techniques and new innovations. Gold was used for elaborate pendants, chains, and decorative objects for the wealthy merchant class and nobility.",
  },
  {
    era: "Victorian Era",
    description:
      "Gold jewelry became more accessible to the middle class. Sentimental and memorial jewelry was popular, often featuring intricate engraving and symbolic motifs.",
  },
  {
    era: "Art Nouveau & Art Deco",
    description:
      "These movements brought new design aesthetics to gold jewelry. Art Nouveau featured flowing, nature-inspired forms, while Art Deco embraced geometric patterns and contrasting materials.",
  },
  {
    era: "Modern Era",
    description:
      "Gold jewelry ranges from traditional designs to avant-garde art pieces. New technologies like 3D printing have expanded possibilities for gold jewelry design.",
  },
  {
    era: "Contemporary Trends",
    description:
      "Ethical sourcing and sustainability have become important considerations. Recycled gold and responsible mining practices are increasingly valued by consumers.",
  },
];

const goldFacts = [
  "All the gold ever mined in human history would fit into a cube measuring approximately 21 meters on each side.",
  "Gold is so rare that more steel is poured in an hour than gold has been poured since the beginning of recorded history.",
  "Gold is edible and is used in some luxury foods and drinks, such as gold leaf on desserts and gold flakes in certain liqueurs.",
  "About 80% of the world's gold is still in the ground.",
  "Gold is one of the few elements that has a natural color. Most pure elements are silver-white or colorless.",
  "The word 'gold' comes from the Old English word 'geolu', meaning yellow.",
  "Gold is so malleable that it can be rolled thin enough to become transparent. Very thin gold appears greenish-blue because gold reflects red and yellow.",
  "The largest gold nugget ever found was the 'Welcome Stranger' discovered in Australia in 1869, weighing 2,316 troy ounces (72 kg).",
];
