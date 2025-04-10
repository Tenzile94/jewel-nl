import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MaterialsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Precious Materials
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore the precious metals and materials that have been treasured
            for centuries in jewelry making.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {materials.map((material) => (
          <Card key={material.title} className="overflow-hidden">
            <div className="relative h-[200px] w-full">
              <Image
                src={material.image || "/placeholder.svg"}
                alt={material.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{material.title}</CardTitle>
              <CardDescription>{material.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {material.content}
              </p>
            </CardContent>
            <CardFooter>
              <Link href={material.href} className="w-full">
                <Button className="w-full">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">
          Understanding Precious Metals
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold mb-4">
              What Makes a Metal Precious?
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Precious metals are rare, naturally occurring metallic elements
              that have high economic value. They are distinguished from base
              metals by their:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                <span>Rarity in the Earth's crust</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                <span>Resistance to corrosion and oxidation</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                <span>Lustrous appearance</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                <span>Malleability and ductility</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                <span>Historical use as currency or store of value</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Purity Measurements</h3>
            <p className="text-gray-500 dark:text-gray-400">
              The purity of precious metals is measured using different systems:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                <span>
                  <strong>Karats:</strong> Used for gold, with 24 karat being
                  pure gold (99.9%)
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                <span>
                  <strong>Fineness:</strong> Expressed in parts per 1,000 (e.g.,
                  925 silver is 92.5% pure)
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                <span>
                  <strong>Millesimal fineness:</strong> Similar to fineness but
                  expressed in parts per 1,000
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                <span>
                  <strong>Sterling standard:</strong> Specifically for silver,
                  indicating 92.5% purity
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">
          Hallmarking: Ensuring Authenticity
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Hallmarking is the official marking or series of marks applied to
          precious metal items to certify their purity. The practice dates back
          to the 14th century and continues to be an important consumer
          protection measure today.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">Standard Marks</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Indicates the purity of the metal, such as 925 for sterling silver
              or 750 for 18K gold.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">Maker's Marks</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Identifies the manufacturer or company responsible for producing
              the item.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">Assay Office Marks</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Indicates which office tested and marked the piece, often
              represented by a symbol.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const materials = [
  {
    title: "Gold",
    description: "The timeless precious metal prized throughout human history",
    content:
      "Gold has been treasured for its natural beauty and luster since ancient times. Its remarkable malleability and resistance to tarnish make it ideal for jewelry creation across cultures and eras.",
    image: "/precious-gold-material.png",
    href: "/materials/gold",
  },
  {
    title: "Silver",
    description: "The lustrous white metal with ancient origins",
    content:
      "Silver has been used for jewelry and ornamentation for thousands of years. Its bright white luster and excellent workability have made it a favorite among jewelers and artisans throughout history.",
    image: "/sterling-silver-material.png",
    href: "/materials/silver",
  },
  {
    title: "Platinum",
    description: "The rare, dense, and durable noble metal",
    content:
      "Platinum is one of the rarest precious metals, known for its exceptional durability and natural white color. Its resistance to tarnish and wear makes it perfect for fine jewelry that lasts generations.",
    image: "/platinum-jewelry-material.png",
    href: "/materials/platinum",
  },
  {
    title: "Gemstones",
    description: "Nature's colorful treasures",
    content:
      "From diamonds to emeralds, rubies to sapphires, gemstones add color, brilliance, and value to jewelry. Each type has unique properties, origins, and symbolic meanings.",
    image: "/gemstone-spectrum.png",
    href: "/materials/gemstones",
  },
  {
    title: "Pearls",
    description: "Organic gems from the depths",
    content:
      "Pearls are unique among gemstones as they're formed within living creatures. Their soft luster and organic origin have made them symbols of purity and elegance throughout history.",
    image: "/classic-pearl-strand.png",
    href: "/materials/pearls",
  },
  {
    title: "Alternative Materials",
    description: "Contemporary and sustainable options",
    content:
      "Modern jewelry embraces materials beyond traditional precious metals and gems, including titanium, stainless steel, wood, and recycled materials that offer sustainability and unique aesthetic qualities.",
    image: "/titanium-wood-geometric.png",
    href: "/materials/alternative",
  },
];
