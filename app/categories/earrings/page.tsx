import Image from "next/image";

export default function EarringsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Earrings
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore the diverse world of earrings, from subtle studs to dramatic
            statement pieces.
          </p>
        </div>
      </div>

      <div className="grid gap-12 mt-12">
        {earringTypes.map((type) => (
          <div key={type.title} className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Image
              src={
                type.image ||
                "/placeholder.svg?height=400&width=600&query=elegant earring jewelry"
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
        <h2 className="text-2xl font-bold mb-6">Earring Backs Guide</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {earringBacks.map((back) => (
            <div key={back.type} className="rounded-lg border p-4">
              <h3 className="font-bold">{back.type}</h3>
              <p className="mt-2 text-sm text-gray-500">{back.description}</p>
              <p className="mt-2 text-sm">Best for: {back.bestFor}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const earringTypes = [
  {
    title: "Stud Earrings",
    description:
      "Stud earrings are small, simple designs that sit directly on the earlobe without dropping down. They're secured with a post that goes through the ear and a backing that holds them in place.",
    image: "/classic-diamond-studs.png",
    features: [
      "Versatile and suitable for everyday wear",
      "Common designs include solitaire gemstones, pearls, and simple geometric shapes",
      "Appropriate for all ages and occasions",
      "Often the first type of earring given to children when ears are pierced",
    ],
  },
  {
    title: "Hoop Earrings",
    description:
      "Hoop earrings form a circular or semi-circular shape that passes through the earlobe. They range from tiny huggie hoops that hug the earlobe to large statement hoops several inches in diameter.",
    image: "/placeholder.svg?height=400&width=600&query=gold hoop earrings",
    features: [
      "Available in various sizes from small to oversized",
      "Can be plain metal or adorned with gemstones or designs",
      "Classic style that has been worn across many cultures for centuries",
      "Can be round, oval, square, or other geometric shapes",
    ],
  },
  {
    title: "Drop Earrings",
    description:
      "Drop earrings extend below the earlobe, 'dropping' down in a linear fashion. They're more elaborate than studs but typically more restrained than chandelier styles.",
    image: "/placeholder.svg?height=400&width=600&query=pearl drop earrings",
    features: [
      "Length typically ranges from just below the earlobe to shoulder-length",
      "Often feature a decorative element at the bottom of the drop",
      "Popular for formal occasions and evening wear",
      "Can incorporate multiple gemstones or design elements along the length",
    ],
  },
  {
    title: "Chandelier Earrings",
    description:
      "Chandelier earrings are elaborate, multi-tiered designs that hang down from the earlobe like a chandelier. They're typically worn for special occasions and make a dramatic statement.",
    image:
      "/placeholder.svg?height=400&width=600&query=crystal chandelier earrings",
    features: [
      "Feature multiple dangling elements arranged in tiers",
      "Often incorporate numerous gemstones or beads",
      "Can be quite heavy, so quality findings are important for comfort",
      "Popular for weddings, galas, and other formal events",
    ],
  },
  {
    title: "Ear Cuffs",
    description:
      "Ear cuffs wrap around the outer edge of the ear, often without requiring a piercing. They range from simple bands to elaborate designs that cover much of the ear.",
    image:
      "/placeholder.svg?height=400&width=600&query=silver ear cuff jewelry",
    features: [
      "Can be worn with or without traditional earrings",
      "Some styles connect to a stud earring via a chain",
      "Popular in contemporary and alternative fashion",
      "Allow for dramatic ear adornment without multiple piercings",
    ],
  },
];

const earringBacks = [
  {
    type: "Push Backs (Butterfly Backs)",
    description:
      "The most common type of earring back, featuring a small piece of metal that slides onto the post and holds the earring in place with tension.",
    bestFor: "Everyday earrings of light to medium weight",
  },
  {
    type: "Screw Backs",
    description:
      "Similar to push backs but with a threaded post and back that screws on, providing more security than standard push backs.",
    bestFor: "Valuable earrings or those worn during active situations",
  },
  {
    type: "Lever Backs",
    description:
      "A hinged lever that closes behind the earlobe, securing the earring in place. Often used for drop and dangle styles.",
    bestFor: "Drop earrings and preventing loss of valuable pieces",
  },
  {
    type: "Latch Backs",
    description:
      "Similar to lever backs but with a latch mechanism that closes over the post, providing secure closure.",
    bestFor: "Heavier earrings that need extra security",
  },
  {
    type: "Clip-On Backs",
    description:
      "Designed for non-pierced ears, these use spring tension to clip onto the earlobe.",
    bestFor:
      "Those without pierced ears or when wearing earrings for short periods",
  },
  {
    type: "French Hooks (Fish Hooks)",
    description:
      "A simple curved wire that hooks through the ear piercing, often with a thin wire or small ball at the end to prevent slipping.",
    bestFor: "Lightweight dangling earrings",
  },
];
