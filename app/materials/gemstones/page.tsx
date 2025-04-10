import Image from "next/image";

export default function GemstonesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Gemstones
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Nature's colorful treasures that have captivated humanity for
            millennia.
          </p>
        </div>
      </div>

      <div className="grid gap-12 mt-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/gemstone-collection-display.png"
            alt="Collection of various colorful gemstones"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full aspect-[3/2]"
          />
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold">The Allure of Gemstones</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Gemstones have fascinated humanity since prehistoric times, prized
              for their beauty, rarity, and perceived mystical properties. These
              naturally occurring minerals, when cut and polished, reveal
              extraordinary colors, patterns, and optical effects that have made
              them coveted treasures throughout history.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Beyond their aesthetic appeal, gemstones have carried profound
              cultural significance across civilizations. They've adorned
              royalty, symbolized power, represented spiritual beliefs, and
              marked important life events. Today, they continue to be central
              elements in fine jewelry, combining natural beauty with artisanal
              craftsmanship.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              From the fiery brilliance of diamonds to the rich blue depths of
              sapphires, each gemstone variety offers its own unique
              characteristics and charm.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Gemstone Classification</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Precious Gemstones</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Traditionally, only four gemstones were considered "precious":
                diamonds, rubies, sapphires, and emeralds. These stones earned
                this distinction due to their exceptional hardness, rarity, and
                enduring appeal throughout history.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                While the precious/semi-precious distinction is somewhat
                outdated in modern gemology (as some "semi-precious" stones can
                be rarer and more valuable than "precious" ones), these four
                gems continue to hold special status in the jewelry world.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                Semi-Precious Gemstones
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                All other gemstones fall into the "semi-precious" category,
                though this term can be misleading as it encompasses stones of
                varying rarity, durability, and value. This diverse group
                includes amethyst, topaz, garnet, opal, aquamarine, tourmaline,
                peridot, and many others.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Semi-precious stones offer a wider range of colors, patterns,
                and optical effects than the "big four," providing jewelry
                designers with a vast palette of options for creative
                expression.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">
            The "Big Four" Precious Gemstones
          </h2>
          <div className="grid gap-8">
            {preciousGems.map((gem) => (
              <div
                key={gem.name}
                className="grid gap-6 md:grid-cols-2 items-center"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={gem.image || "/placeholder.svg"}
                    alt={gem.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{gem.name}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {gem.description}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Properties</h4>
                      <ul className="mt-2 space-y-1">
                        <li className="text-sm">
                          <span className="font-medium">Hardness:</span>{" "}
                          {gem.hardness}
                        </li>
                        <li className="text-sm">
                          <span className="font-medium">Color:</span>{" "}
                          {gem.color}
                        </li>
                        <li className="text-sm">
                          <span className="font-medium">Source:</span>{" "}
                          {gem.source}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Symbolism</h4>
                      <p className="mt-2 text-sm">{gem.symbolism}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">
            Popular Semi-Precious Gemstones
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {semiPreciousGems.map((gem) => (
              <div key={gem.name} className="border rounded-lg overflow-hidden">
                <div className="relative h-[200px]">
                  <Image
                    src={gem.image || "/placeholder.svg"}
                    alt={gem.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{gem.name}</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {gem.description}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="font-medium">Color:</span> {gem.color}
                    </div>
                    <div>
                      <span className="font-medium">Hardness:</span>{" "}
                      {gem.hardness}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">
            Gemstone Properties and Grading
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {gemstoneProperties.map((property) => (
              <div
                key={property.name}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="font-bold mb-2">{property.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {property.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">
            The Mohs Scale of Hardness
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Developed by German mineralogist Friedrich Mohs in 1812, the Mohs
            scale ranks minerals by their scratch resistance on a scale from 1
            (softest) to 10 (hardest). This property is crucial for gemstones
            used in jewelry, as it indicates how well they'll withstand everyday
            wear.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border p-2 text-left">Hardness</th>
                  <th className="border p-2 text-left">Mineral</th>
                  <th className="border p-2 text-left">Gemstone Examples</th>
                  <th className="border p-2 text-left">Jewelry Suitability</th>
                </tr>
              </thead>
              <tbody>
                {mohsScale.map((item) => (
                  <tr key={item.hardness} className="border-b">
                    <td className="border p-2">{item.hardness}</td>
                    <td className="border p-2">{item.mineral}</td>
                    <td className="border p-2">{item.examples}</td>
                    <td className="border p-2">{item.suitability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">
            Gemstone Treatments and Enhancements
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Many gemstones on the market have undergone treatments to enhance
            their appearance. While these treatments are generally accepted in
            the industry, ethical sellers should always disclose them to buyers.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gemTreatments.map((treatment) => (
              <div
                key={treatment.name}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
              >
                <h3 className="font-bold mb-2">{treatment.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {treatment.description}
                </p>
                <p className="mt-2 text-sm">
                  <span className="font-medium">Common in:</span>{" "}
                  {treatment.commonIn}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">
            Caring for Gemstone Jewelry
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold mb-4">
                General Care Guidelines
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Store gemstone jewelry separately to prevent scratching.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Remove jewelry before physical activities, swimming, or
                    using household chemicals.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Clean regularly with mild soap, warm water, and a soft
                    brush.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Have professional cleaning and inspection annually.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Avoid ultrasonic cleaners for treated gems or those with
                    inclusions.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Special Considerations</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    <strong>Soft gems</strong> (opal, pearl, amber): Avoid heat,
                    chemicals, and prolonged sunlight.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    <strong>Porous gems</strong> (turquoise, lapis lazuli): Keep
                    away from oils, perfumes, and cosmetics.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    <strong>Treated gems</strong>: Follow specific care
                    instructions based on the treatment type.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    <strong>Emeralds</strong>: Most contain natural fissures;
                    clean gently and avoid pressure.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    <strong>Pearls</strong>: Wipe with a soft cloth after
                    wearing; store separately from other jewelry.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Birthstones by Month</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {birthstones.map((stone) => (
              <div key={stone.month} className="border rounded-lg p-4">
                <h3 className="font-bold">{stone.month}</h3>
                <div className="mt-2 flex items-center space-x-2">
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: stone.color }}
                  ></div>
                  <span>{stone.stone}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {stone.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const preciousGems = [
  {
    name: "Diamond",
    description:
      "The hardest natural substance on Earth, diamonds are formed deep within the Earth under extreme heat and pressure. Their exceptional brilliance and fire come from their ability to disperse white light into the colors of the spectrum.",
    image: "/diamond-gemstone.png",
    hardness: "10 (Mohs scale)",
    color:
      "Typically colorless, but can be found in various colors including yellow, brown, blue, pink, and black",
    source: "Primarily South Africa, Russia, Botswana, Canada, and Australia",
    symbolism:
      "Represents enduring love, purity, and invincibility; traditional for engagement rings",
  },
  {
    name: "Ruby",
    description:
      "Rubies are a variety of the mineral corundum, with their red color coming from chromium. The finest rubies have a pure, vibrant red to slightly purplish-red color, often described as 'pigeon blood red.'",
    image: "/ruby-gemstone.png",
    hardness: "9 (Mohs scale)",
    color: "Red (ranging from pinkish to bluish-red)",
    source: "Myanmar (Burma), Thailand, Sri Lanka, Madagascar, and Mozambique",
    symbolism:
      "Associated with passion, protection, and prosperity; the birthstone for July",
  },
  {
    name: "Sapphire",
    description:
      "Like rubies, sapphires are a variety of corundum, with their blue color typically coming from iron and titanium. While most associated with blue, sapphires actually come in all colors except red (which would be a ruby).",
    image: "/sapphire-gemstone.png",
    hardness: "9 (Mohs scale)",
    color: "Blue is most common, but available in nearly all colors except red",
    source:
      "Kashmir, Myanmar, Sri Lanka, Madagascar, Australia, and Montana (USA)",
    symbolism:
      "Represents wisdom, loyalty, and nobility; the birthstone for September",
  },
  {
    name: "Emerald",
    description:
      "Emeralds are a variety of beryl, with their green color coming from chromium and sometimes vanadium. They typically contain inclusions and surface-reaching fissures, making flawless emeralds extremely rare and valuable.",
    image: "/emerald-gemstone.png",
    hardness: "7.5-8 (Mohs scale)",
    color: "Green (ranging from yellowish to bluish-green)",
    source: "Colombia, Zambia, Brazil, Zimbabwe, and Afghanistan",
    symbolism:
      "Symbolizes rebirth, fertility, and love; the birthstone for May",
  },
];

const semiPreciousGems = [
  {
    name: "Amethyst",
    description:
      "A purple variety of quartz, amethyst was once considered as valuable as rubies and sapphires until large deposits were discovered in Brazil. Its color ranges from pale lilac to deep purple.",
    image: "/amethyst-gemstone.png",
    color: "Purple (pale to deep)",
    hardness: "7 (Mohs scale)",
  },
  {
    name: "Aquamarine",
    description:
      "A blue to blue-green variety of beryl (same family as emerald), aquamarine gets its color from iron. The name comes from Latin meaning 'water of the sea,' reflecting its serene blue color.",
    image: "/aquamarine-gemstone.png",
    color: "Light blue to blue-green",
    hardness: "7.5-8 (Mohs scale)",
  },
  {
    name: "Citrine",
    description:
      "A yellow to orange variety of quartz, citrine gets its color from iron. Natural citrine is rare; most commercial citrine is heat-treated amethyst or smoky quartz.",
    image: "/citrine-gemstone.png",
    color: "Yellow to orange-brown",
    hardness: "7 (Mohs scale)",
  },
  {
    name: "Garnet",
    description:
      "Garnets are a group of minerals with similar crystal structures but varying chemical compositions, resulting in a range of colors. The most common is almandine, which is deep red.",
    image: "/garnet-gemstone.png",
    color: "Commonly red, but available in virtually all colors",
    hardness: "6.5-7.5 (Mohs scale)",
  },
  {
    name: "Opal",
    description:
      "Opals are known for their play-of-color, where light diffracts through the microscopic silica spheres within the stone, creating flashes of spectral colors. They contain up to 20% water.",
    image: "/opal-gemstone.png",
    color: "White, black, or fire (with play-of-color)",
    hardness: "5.5-6.5 (Mohs scale)",
  },
  {
    name: "Peridot",
    description:
      "One of the few gemstones that occurs in only one color, peridot is a variety of olivine. Its yellowish-green color comes from iron. Ancient Egyptians called it 'the gem of the sun.'",
    image: "/peridot-gemstone.png",
    color: "Yellowish-green to olive-green",
    hardness: "6.5-7 (Mohs scale)",
  },
  {
    name: "Tanzanite",
    description:
      "Discovered in 1967 near Mount Kilimanjaro in Tanzania (its only source), tanzanite is a blue-purple variety of zoisite. It's known for its striking pleochroism, appearing different colors when viewed from different angles.",
    image: "/tanzanite-gemstone.png",
    color: "Blue to purple, often with both hues visible",
    hardness: "6-7 (Mohs scale)",
  },
  {
    name: "Topaz",
    description:
      "Natural topaz is typically colorless, with colored varieties resulting from impurities or irradiation. Blue topaz, the most common variety today, is typically colorless topaz that has been irradiated and heat-treated.",
    image: "/topaz-gemstone.png",
    color: "Colorless, blue, brown, yellow, pink, purple, red",
    hardness: "8 (Mohs scale)",
  },
  {
    name: "Tourmaline",
    description:
      "Tourmaline occurs in more colors and color combinations than any other gemstone. Some crystals even show multiple colors within a single stone, known as 'watermelon tourmaline.'",
    image: "/tourmaline-gemstone.png",
    color: "All colors (often multi-colored)",
    hardness: "7-7.5 (Mohs scale)",
  },
];

const gemstoneProperties = [
  {
    name: "Color",
    description:
      "The most noticeable property of a gemstone, color is described by hue (the basic color), tone (lightness or darkness), and saturation (intensity). The most valuable gems typically have pure hues and medium-dark tones with high saturation.",
  },
  {
    name: "Clarity",
    description:
      "Refers to the absence of inclusions (internal flaws) and blemishes (surface flaws). Some gems (like emeralds) almost always have inclusions, while others (like aquamarine) are typically eye-clean. The impact of inclusions on value varies by gem type.",
  },
  {
    name: "Cut",
    description:
      "Refers to both the shape (round, oval, emerald-cut, etc.) and the quality of the cutting, including proportion, symmetry, and polish. A well-cut gemstone maximizes brilliance, fire, and scintillation.",
  },
  {
    name: "Carat Weight",
    description:
      "The unit of measurement for gemstone weight, with one carat equal to 0.2 grams. Larger stones are typically more valuable per carat due to their rarity, though quality factors like color and clarity can outweigh size in determining value.",
  },
  {
    name: "Hardness",
    description:
      "A gemstone's resistance to scratching, measured on the Mohs scale from 1 (talc) to 10 (diamond). Harder stones are more suitable for everyday wear in rings and bracelets, while softer stones require more protective settings.",
  },
  {
    name: "Refractive Index",
    description:
      "Measures how light bends when passing through the gem, affecting its brilliance. Diamonds (2.42) and zircon (1.93-1.98) have high refractive indices, giving them exceptional sparkle compared to quartz (1.54-1.55).",
  },
  {
    name: "Dispersion",
    description:
      "The splitting of white light into spectral colors (fire). Diamond has high dispersion (0.044), creating the flashes of rainbow colors. Other gems with high dispersion include demantoid garnet and zircon.",
  },
  {
    name: "Specific Gravity",
    description:
      "The ratio of a gem's weight compared to an equal volume of water. This property helps identify gems, as each has a characteristic density. Amber is unusually light (1.08), while hematite is notably heavy (5.2).",
  },
];

const mohsScale = [
  {
    hardness: "10",
    mineral: "Diamond",
    examples: "Diamond",
    suitability: "Excellent for all jewelry types, including everyday wear",
  },
  {
    hardness: "9",
    mineral: "Corundum",
    examples: "Ruby, Sapphire",
    suitability: "Excellent for all jewelry types, including everyday wear",
  },
  {
    hardness: "8",
    mineral: "Topaz",
    examples: "Topaz, Spinel",
    suitability: "Very good for all jewelry types, including rings",
  },
  {
    hardness: "7",
    mineral: "Quartz",
    examples: "Amethyst, Citrine, Aventurine",
    suitability: "Good for most jewelry, including occasional-wear rings",
  },
  {
    hardness: "6-6.5",
    mineral: "Feldspar",
    examples: "Moonstone, Labradorite, Opal, Tanzanite",
    suitability: "Better for earrings, necklaces, or occasional-wear rings",
  },
  {
    hardness: "5-5.5",
    mineral: "Apatite",
    examples: "Turquoise, Lapis Lazuli",
    suitability: "Best for earrings, pendants, or protected settings",
  },
  {
    hardness: "4",
    mineral: "Fluorite",
    examples: "Fluorite",
    suitability:
      "Collector stones or very occasional wear in protected settings",
  },
  {
    hardness: "3",
    mineral: "Calcite",
    examples: "Pearl, Coral",
    suitability: "Requires careful handling; best for occasional wear",
  },
  {
    hardness: "2",
    mineral: "Gypsum",
    examples: "Alabaster",
    suitability: "Primarily for display or very careful occasional wear",
  },
  {
    hardness: "1",
    mineral: "Talc",
    examples: "Talc",
    suitability: "Not suitable for jewelry",
  },
];

const gemTreatments = [
  {
    name: "Heat Treatment",
    description:
      "Applying heat to enhance or change color, improve clarity, or both. This is one of the oldest and most common treatments, often considered permanent and stable.",
    commonIn: "Sapphire, ruby, tanzanite, aquamarine, amethyst, zircon",
  },
  {
    name: "Fracture Filling",
    description:
      "Filling surface-reaching cracks with glass, resin, or other substances to improve appearance and sometimes durability. May require special care to maintain.",
    commonIn: "Emerald, diamond, ruby",
  },
  {
    name: "Dyeing",
    description:
      "Adding coloring agents to enhance or change a gemstone's color. Most common in porous gems. May fade over time with exposure to light or chemicals.",
    commonIn: "Jade, turquoise, coral, pearl, onyx",
  },
  {
    name: "Irradiation",
    description:
      "Exposing gems to radiation to alter their color. Often followed by heat treatment to stabilize the new color. Generally considered permanent when properly performed.",
    commonIn: "Blue topaz, diamond, tourmaline, pearl",
  },
  {
    name: "Oil/Resin Impregnation",
    description:
      "Filling microscopic pores with colorless oils or resins to improve appearance and sometimes stability. May require periodic retreatment as substances can dry out.",
    commonIn: "Emerald, jade, turquoise",
  },
  {
    name: "Diffusion",
    description:
      "Introducing coloring elements into the surface layer of a gem through high-temperature processes. Can be shallow or deep depending on the process.",
    commonIn: "Sapphire, ruby",
  },
];

const birthstones = [
  {
    month: "January",
    stone: "Garnet",
    color: "#A52A2A",
    meaning: "Represents friendship, trust, and constancy",
  },
  {
    month: "February",
    stone: "Amethyst",
    color: "#9966CC",
    meaning: "Symbolizes peace, protection, and tranquility",
  },
  {
    month: "March",
    stone: "Aquamarine",
    color: "#7FFFD4",
    meaning: "Represents serenity, courage, and eternal youth",
  },
  {
    month: "April",
    stone: "Diamond",
    color: "#B9F2FF",
    meaning: "Symbolizes purity, strength, and everlasting love",
  },
  {
    month: "May",
    stone: "Emerald",
    color: "#50C878",
    meaning: "Represents rebirth, wisdom, and growth",
  },
  {
    month: "June",
    stone: "Pearl",
    color: "#FDEEF4",
    meaning: "Symbolizes purity, innocence, and faith",
  },
  {
    month: "July",
    stone: "Ruby",
    color: "#E0115F",
    meaning: "Represents passion, protection, and prosperity",
  },
  {
    month: "August",
    stone: "Peridot",
    color: "#ADFF2F",
    meaning: "Symbolizes strength and good fortune",
  },
  {
    month: "September",
    stone: "Sapphire",
    color: "#0F52BA",
    meaning: "Represents wisdom, loyalty, and nobility",
  },
  {
    month: "October",
    stone: "Opal",
    color: "#A8C3BC",
    meaning: "Symbolizes hope, creativity, and innocence",
  },
  {
    month: "November",
    stone: "Topaz",
    color: "#FFC87C",
    meaning: "Represents love, affection, and strength",
  },
  {
    month: "December",
    stone: "Turquoise",
    color: "#30D5C8",
    meaning: "Symbolizes success, personal protection, and good fortune",
  },
];
