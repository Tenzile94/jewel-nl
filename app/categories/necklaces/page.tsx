import Image from "next/image";

export default function NecklacesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Necklaces
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover the variety of necklace styles that have adorned necks
            throughout history.
          </p>
        </div>
      </div>

      <div className="grid gap-12 mt-12">
        {necklaceTypes.map((type) => (
          <div key={type.title} className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Image
              src={
                type.image ||
                "/placeholder.svg?height=400&width=600&query=elegant necklace jewelry"
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
        <h2 className="text-2xl font-bold mb-6">Necklace Length Guide</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border p-2 text-left">Type</th>
                <th className="border p-2 text-left">Length (inches)</th>
                <th className="border p-2 text-left">Length (cm)</th>
                <th className="border p-2 text-left">Sits At</th>
              </tr>
            </thead>
            <tbody>
              {necklaceLengths.map((length) => (
                <tr key={length.type} className="border-b">
                  <td className="border p-2">{length.type}</td>
                  <td className="border p-2">{length.inches}</td>
                  <td className="border p-2">{length.cm}</td>
                  <td className="border p-2">{length.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const necklaceTypes = [
  {
    title: "Pendant Necklaces",
    description:
      "Pendant necklaces feature a central ornament suspended from a chain or cord. The pendant can be anything from a simple gemstone to an elaborate design with symbolic meaning.",
    image: "/gold-gemstone-pendant.png",
    features: [
      "Versatile style that can be dressed up or down",
      "Pendants can hold personal significance or symbolism",
      'Available in various lengths, with princess (18") and matinee (20-24") being most common',
      "Popular pendant materials include gemstones, precious metals, and lockets that hold photos",
    ],
  },
  {
    title: "Chokers",
    description:
      "Chokers fit closely around the neck, typically between 14-16 inches in length. They've been popular throughout history, from ancient civilizations to Victorian times, and have seen several revivals in modern fashion.",
    image: "/elegant-diamond-choker.png",
    features: [
      "Sits at the base of the neck",
      "Can be made from various materials including velvet, leather, beads, or metal",
      "Often features a central design element or is uniform throughout",
      "Particularly popular during the 1990s and has seen a recent revival",
    ],
  },
  {
    title: "Statement Necklaces",
    description:
      "Statement necklaces are bold, eye-catching pieces designed to be the focal point of an outfit. They often feature large elements, bright colors, or intricate designs that draw attention to the neckline.",
    image: "/vibrant-geometric-statement.png",
    features: [
      "Typically larger and more elaborate than everyday necklaces",
      "Often incorporates multiple materials, colors, and textures",
      "Can be inspired by various cultural traditions or contemporary design",
      "Popular for special occasions or to elevate a simple outfit",
    ],
  },
  {
    title: "Pearl Necklaces",
    description:
      "Pearl necklaces are classic pieces that have been treasured for centuries. Natural pearls are extremely rare, while cultured pearls are more common in modern jewelry. They range from simple strands to elaborate designs.",
    image: "/timeless-pearl-strand.png",
    features: [
      "Available in various pearl types: Akoya, South Sea, Tahitian, and freshwater",
      "Pearl quality is judged by luster, surface quality, shape, color, and size",
      "Classic styles include single strand, multi-strand, and graduated pearls",
      "Traditional gift for milestone occasions like graduations and weddings",
    ],
  },
];

const necklaceLengths = [
  {
    type: "Collar",
    inches: "12-13",
    cm: "30-33",
    position: "Tightly around the neck",
  },
  {
    type: "Choker",
    inches: "14-16",
    cm: "35-41",
    position: "Base of the neck",
  },
  { type: "Princess", inches: "17-19", cm: "43-48", position: "Collarbone" },
  {
    type: "Matinee",
    inches: "20-24",
    cm: "50-61",
    position: "Between collarbone and bust",
  },
  {
    type: "Opera",
    inches: "28-36",
    cm: "71-91",
    position: "On the bust or below",
  },
  {
    type: "Rope",
    inches: "36+",
    cm: "91+",
    position: "Below the bust or multiple wraps",
  },
];
