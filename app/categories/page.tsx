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

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Jewelry Categories
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore our comprehensive guide to different types of jewelry and
            their unique characteristics.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {categories.map((category) => (
          <Card key={category.title} className="overflow-hidden">
            <div className="relative h-[200px] w-full">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {category.content}
              </p>
            </CardContent>
            <CardFooter>
              <Link href={category.href} className="w-full">
                <Button className="w-full">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

const categories = [
  {
    title: "Rings",
    description: "From engagement rings to statement pieces",
    content:
      "Rings have been worn as decorative jewelry since ancient times. Today, they symbolize everything from marital status to fashion statements.",
    image: "/elegant-rings-display.png",
    href: "/categories/rings",
  },
  {
    title: "Necklaces",
    description: "Pendants, chains, and statement necklaces",
    content:
      "Necklaces frame the face and neckline, drawing attention upward. They range from delicate chains to bold statement pieces.",
    image: "/opulent-gold-diamond-collection.png",
    href: "/categories/necklaces",
  },
  {
    title: "Earrings",
    description: "Studs, hoops, and chandelier designs",
    content:
      "Earrings enhance the face and can dramatically change your appearance. They come in countless styles from subtle studs to dramatic chandeliers.",
    image: "/gemstone-gold-earring-collection.png",
    href: "/categories/earrings",
  },
  {
    title: "Bracelets",
    description: "Bangles, cuffs, and charm bracelets",
    content:
      "Bracelets adorn the wrist and can be stacked for a personalized look. They include bangles, cuffs, tennis bracelets, and charm bracelets.",
    image: "/gold-silver-bracelets.png",
    href: "/categories/bracelets",
  },
  {
    title: "Brooches",
    description: "Decorative pins with various designs",
    content:
      "Brooches are decorative pins that can be attached to clothing, hats, or bags. They often feature intricate designs and can be statement pieces.",
    image: "/vintage-brooches-collection.png",
    href: "/categories/brooches",
  },
  {
    title: "Watches",
    description: "Functional timepieces with artistic design",
    content:
      "Watches combine functionality with artistry. From luxury Swiss timepieces to fashion watches, they're both practical and decorative.",
    image: "/luxury-watches-collection.png",
    href: "/categories/watches",
  },
];
