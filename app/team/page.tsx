import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  { name: "Joel", role: "President", image: "/core/joel.JPG" },
  { name: "Manish", role: "Vice President", image: "/core/Manish.JPG" },
  { name: "Jayden", role: "CEO", image: "/core/Jayden.PNG" },
  { name: "Abhijith", role: "COO", image: "/core/Abhijit.png" },
  { name: "Nitin", role: "Secretary", image: "/core/Nithin.jpg" },
  { name: "Monish", role: "Joint Secretary", image: "/core/Monish.JPG" },
  { name: "Hari Balaji", role: "CFO", image: "/core/Haribalaji.jpg" },
  { name: "Priya", role: "Chief Director", image: "/core/Priyadarshini.jpg" },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Link href="/" className="text-red-600 hover:text-red-700 mb-8 inline-block">← Back to Home</Link>
        <h1 className="text-4xl font-bold text-red-600 mb-12 text-center">Meet Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-zinc-800">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-red-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}