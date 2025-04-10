import Image from "next/image"

export default function WatchesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Watches</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover the artistry and precision of fine timepieces that combine functionality with exquisite design.
          </p>
        </div>
      </div>

      <div className="grid gap-12 mt-12">
        {watchTypes.map((type) => (
          <div key={type.title} className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Image
              src={type.image || "/placeholder.svg?height=400&width=600&query=luxury watch timepiece"}
              alt={type.title}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full aspect-[3/2]"
            />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-bold">{type.title}</h2>
              <p className="text-gray-500 dark:text-gray-400">{type.description}</p>
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
        <h2 className="text-2xl font-bold mb-6">Watch Movement Types</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {watchMovements.map((movement) => (
            <div key={movement.type} className="rounded-lg border p-4">
              <h3 className="font-bold">{movement.type}</h3>
              <p className="mt-2 text-sm text-gray-500">{movement.description}</p>
              <p className="mt-2 text-sm">Pros: {movement.pros}</p>
              <p className="mt-2 text-sm">Cons: {movement.cons}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Watch Care Tips</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {watchCareTips.map((tip, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="mt-1 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                {index + 1}
              </div>
              <div>
                <h3 className="font-bold">{tip.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const watchTypes = [
  {
    title: "Dress Watches",
    description:
      "Dress watches are designed to be worn with formal attire. They typically feature slim cases, minimal complications, and elegant designs that complement business or evening wear.",
    image: "/placeholder.svg?height=400&width=600&query=elegant slim dress watch with leather strap",
    features: [
      "Typically thin cases (under 12mm) to fit comfortably under shirt cuffs",
      "Usually feature simple dials with minimal complications",
      "Often have leather straps, though metal bracelets are also common",
      "Generally range from 36-40mm in diameter, though modern trends have seen larger dress watches",
    ],
  },
  {
    title: "Dive Watches",
    description:
      "Dive watches are designed for underwater use, with features that make them suitable for scuba diving and other water activities. They typically offer water resistance to at least 100 meters and include rotating bezels to track dive time.",
    image: "/placeholder.svg?height=400&width=600&query=professional dive watch with rotating bezel",
    features: [
      "Water resistance of at least 100m, with professional models offering 200-300m or more",
      "Unidirectional rotating bezels to prevent accidental increases in dive time",
      "Luminous markers and hands for visibility in low light conditions",
      "Durable cases, often in stainless steel or titanium",
      "Secure bracelets or straps that can fit over diving suits",
    ],
  },
  {
    title: "Chronograph Watches",
    description:
      "Chronograph watches feature stopwatch functionality in addition to standard timekeeping. They typically have additional subdials and pushers on the case to control the chronograph functions.",
    image: "/placeholder.svg?height=400&width=600&query=luxury chronograph watch with multiple subdials",
    features: [
      "Stopwatch functionality with start, stop, and reset capabilities",
      "Multiple subdials to display elapsed seconds, minutes, and sometimes hours",
      "Pushers on the side of the case to control chronograph functions",
      "Often include tachymeter scales on the bezel or dial to calculate speed or distance",
      "Range from simple two-register designs to complex rattrapante (split-seconds) chronographs",
    ],
  },
  {
    title: "Pilot Watches",
    description:
      "Pilot watches, originally designed for aviators, feature high legibility, often larger cases, and functionality useful for navigation. Modern pilot watches range from faithful recreations of historical models to contemporary interpretations.",
    image: "/placeholder.svg?height=400&width=600&query=vintage style pilot watch with large crown",
    features: [
      "Highly legible dials, often with large Arabic numerals",
      "Prominent hands with luminous coating",
      "Oversized crowns designed to be operated while wearing gloves",
      "Often feature additional complications like chronographs, GMT functions, or slide rule bezels",
      "Historical models often have 'Flieger' or 'B-Uhr' designs from WWII-era specifications",
    ],
  },
  {
    title: "Luxury Sports Watches",
    description:
      "Luxury sports watches combine elegant design with sporty functionality. This category emerged in the 1970s with models like the Audemars Piguet Royal Oak and Patek Philippe Nautilus, featuring integrated bracelets and distinctive case designs.",
    image: "/placeholder.svg?height=400&width=600&query=luxury steel sports watch with integrated bracelet",
    features: [
      "Typically feature integrated bracelets that flow seamlessly from the case",
      "Often have distinctive case shapes and designs",
      "Combine elements of both sports and dress watches",
      "Usually crafted from stainless steel, though precious metal versions exist",
      "Generally offer moderate water resistance (50-100m) and durability for active lifestyles",
    ],
  },
]

const watchMovements = [
  {
    type: "Mechanical (Manual Wind)",
    description:
      "Powered by a mainspring that must be wound manually by turning the crown. The energy is released through a series of gears and the escapement to power the watch.",
    pros: "No battery needed; appreciated by collectors; traditional craftsmanship; smooth second hand movement",
    cons: "Requires regular winding; generally less accurate than quartz; more expensive to produce and maintain",
  },
  {
    type: "Automatic (Self-Winding)",
    description:
      "Similar to manual mechanical movements, but includes a rotor that winds the mainspring through the natural motion of the wearer's wrist.",
    pros: "No battery or manual winding needed with regular wear; appreciated by enthusiasts; smooth second hand movement",
    cons: "Less accurate than quartz; requires service every 3-7 years; stops running if not worn regularly",
  },
  {
    type: "Quartz",
    description:
      "Powered by a battery that sends an electrical current through a quartz crystal, which vibrates at a precise frequency to regulate timekeeping.",
    pros: "Highly accurate; affordable; low maintenance; available in many styles; battery lasts 1-3 years",
    cons: "Less appreciated by collectors; ticking second hand; requires battery changes",
  },
]

const watchCareTips = [
  {
    title: "Regular Cleaning",
    description:
      "Wipe your watch with a soft, lint-free cloth regularly to remove dirt, sweat, and oils. For metal bracelets, occasional cleaning with mild soap and water using a soft brush can help remove buildup in the links.",
  },
  {
    title: "Service Schedule",
    description:
      "Mechanical watches should be serviced every 3-7 years, depending on the manufacturer's recommendations. This involves disassembly, cleaning, lubrication, and adjustment by a qualified watchmaker.",
  },
  {
    title: "Water Resistance",
    description:
      "Have the water resistance of your watch tested annually if you regularly expose it to water. Gaskets and seals deteriorate over time and need replacement to maintain water resistance.",
  },
  {
    title: "Magnetism Awareness",
    description:
      "Keep mechanical watches away from strong magnetic fields (speakers, MRI machines, some tablet covers). Magnetism can affect the accuracy of mechanical movements significantly.",
  },
  {
    title: "Storage Considerations",
    description:
      "Store watches in a watch box or case when not in use. For automatic watches not worn regularly, consider a watch winder to keep them running and properly lubricated.",
  },
  {
    title: "Avoid Temperature Extremes",
    description:
      "Extreme temperatures can affect lubricants in mechanical watches and battery life in quartz watches. Avoid leaving watches in very hot or cold environments for extended periods.",
  },
]
