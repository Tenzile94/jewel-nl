import Image from "next/image";

export default function BraceletsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Bracelets
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover the variety of bracelets that have adorned wrists
            throughout history and across cultures.
          </p>
        </div>
      </div>

      <div className="grid gap-12 mt-12">
        {braceletTypes.map((type) => (
          <div key={type.title} className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Image
              src={
                type.image ||
                "/placeholder.svg?height=400&width=600&query=elegant bracelet jewelry"
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
        <h2 className="text-2xl font-bold mb-6">Bracelet Size Guide</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border p-2 text-left">Wrist Size</th>
                <th className="border p-2 text-left">
                  Recommended Bracelet Length
                </th>
                <th className="border p-2 text-left">Fit Type</th>
              </tr>
            </thead>
            <tbody>
              {braceletSizes.map((size, index) => (
                <tr key={index} className="border-b">
                  <td className="border p-2">{size.wrist}</td>
                  <td className="border p-2">{size.bracelet}</td>
                  <td className="border p-2">{size.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Note: Add 1 inch (2.5 cm) to your wrist measurement for a comfortable
          fit, or 1.5 inches (3.8 cm) for a looser fit. For cuff bracelets, your
          wrist measurement plus 1 inch is typically sufficient.
        </p>
      </div>
    </div>
  );
}

const braceletTypes = [
  {
    title: "Tennis Bracelets",
    description:
      "Tennis bracelets feature a continuous line of identically cut gemstones, usually diamonds, set in precious metal. The name originated in 1987 when tennis star Chris Evert's diamond bracelet broke during a U.S. Open match, and she asked to pause the game to find it.",
    image:
      "/placeholder.svg?height=400&width=600&query=diamond tennis bracelet",
    features: [
      "Typically features small diamonds of the same size set in a continuous line",
      "Usually secured with a box clasp or lobster clasp with safety",
      "Classic design that works for both casual and formal occasions",
      "Available in various total carat weights and quality grades",
    ],
  },
  {
    title: "Bangle Bracelets",
    description:
      "Bangles are rigid bracelets that slide over the hand onto the wrist. They can be a complete circle or have a small opening or hinge. Bangles have been worn across many cultures for thousands of years.",
    image:
      "/placeholder.svg?height=400&width=600&query=gold bangle bracelets stacked",
    features: [
      "Can be plain or decorated with engravings, gemstones, or enamel",
      "Often worn stacked in multiples for a dramatic effect",
      "Available in various widths from very thin to statement-making wide cuffs",
      "Traditional in many cultures, particularly in South Asian jewelry traditions",
    ],
  },
  {
    title: "Charm Bracelets",
    description:
      "Charm bracelets feature a chain or link bracelet with small ornaments ('charms') attached. Each charm often holds personal significance, making these bracelets highly personalized and often sentimental pieces.",
    image:
      "/placeholder.svg?height=400&width=600&query=silver charm bracelet with multiple charms",
    features: [
      "Can be built over time by adding new charms to mark special occasions",
      "Charms can represent hobbies, achievements, loved ones, or memories",
      "Available in various styles from traditional to contemporary designer versions",
      "Popular as gifts that can be added to over the years",
    ],
  },
  {
    title: "Cuff Bracelets",
    description:
      "Cuff bracelets are rigid, typically wide bracelets with an opening that allows them to be slipped onto the wrist from the side. They make a bold statement and have been worn by various cultures throughout history.",
    image:
      "/placeholder.svg?height=400&width=600&query=wide silver cuff bracelet",
    features: [
      "Can range from narrow bands to wide statement pieces",
      "Often feature decorative elements, engravings, or gemstones",
      "No clasp required, making them easy to put on and take off",
      "Can be adjusted slightly to fit different wrist sizes",
    ],
  },
  {
    title: "Link Bracelets",
    description:
      "Link bracelets consist of connected metal links that form a chain. The links can vary widely in size, shape, and design, from delicate chains to bold statement pieces.",
    image:
      "/placeholder.svg?height=400&width=600&query=gold link chain bracelet",
    features: [
      "Available in countless link patterns including curb, figaro, rope, and box chains",
      "Can be lightweight and subtle or heavy and substantial",
      "Often secured with a lobster clasp or box clasp",
      "Classic style that has remained popular for centuries",
    ],
  },
];

const braceletSizes = [
  {
    wrist: "5-5.5 inches (12.7-14 cm)",
    bracelet: "6-6.5 inches (15.2-16.5 cm)",
    fit: "Snug",
  },
  {
    wrist: "5-5.5 inches (12.7-14 cm)",
    bracelet: "6.5-7 inches (16.5-17.8 cm)",
    fit: "Comfort",
  },
  {
    wrist: "6-6.5 inches (15.2-16.5 cm)",
    bracelet: "7-7.5 inches (17.8-19 cm)",
    fit: "Snug",
  },
  {
    wrist: "6-6.5 inches (15.2-16.5 cm)",
    bracelet: "7.5-8 inches (19-20.3 cm)",
    fit: "Comfort",
  },
  {
    wrist: "7-7.5 inches (17.8-19 cm)",
    bracelet: "8-8.5 inches (20.3-21.6 cm)",
    fit: "Snug",
  },
  {
    wrist: "7-7.5 inches (17.8-19 cm)",
    bracelet: "8.5-9 inches (21.6-22.9 cm)",
    fit: "Comfort",
  },
];
