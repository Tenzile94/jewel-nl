import Image from "next/image";

export default function PearlsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Pearls
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The luminous organic gems born from the depths of oceans and lakes.
          </p>
        </div>
      </div>

      <div className="grid gap-12 mt-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/pearl-collection-display.png"
            alt="Collection of various pearl types and colors"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full aspect-[3/2]"
          />
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold">Nature's Organic Gems</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Unlike gemstones formed through geological processes, pearls are
              created by living organisms. They form when an irritant—such as a
              grain of sand or parasite—enters certain mollusks, particularly
              oysters and mussels. As a defense mechanism, the mollusk secretes
              layers of nacre (mother-of-pearl) around the irritant, eventually
              forming a pearl.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              This unique organic origin gives pearls their distinctive
              luster—an iridescent play of light across the surface that seems
              to glow from within. For thousands of years, this luminous quality
              has made pearls symbols of purity, wisdom, and feminine grace
              across cultures.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              While natural pearls were once incredibly rare treasures reserved
              for royalty, the development of pearl cultivation techniques in
              the early 20th century has made these organic gems more
              accessible, though no less captivating.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">
            Natural vs. Cultured Pearls
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Natural Pearls</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Natural pearls form without any human intervention when an
                irritant accidentally enters a mollusk in the wild. The mollusk
                coats the irritant with nacre, layer upon layer, eventually
                forming a pearl.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Truly natural pearls are extremely rare today. Most
                pearl-bearing oyster beds have been depleted by centuries of
                harvesting, pollution, and habitat destruction. A natural pearl
                necklace of matched size and color can be more valuable than an
                equivalent diamond necklace due to this extreme rarity.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Cultured Pearls</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Cultured pearls are grown with human assistance but are still
                real pearls. Pearl farmers insert an irritant (typically a shell
                bead nucleus and a piece of mantle tissue) into the mollusk,
                which then forms a pearl sac around it and secretes nacre just
                as it would in nature.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                The vast majority of pearls on the market today are cultured.
                The process was pioneered by Kokichi Mikimoto in Japan in the
                early 1900s, revolutionizing the pearl industry and making these
                gems more widely available.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Types of Pearls</h2>
          <div className="grid gap-8">
            {pearlTypes.map((type) => (
              <div
                key={type.name}
                className="grid gap-6 md:grid-cols-2 items-center"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={type.image || "/placeholder.svg"}
                    alt={type.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{type.name}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {type.description}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Characteristics</h4>
                      <ul className="mt-2 space-y-1">
                        {type.characteristics.map((characteristic, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-1.5" />
                            <span>{characteristic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Value Factors</h4>
                      <ul className="mt-2 space-y-1">
                        {type.valueFactors.map((factor, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-1.5" />
                            <span>{factor}</span>
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

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Pearl Grading Factors</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pearlGradingFactors.map((factor) => (
              <div
                key={factor.name}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="font-bold mb-2">{factor.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Pearl Shapes</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {pearlShapes.map((shape) => (
              <div
                key={shape.name}
                className="border rounded-lg p-4 text-center"
              >
                <div className="relative h-[100px] mx-auto w-[100px] mb-4">
                  <Image
                    src={shape.image || "/placeholder.svg"}
                    alt={shape.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold">{shape.name}</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {shape.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Caring for Pearls</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold mb-4">Do's</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white mt-0.5">
                    ✓
                  </div>
                  <span>
                    Put pearls on after applying makeup, perfume, and hairspray.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white mt-0.5">
                    ✓
                  </div>
                  <span>
                    Wipe pearls with a soft, damp cloth after wearing.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white mt-0.5">
                    ✓
                  </div>
                  <span>
                    Store pearls separately from other jewelry to prevent
                    scratching.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white mt-0.5">
                    ✓
                  </div>
                  <span>
                    Restring pearl necklaces every few years if worn regularly.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white mt-0.5">
                    ✓
                  </div>
                  <span>
                    Wear your pearls regularly—body oils help maintain their
                    luster.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Don'ts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white mt-0.5">
                    ✗
                  </div>
                  <span>
                    Expose pearls to harsh chemicals, including cleaning
                    products.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white mt-0.5">
                    ✗
                  </div>
                  <span>
                    Store pearls in plastic bags or airtight containers.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white mt-0.5">
                    ✗
                  </div>
                  <span>Clean pearls in ultrasonic or steam cleaners.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white mt-0.5">
                    ✗
                  </div>
                  <span>
                    Wear pearls while swimming, showering, or exercising.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white mt-0.5">
                    ✗
                  </div>
                  <span>
                    Leave pearls in direct sunlight for extended periods.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Pearls Throughout History</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {pearlHistory.map((period) => (
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
          <h2 className="text-2xl font-bold mb-6">Famous Pearls</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {famousPearls.map((pearl) => (
              <div
                key={pearl.name}
                className="flex items-start space-x-4 border rounded-lg p-4"
              >
                <div className="flex-shrink-0 h-16 w-16 relative">
                  <Image
                    src={pearl.image || "/placeholder.svg"}
                    alt={pearl.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{pearl.name}</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {pearl.description}
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

const pearlTypes = [
  {
    name: "Akoya Pearls",
    description:
      "Cultivated primarily in Japan and China, Akoya pearls are known for their perfectly round shape and high luster. They were the first type of pearl to be commercially cultured, pioneered by Kokichi Mikimoto in the early 1900s.",
    image: "/akoya-pearls.png",
    characteristics: [
      "Size range: 2-10mm (typically 6-7mm)",
      "Colors: White or cream with rose, silver, or cream overtones",
      "Excellent luster and nacre quality",
      "Very round and consistent",
      "Saltwater pearls",
    ],
    valueFactors: [
      "Larger sizes command premium prices",
      "White with rose overtones most valued",
      "Perfect roundness highly prized",
      "Higher luster increases value",
      "Thicker nacre for durability",
    ],
  },
  {
    name: "South Sea Pearls",
    description:
      "Grown in the warm waters of Australia, Indonesia, and the Philippines, South Sea pearls are produced by the Pinctada maxima oyster—the largest pearl-producing oyster in the world. They're known for their exceptional size and satiny luster.",
    image: "/south-sea-pearls.png",
    characteristics: [
      "Size range: 8-20mm (typically 10-14mm)",
      "Colors: White, silver, or gold",
      "Satiny, soft luster",
      "Thickest nacre of all cultured pearls",
      "Saltwater pearls",
    ],
    valueFactors: [
      "Golden color from Australian waters most valuable",
      "Larger sizes significantly increase value",
      "Round shapes command premium prices",
      "Surface quality important",
      "Matching important for strands",
    ],
  },
  {
    name: "Tahitian Pearls",
    description:
      "Often called 'black pearls,' Tahitian pearls are cultivated in French Polynesia from the black-lipped Pinctada margaritifera oyster. They're the only naturally dark pearls and display a remarkable range of colors with overtones of green, purple, blue, and bronze.",
    image: "/tahitian-pearls.png",
    characteristics: [
      "Size range: 8-18mm (typically 9-12mm)",
      "Colors: Gray to black with colorful overtones",
      "High luster with metallic quality",
      "Often have unique shapes",
      "Saltwater pearls",
    ],
    valueFactors: [
      "Peacock color (dark green with purple overtones) most valuable",
      "Larger sizes increase value",
      "Round shapes more valuable, but unique shapes also prized",
      "Intense, even coloration preferred",
      "Mirror-like luster increases value",
    ],
  },
  {
    name: "Freshwater Pearls",
    description:
      "Primarily cultivated in China's lakes, rivers, and ponds, freshwater pearls are produced by various species of mussels. Modern cultivation techniques have dramatically improved their quality, and they now rival saltwater pearls in luster and appearance while typically being more affordable.",
    image: "/freshwater-pearls.png",
    characteristics: [
      "Size range: 2-15mm (typically 6-8mm)",
      "Colors: White, cream, pink, lavender, and other pastels",
      "Often nucleated with tissue only (no bead)",
      "Wide variety of shapes",
      "Freshwater pearls",
    ],
    valueFactors: [
      "Larger sizes increasingly valuable",
      "Round shapes command premium prices",
      "Natural pastel colors (especially lavender) more valuable",
      "Higher luster increases value",
      "Smooth surface quality important",
    ],
  },
];

const pearlGradingFactors = [
  {
    name: "Luster",
    description:
      "The quality and intensity of light reflected from the pearl's surface. High-luster pearls have a sharp, mirror-like reflection, while low-luster pearls appear chalky or dull. Luster is considered the most important factor in pearl quality.",
  },
  {
    name: "Surface Quality",
    description:
      "The degree to which the pearl's surface is free from blemishes, bumps, pits, and other imperfections. While completely flawless pearls are extremely rare, fewer and less noticeable imperfections indicate higher quality.",
  },
  {
    name: "Shape",
    description:
      "Pearls come in various shapes, with perfectly round being the most valuable for most types. Other shapes include near-round, oval, button, drop, baroque, and circle. Some unique shapes can be highly valued for their artistic merit.",
  },
  {
    name: "Size",
    description:
      "Measured in millimeters, larger pearls are generally more valuable as they take longer to form and are rarer. Size value varies by pearl type—a 7mm Akoya might be large, while a 12mm South Sea pearl would be considered medium-sized.",
  },
  {
    name: "Color",
    description:
      "Includes both body color and overtone. Body color is the dominant hue, while overtone is the translucent color that appears to float over the body color. Preferred colors vary by pearl type and market trends.",
  },
  {
    name: "Nacre Thickness",
    description:
      "The thickness of the nacre coating determines a pearl's durability and luster. Thicker nacre generally means better luster and longevity. Thin-nacred pearls may show the nucleus and are more prone to chipping or peeling.",
  },
  {
    name: "Matching",
    description:
      "For strands or sets, how well the pearls match in size, shape, color, and luster. Well-matched strands, especially in larger sizes, can take years to assemble and command premium prices.",
  },
];

const pearlShapes = [
  {
    name: "Round",
    description:
      "Perfectly or nearly perfectly spherical; the most classic and typically most valuable shape.",
    image: "/pearl-shape-round.png",
  },
  {
    name: "Near-Round",
    description:
      "Slightly off-round but still appears round to the casual observer.",
    image: "/pearl-shape-near-round.png",
  },
  {
    name: "Oval",
    description: "Elongated round shape, similar to an egg.",
    image: "/pearl-shape-oval.png",
  },
  {
    name: "Button",
    description:
      "Flattened on one side, resembling a button; popular for earrings and rings.",
    image: "/pearl-shape-button.png",
  },
  {
    name: "Drop",
    description: "Pear or teardrop shape; popular for pendants and earrings.",
    image: "/pearl-shape-drop.png",
  },
  {
    name: "Baroque",
    description: "Irregular, non-symmetrical shape; each is unique.",
    image: "/pearl-shape-baroque.png",
  },
  {
    name: "Circle",
    description:
      "Ringed or grooved surface, most common in Tahitian and South Sea varieties.",
    image: "/pearl-shape-circle.png",
  },
  {
    name: "Keshi",
    description:
      "Small, irregular pearls formed without a nucleus; often very lustrous.",
    image: "/pearl-shape-keshi.png",
  },
];

const pearlHistory = [
  {
    era: "Ancient Civilizations",
    description:
      "Pearls have been harvested from the Persian Gulf, Red Sea, and Indian Ocean for at least 6,000 years. Ancient Egyptians were buried with pearls, while Chinese records of pearl use date to 2300 BCE.",
  },
  {
    era: "Roman Empire",
    description:
      "Romans prized pearls above all other gems. Julius Caesar passed a law limiting pearl wearing to the ruling classes. The Roman general Vitellius reportedly financed an entire military campaign by selling just one of his mother's pearl earrings.",
  },
  {
    era: "Middle Ages",
    description:
      "Pearls adorned crowns, religious artifacts, and noble attire throughout medieval Europe. Knights often carried pearls into battle as protection. The Catholic Church became a major collector of fine pearls.",
  },
  {
    era: "Renaissance",
    description:
      "The 1500s-1600s were known as the 'Pearl Age' in Europe. Portrait paintings show royalty and nobility draped in pearls. Queen Elizabeth I cultivated an image of 'the Virgin Queen' with pearls symbolizing purity and chastity.",
  },
  {
    era: "Colonial Period",
    description:
      "The discovery of pearl beds in Central and South America led to a pearl rush. Spanish conquistadors sent thousands of pearls back to Europe, making them more accessible to the wealthy merchant class.",
  },
  {
    era: "Victorian Era",
    description:
      "Queen Victoria's love of pearls influenced fashion throughout her long reign. Seed pearl jewelry (made with tiny pearls) became popular for daywear, while larger pearls remained status symbols for evening and formal occasions.",
  },
  {
    era: "Early 20th Century",
    description:
      "Kokichi Mikimoto perfected the technique for culturing pearls in Japan, revolutionizing the pearl industry. By the 1920s, cultured pearls made this gem accessible to the middle class for the first time.",
  },
  {
    era: "Modern Era",
    description:
      "Pearls have evolved from formal heirlooms to versatile fashion accessories. Innovations in culturing techniques have created more variety in colors, sizes, and shapes, while designers continue to find new ways to incorporate pearls into contemporary jewelry.",
  },
];

const famousPearls = [
  {
    name: "La Peregrina",
    description:
      "One of the most famous pearls in history, this pear-shaped pearl weighing 50.56 carats was discovered in the 16th century. It passed through the hands of Spanish royalty and Napoleon III before Richard Burton purchased it for Elizabeth Taylor in 1969.",
    image: "/famous-pearl-la-peregrina.png",
  },
  {
    name: "The Hope Pearl",
    description:
      "One of the largest known natural pearls at 450 carats (90 grams), this baroque-shaped blister pearl has a white body with bronze and gold overtones. It was once owned by Henry Philip Hope, who also owned the Hope Diamond.",
    image: "/famous-pearl-hope.png",
  },
  {
    name: "The Pearl of Lao Tzu",
    description:
      "Also known as the Pearl of Allah, this is the largest known pearl in the world at 14 pounds (6.4 kg) and 9.4 inches in diameter. Found inside a giant clam in the Philippines in 1934, it's not gem-quality but is valued for its size and history.",
    image: "/famous-pearl-lao-tzu.png",
  },
  {
    name: "The Baroda Pearls",
    description:
      "A magnificent seven-strand necklace containing 68 matched natural pearls per strand, originally owned by the Maharaja of Baroda in India. When the complete necklace was sold at auction in 2007, it fetched over $7 million.",
    image: "/famous-pearl-baroda.png",
  },
];
