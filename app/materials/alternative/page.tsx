import Image from "next/image";

export default function AlternativeMaterialsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Alternative Materials
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Contemporary and sustainable options for modern jewelry design.
          </p>
        </div>
      </div>

      <div className="grid gap-12 mt-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/alternative-materials-collection.png"
            alt="Collection of jewelry made with alternative materials"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full aspect-[3/2]"
          />
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold">
              Beyond Traditional Precious Materials
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              While gold, silver, and gemstones have dominated jewelry for
              millennia, contemporary jewelry embraces a much wider range of
              materials. This expansion reflects changing aesthetics,
              technological innovations, environmental concerns, and evolving
              definitions of what makes materials valuable or meaningful.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Alternative materials offer jewelry designers new creative
              possibilities—unique colors, textures, and properties that
              traditional materials can't provide. They also often make jewelry
              more accessible, sustainable, and personally expressive.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              From industrial metals and sustainable woods to recycled plastics
              and innovative composites, these materials are pushing the
              boundaries of what jewelry can be and represent in the 21st
              century.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Contemporary Metals</h2>
          <div className="grid gap-8">
            {contemporaryMetals.map((metal) => (
              <div
                key={metal.name}
                className="grid gap-6 md:grid-cols-2 items-center"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={metal.image || "/placeholder.svg"}
                    alt={metal.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{metal.name}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {metal.description}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Advantages</h4>
                      <ul className="mt-2 space-y-1">
                        {metal.advantages.map((advantage, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <div className="mr-2 h-2 w-2 rounded-full bg-green-500 mt-1.5" />
                            <span>{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Limitations</h4>
                      <ul className="mt-2 space-y-1">
                        {metal.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <div className="mr-2 h-2 w-2 rounded-full bg-red-500 mt-1.5" />
                            <span>{limitation}</span>
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
          <h2 className="text-2xl font-bold mb-6">Organic Materials</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {organicMaterials.map((material) => (
              <div
                key={material.name}
                className="border rounded-lg overflow-hidden"
              >
                <div className="relative h-[200px]">
                  <Image
                    src={material.image || "/placeholder.svg"}
                    alt={material.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{material.name}</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {material.description}
                  </p>
                  <div className="mt-4 text-sm">
                    <p className="font-medium">Best for:</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {material.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">
            Synthetic and Composite Materials
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {syntheticMaterials.map((material) => (
              <div
                key={material.name}
                className="border rounded-lg overflow-hidden"
              >
                <div className="relative h-[200px]">
                  <Image
                    src={material.image || "/placeholder.svg"}
                    alt={material.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{material.name}</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {material.description}
                  </p>
                  <div className="mt-4 text-sm">
                    <p className="font-medium">Applications:</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {material.applications}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">
            Sustainable and Ethical Considerations
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold mb-4">Environmental Impact</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Traditional jewelry materials often come with significant
                environmental costs. Mining for precious metals and gemstones
                can lead to deforestation, habitat destruction, water pollution,
                and high carbon emissions. Alternative materials can offer more
                sustainable options:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Recycled metals reduce the need for new mining</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    FSC-certified woods come from responsibly managed forests
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Lab-created gems have a fraction of the environmental
                    footprint of mined stones
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Upcycled materials give new life to existing resources
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Social Responsibility</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                The jewelry industry has faced scrutiny over human rights
                issues, including conflict minerals, child labor, and unsafe
                working conditions. Alternative and ethically sourced materials
                can address these concerns:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Fair trade certified materials ensure workers receive fair
                    compensation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Artisanal materials support traditional crafts and local
                    economies
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Transparent supply chains allow consumers to make informed
                    choices
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>
                    Locally sourced materials reduce carbon footprint and
                    support local communities
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">
            Caring for Alternative Material Jewelry
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border p-2 text-left">Material</th>
                  <th className="border p-2 text-left">Cleaning</th>
                  <th className="border p-2 text-left">Storage</th>
                  <th className="border p-2 text-left">Avoid</th>
                </tr>
              </thead>
              <tbody>
                {careTips.map((tip) => (
                  <tr key={tip.material} className="border-b">
                    <td className="border p-2">{tip.material}</td>
                    <td className="border p-2">{tip.cleaning}</td>
                    <td className="border p-2">{tip.storage}</td>
                    <td className="border p-2">{tip.avoid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">
            Innovative Designers Working with Alternative Materials
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {designers.map((designer) => (
              <div
                key={designer.name}
                className="flex items-start space-x-4 border rounded-lg p-4"
              >
                <div className="flex-shrink-0 h-16 w-16 relative">
                  <Image
                    src={designer.image || "/placeholder.svg"}
                    alt={designer.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{designer.name}</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {designer.description}
                  </p>
                  <p className="mt-2 text-sm">
                    <span className="font-medium">Known for:</span>{" "}
                    {designer.knownFor}
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

const contemporaryMetals = [
  {
    name: "Titanium",
    description:
      "A lightweight yet incredibly strong metal with a natural silver-gray color. Titanium is biocompatible, making it ideal for those with metal allergies. It can be anodized to create vibrant colors through an electrochemical process that forms an oxide layer on the surface.",
    image: "/titanium-jewelry.png",
    advantages: [
      "Extremely lightweight (45% lighter than steel)",
      "Exceptional strength-to-weight ratio",
      "Hypoallergenic and biocompatible",
      "Highly resistant to corrosion",
      "Can be colored through anodizing",
    ],
    limitations: [
      "Difficult and expensive to work with",
      "Cannot be soldered easily",
      "Limited malleability",
      "Cannot be resized like precious metals",
      "Scratches can be difficult to polish out",
    ],
  },
  {
    name: "Stainless Steel",
    description:
      "An alloy of iron with at least 10.5% chromium, stainless steel offers excellent durability and corrosion resistance at an affordable price point. Its industrial aesthetic has made it popular in contemporary jewelry design, particularly for men's pieces.",
    image: "/stainless-steel-jewelry.png",
    advantages: [
      "Extremely durable and scratch-resistant",
      "Affordable compared to precious metals",
      "Resistant to rust, corrosion, and tarnish",
      "Low maintenance",
      "Hypoallergenic (especially 316L medical-grade)",
    ],
    limitations: [
      "Heavier than many other metals",
      "Limited malleability for intricate designs",
      "Cannot be soldered easily",
      "Difficult to resize",
      "Industrial appearance may not suit all styles",
    ],
  },
  {
    name: "Tungsten Carbide",
    description:
      "One of the hardest metals used in jewelry, tungsten carbide is a compound of tungsten and carbon. Its exceptional scratch resistance and weight make it popular for men's wedding bands. It has a dark gray color that can be polished to a high shine.",
    image: "/tungsten-carbide-jewelry.png",
    advantages: [
      "Extremely hard and scratch-resistant (8.5-9 on Mohs scale)",
      "Maintains polish and shine indefinitely",
      "Dense, substantial feel",
      "Affordable compared to precious metals",
      "Hypoallergenic for most people",
    ],
    limitations: [
      "Brittle—can crack or shatter under extreme pressure",
      "Cannot be resized",
      "Limited design options due to manufacturing constraints",
      "Very heavy",
      "Difficult to remove in emergencies",
    ],
  },
  {
    name: "Cobalt Chrome",
    description:
      "An alloy of cobalt and chromium, this metal offers a bright white color similar to white gold or platinum but at a fraction of the cost. It's extremely durable and has been used in medical implants due to its biocompatibility.",
    image: "/cobalt-chrome-jewelry.png",
    advantages: [
      "Bright white color that never tarnishes",
      "Extremely scratch-resistant",
      "Lightweight compared to tungsten",
      "Hypoallergenic for most people",
      "Can be finished with various textures",
    ],
    limitations: [
      "Cannot be resized",
      "Limited design options",
      "Difficult to work with for custom designs",
      "May cause allergic reactions in those with cobalt sensitivity",
      "Less traditional than precious metals",
    ],
  },
];

const organicMaterials = [
  {
    name: "Wood",
    description:
      "From exotic hardwoods to locally sourced varieties, wood offers warmth, natural beauty, and lightness. Modern stabilization techniques have made wooden jewelry more durable and versatile than ever before.",
    image: "/wood-jewelry.png",
    bestFor:
      "Earrings, pendants, bracelets, and inlays in metal rings. Particularly popular for eco-conscious consumers and those seeking a natural aesthetic.",
  },
  {
    name: "Horn & Bone",
    description:
      "Traditionally used across many cultures, these materials are typically sourced as by-products from food production. They can be carved, shaped, and polished to create lightweight, warm-to-the-touch jewelry with natural variation.",
    image: "/horn-bone-jewelry.png",
    bestFor:
      "Statement pieces, tribal-inspired designs, and carved pendants. Appreciated for their natural patterns and lightweight comfort.",
  },
  {
    name: "Tagua Nut",
    description:
      "Often called 'vegetable ivory,' tagua nuts come from certain palm trees in South America. When dried, they become extremely hard and can be carved and dyed to create colorful, lightweight jewelry that resembles ivory without harming animals.",
    image: "/tagua-nut-jewelry.png",
    bestFor:
      "Colorful beaded jewelry, carved pendants, and sustainable alternatives to ivory. Popular in eco-friendly and fair trade jewelry.",
  },
  {
    name: "Shell & Mother of Pearl",
    description:
      "Shells have been used in jewelry for thousands of years. Mother of pearl (the iridescent inner layer of certain shells) offers a luminous play of color, while various shells provide unique textures and patterns.",
    image: "/shell-jewelry.png",
    bestFor:
      "Beaded necklaces, inlay work, and coastal-inspired designs. Particularly effective in pieces that play with light and movement.",
  },
  {
    name: "Leather",
    description:
      "Versatile and available in countless colors and finishes, leather brings a casual, bohemian, or rugged element to jewelry design. Modern techniques allow for laser cutting, embossing, and combining with metals and other materials.",
    image: "/leather-jewelry.png",
    bestFor:
      "Bracelets, cord necklaces, earrings, and mixed-media pieces. Appeals to both casual and fashion-forward aesthetics.",
  },
  {
    name: "Seeds & Beans",
    description:
      "From açaí and juniper berries to coffee beans and tagua nuts, seeds offer sustainable, lightweight materials for jewelry. Many can be naturally dyed or retain their own beautiful colors and patterns.",
    image: "/seed-bead-jewelry.png",
    bestFor:
      "Beaded jewelry, bohemian styles, and eco-friendly accessories. Often associated with artisanal and fair trade practices.",
  },
];

const syntheticMaterials = [
  {
    name: "Resin",
    description:
      "A versatile polymer that can be cast, colored, and combined with other materials. Modern resins range from crystal clear to vibrantly colored and can encapsulate objects, create faux gemstones, or be molded into any shape.",
    image: "/resin-jewelry.png",
    applications:
      "Statement pieces, artistic jewelry, encapsulation of flowers or objects, and creating unique textures and effects impossible with natural materials.",
  },
  {
    name: "Acrylic",
    description:
      "A clear plastic material that can be colored, molded, laser-cut, and thermoformed. Lightweight and available in endless colors, acrylic allows for bold, geometric designs at an affordable price point.",
    image: "/acrylic-jewelry.png",
    applications:
      "Contemporary statement pieces, colorful geometric designs, and fashion-forward accessories that play with light and transparency.",
  },
  {
    name: "Carbon Fiber",
    description:
      "A high-strength, lightweight material made from woven carbon filaments. Its distinctive woven pattern and technical associations have made it popular in contemporary men's jewelry, often combined with metals.",
    image: "/carbon-fiber-jewelry.png",
    applications:
      "Men's rings and bracelets, industrial-inspired designs, and lightweight alternatives to traditional metals with a modern aesthetic.",
  },
  {
    name: "Concrete",
    description:
      "Modern jewelry-grade concrete mixes create lightweight, durable pieces with an urban, architectural feel. It can be colored, polished, and combined with metals and other materials for contrast.",
    image: "/concrete-jewelry.png",
    applications:
      "Minimalist designs, architectural jewelry, and industrial-inspired pieces that make a statement through unexpected materials.",
  },
  {
    name: "Recycled Materials",
    description:
      "From circuit boards and vinyl records to plastic bottles and bicycle inner tubes, recycled materials bring sustainability and storytelling to jewelry design. Each piece gives new life to materials that would otherwise be discarded.",
    image: "/recycled-material-jewelry.png",
    applications:
      "Eco-conscious jewelry, conversation pieces, and designs that make a statement about sustainability and creative reuse.",
  },
  {
    name: "Lab-Created Gemstones",
    description:
      "Chemically and physically identical to their natural counterparts, lab-created gems offer ethical and environmental advantages at a lower price point. Modern techniques create stones indistinguishable from mined gems.",
    image: "/lab-created-gemstone-jewelry.png",
    applications:
      "Fine jewelry alternatives, colorful statement pieces, and ethical options for traditional gemstone designs without environmental or social concerns.",
  },
];

const careTips = [
  {
    material: "Titanium & Stainless Steel",
    cleaning:
      "Mild soap and water with a soft cloth; ultrasonic cleaners are safe",
    storage: "No special requirements; can be stored with other jewelry",
    avoid: "Harsh chemicals like chlorine and bleach; abrasive cleaners",
  },
  {
    material: "Tungsten Carbide",
    cleaning: "Mild soap and water; window cleaner for shine",
    storage: "No special requirements; very scratch-resistant",
    avoid: "Extreme pressure that could cause cracking; harsh chemicals",
  },
  {
    material: "Wood",
    cleaning:
      "Wipe with slightly damp cloth; occasional conditioning with mineral oil",
    storage: "Dry environment away from direct sunlight; avoid high humidity",
    avoid: "Water immersion; perfumes; extreme temperature changes",
  },
  {
    material: "Horn & Bone",
    cleaning:
      "Wipe with slightly damp cloth; occasional conditioning with jojoba oil",
    storage: "Dry environment; avoid high humidity",
    avoid: "Prolonged sunlight; water immersion; heat sources",
  },
  {
    material: "Resin & Acrylic",
    cleaning: "Mild soap and water; microfiber cloth to avoid scratches",
    storage: "Away from direct sunlight and heat sources",
    avoid: "Acetone (nail polish remover); alcohol; abrasive cleaners",
  },
  {
    material: "Leather",
    cleaning:
      "Wipe with dry or slightly damp cloth; leather conditioner occasionally",
    storage: "Dry environment; avoid folding or creasing",
    avoid: "Water immersion; oils; perfumes; direct sunlight",
  },
];

const designers = [
  {
    name: "Yong Joo Kim",
    description:
      "A contemporary jewelry artist known for transforming everyday materials into extraordinary wearable art. Her signature work uses Velcro® hook-and-loop fasteners, cut and manipulated into intricate forms.",
    image: "/designer-yong-joo-kim.png",
    knownFor:
      "Sculptural pieces made from transformed Velcro® and other industrial materials",
  },
  {
    name: "Gustav Reyes",
    description:
      "A pioneer in sustainable wooden jewelry, Reyes creates fluid, organic forms from reclaimed woods. His techniques bring out the natural beauty of the material while creating surprisingly flexible and wearable pieces.",
    image: "/designer-gustav-reyes.png",
    knownFor:
      "Bent wood rings and bracelets with seamless construction from reclaimed hardwoods",
  },
  {
    name: "Tara Locklear",
    description:
      "Combining traditional metalsmithing with unexpected materials, Locklear creates bold, colorful jewelry from recycled skateboards and industrial materials, elevating street culture to fine art.",
    image: "/designer-tara-locklear.png",
    knownFor:
      "Vibrant jewelry made from recycled skateboard decks combined with precious metals",
  },
  {
    name: "Anthony Lent",
    description:
      "A master goldsmith who pushes the boundaries of traditional and alternative materials. While working primarily in precious metals, Lent incorporates unusual elements like meteorite, fossilized materials, and industrial compounds.",
    image: "/designer-anthony-lent.png",
    knownFor:
      "Whimsical, narrative jewelry combining traditional craftsmanship with unexpected materials",
  },
];
