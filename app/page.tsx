import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover the Art of Fine Jewelry
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore the fascinating world of jewelry, from ancient
                  traditions to modern masterpieces.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/categories">
                  <Button>
                    Explore Categories
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/history">
                  <Button variant="outline">Learn About History</Button>
                </Link>
              </div>
            </div>
            <Image
              src="/gilded-adornments.png"
              width={550}
              height={550}
              alt="Collection of fine jewelry including rings, necklaces, and bracelets"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Jewelry Categories
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our comprehensive guide to different types of jewelry
                and their unique characteristics.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={400}
                  height={300}
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Precious Materials
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Learn about the various materials used in creating exquisite
                jewelry pieces.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {materials.map((material) => (
              <div
                key={material.name}
                className="flex flex-col items-center space-y-2 rounded-lg border p-4 shadow-sm"
              >
                <div className="h-[150px] w-[150px] overflow-hidden rounded-full">
                  <Image
                    src={material.image || "/placeholder.svg"}
                    alt={material.name}
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{material.name}</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  {material.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Highlight */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/pharaohs-treasure.png"
              width={600}
              height={600}
              alt="Ancient Egyptian jewelry artifacts"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  A Rich History Spanning Millennia
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Jewelry has adorned humanity since prehistoric times. From
                  ancient Egyptian gold to Victorian gemstone masterpieces, each
                  era has contributed unique styles and techniques to the art of
                  jewelry making.
                </p>
              </div>
              <div>
                <Link href="/history">
                  <Button>
                    Explore Jewelry History
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const categories = [
  {
    title: "Rings",
    description: "From engagement rings to statement pieces",
    image: "/elegant-rings-display.png",
    href: "/categories/rings",
  },
  {
    title: "Necklaces",
    description: "Pendants, chains, and statement necklaces",
    image: "/opulent-gold-diamond-collection.png",
    href: "/categories/necklaces",
  },
  {
    title: "Earrings",
    description: "Studs, hoops, and chandelier designs",
    image: "/gemstone-gold-earring-collection.png",
    href: "/categories/earrings",
  },
  {
    title: "Bracelets",
    description: "Bangles, cuffs, and charm bracelets",
    image: "/gold-silver-bracelets.png",
    href: "/categories/bracelets",
  },
];

const materials = [
  {
    name: "Gold",
    description:
      "A precious metal prized for its luster and malleability, available in yellow, white, and rose varieties.",
    image: "/pure-gold-bars.png",
  },
  {
    name: "Silver",
    description:
      "A lustrous white metal that's more affordable than gold while offering elegant beauty.",
    image: "/pure-silver-bars.png",
  },
  {
    name: "Platinum",
    description:
      "A dense, durable precious metal with a natural white luster, ideal for fine jewelry.",
    image: "/pure-platinum-bars.png",
  },
];
