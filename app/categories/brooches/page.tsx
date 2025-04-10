import Image from "next/image";

export default function BroochesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Brooches
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore the world of brooches, decorative pins with a rich history
            and versatile modern applications.
          </p>
        </div>
      </div>

      <div className="grid gap-12 mt-12">
        {broochTypes.map((type) => (
          <div key={type.title} className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Image
              src={
                type.image ||
                "/placeholder.svg?height=400&width=600&query=elegant brooch jewelry"
              }
              alt={type.title}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full aspect-[3/2]"
            />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-bold">{type.title}</h2>
              <p className="text-gray-500 dark:text-gray-400">
                {type.description}
              </p>
              <ul className="space-y-2">
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

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">
          Modern Ways to Wear Brooches
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modernUses.map((use, index) => (
            <div key={index} className="rounded-lg border p-4">
              <h3 className="font-bold">{use.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{use.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const broochTypes = [
  {
    title: "Cameo Brooches",
    description:
      "Cameo brooches feature a raised relief image, typically a profile portrait, against a contrasting background. Traditional cameos were carved from shell, agate, or other layered materials, though modern versions may use different techniques.",
    image: "/placeholder.svg?height=400&width=600&query=antique cameo brooch",
    features: [
      "Traditionally feature a woman's profile carved in white against a darker background",
      "Classic oval shape, though other shapes exist",
      "Popular during the Renaissance and Victorian eras",
      "Often set in gold or silver with decorative frames",
    ],
  },
  {
    title: "Bar Pins",
    description:
      "Bar pins are elongated, straight brooches that were particularly popular in the early 20th century. They were often used to secure ties or scarves and could be quite elaborate or relatively simple.",
    image:
      "/placeholder.svg?height=400&width=600&query=antique diamond bar pin brooch",
    features: [
      "Typically 2-3 inches in length",
      "Often set with gemstones along the length",
      "Popular during the Edwardian and Art Deco periods",
      "Can feature filigree work, milgrain detailing, or engraving",
    ],
  },
  {
    title: "Figural Brooches",
    description:
      "Figural brooches depict recognizable objects, animals, people, or scenes. They range from realistic to stylized representations and have been popular throughout jewelry history.",
    image:
      "/placeholder.svg?height=400&width=600&query=vintage butterfly brooch with gemstones",
    features: [
      "Common motifs include flowers, animals, insects, and human figures",
      "Can be whimsical, symbolic, or naturalistic",
      "Often incorporate colored gemstones or enamel for detail",
      "Popular as conversation pieces and personal expressions",
    ],
  },
  {
    title: "Art Nouveau Brooches",
    description:
      "Art Nouveau brooches, popular from approximately 1890-1910, feature flowing, organic lines and nature-inspired motifs. They often incorporate female figures with flowing hair, flowers, and insects, particularly dragonflies.",
    image:
      "/placeholder.svg?height=400&width=600&query=art nouveau dragonfly brooch with enamel",
    features: [
      "Characterized by sinuous, asymmetrical lines",
      "Often incorporate plique-à-jour enamel (resembling stained glass)",
      "Frequently feature nature motifs like flowers, insects, and mythological creatures",
      "Notable designers include René Lalique and Georges Fouquet",
    ],
  },
  {
    title: "Art Deco Brooches",
    description:
      "Art Deco brooches, popular from the 1920s through the 1930s, feature bold geometric designs, strong colors, and clean lines. They often incorporate diamonds, onyx, and other gemstones in symmetrical patterns.",
    image:
      "/placeholder.svg?height=400&width=600&query=art deco diamond and onyx brooch",
    features: [
      "Characterized by geometric shapes and symmetrical designs",
      "Often incorporate diamonds, onyx, emeralds, and sapphires",
      "Frequently feature contrasting colors and materials",
      "Influenced by Cubism, Bauhaus, and ancient Egyptian art following the discovery of Tutankhamun's tomb",
    ],
  },
];

const modernUses = [
  {
    title: "On Lapels",
    description:
      "The traditional placement on jacket lapels remains popular and adds a personalized touch to blazers and coats.",
  },
  {
    title: "On Hats",
    description:
      "Brooches can decorate the band or side of hats, from casual fedoras to formal occasion headwear.",
  },
  {
    title: "As Hair Accessories",
    description:
      "Secured to hair clips or pins, brooches can add sparkle and interest to updos and other hairstyles.",
  },
  {
    title: "On Handbags",
    description:
      "Pinned to a purse or handbag, brooches can transform a simple bag into a statement accessory.",
  },
  {
    title: "As Scarf Fasteners",
    description:
      "Brooches can secure scarves in place while adding decorative interest to the arrangement.",
  },
  {
    title: "On Belts",
    description:
      "Pinned to a belt or belt loop, brooches can add a focal point to the waistline of an outfit.",
  },
  {
    title: "Clustered Together",
    description:
      "Multiple smaller brooches can be grouped together to create a larger statement piece on clothing or accessories.",
  },
  {
    title: "On Shoe Clips",
    description:
      "Brooches can be converted to shoe clips to add sparkle and interest to plain pumps or flats.",
  },
  {
    title: "As Pendant Necklaces",
    description:
      "With the addition of a bail or chain, brooches can be converted to pendant necklaces for versatile wear.",
  },
];
