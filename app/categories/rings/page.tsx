import Image from "next/image";

export default function RingsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Rings
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore the world of rings, from symbolic wedding bands to fashion
            statements.
          </p>
        </div>
      </div>

      <div className="grid gap-12 mt-12">
        {ringTypes.map((type) => (
          <div key={type.title} className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Image
              src={type.image || "/placeholder.svg"}
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
        <h2 className="text-2xl font-bold mb-6">Ring Size Guide</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border p-2 text-left">US Size</th>
                <th className="border p-2 text-left">UK Size</th>
                <th className="border p-2 text-left">EU Size</th>
                <th className="border p-2 text-left">Diameter (mm)</th>
              </tr>
            </thead>
            <tbody>
              {ringSizes.map((size) => (
                <tr key={size.us} className="border-b">
                  <td className="border p-2">{size.us}</td>
                  <td className="border p-2">{size.uk}</td>
                  <td className="border p-2">{size.eu}</td>
                  <td className="border p-2">{size.diameter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const ringTypes = [
  {
    title: "Engagement Rings",
    description:
      "Engagement rings symbolize the promise of marriage. The tradition of diamond engagement rings became popular in the 20th century, though the practice of giving a ring upon engagement dates back to ancient Rome.",
    image: "/diamond-engagement-rings.png",
    features: [
      "Typically feature a center stone, often a diamond",
      "Common settings include solitaire, halo, three-stone, and vintage designs",
      "Metals commonly used include white gold, yellow gold, rose gold, and platinum",
      "The round brilliant cut is the most popular diamond shape for engagement rings",
    ],
  },
  {
    title: "Wedding Bands",
    description:
      "Wedding bands are exchanged during the marriage ceremony and worn to symbolize the union. They're typically simpler than engagement rings and designed for everyday wear.",
    image: "/gold-wedding-bands.png",
    features: [
      "Often plain metal bands or feature small diamonds or engravings",
      "Traditionally made of gold, though platinum, titanium, and tungsten are popular modern options",
      "Can be matched with the engagement ring in a bridal set",
      "Some cultures have specific traditions regarding wedding band materials and designs",
    ],
  },
  {
    title: "Fashion Rings",
    description:
      "Fashion rings are worn purely for aesthetic purposes. They can feature bold designs, colorful gemstones, and unique shapes that make a statement.",
    image: "/colorful-fashion-rings.png",
    features: [
      "Often feature colored gemstones or unique designs",
      "Can be stacked or worn on multiple fingers",
      "May follow current fashion trends in design and materials",
      "More affordable than fine jewelry rings, often using semi-precious stones",
    ],
  },
  {
    title: "Signet Rings",
    description:
      "Signet rings have a flat bezel that traditionally bore a family crest or coat of arms. Historically used to seal documents with wax, they're now worn as fashion accessories or family heirlooms.",
    image: "/gold-signet-rings.png",
    features: [
      "Feature a flat surface, often engraved with initials, symbols, or family crests",
      "Traditionally worn by men but now popular with all genders",
      "Often made of gold or sterling silver",
      "Can be passed down through generations as family heirlooms",
    ],
  },
];

const ringSizes = [
  { us: "4", uk: "H", eu: "47", diameter: "14.9" },
  { us: "5", uk: "J 1/2", eu: "49", diameter: "15.7" },
  { us: "6", uk: "L 1/2", eu: "52", diameter: "16.5" },
  { us: "7", uk: "O", eu: "54", diameter: "17.3" },
  { us: "8", uk: "Q", eu: "57", diameter: "18.1" },
  { us: "9", uk: "S", eu: "59", diameter: "18.9" },
  { us: "10", uk: "T 1/2", eu: "62", diameter: "19.8" },
  { us: "11", uk: "V 1/2", eu: "64", diameter: "20.6" },
  { us: "12", uk: "Y", eu: "67", diameter: "21.4" },
];
