import Image from "next/image"
import Link from "next/link"
import NavMenu from "@/components/nav-menu"
import NewsletterForm from "@/components/newsletter-form"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="w-24">
          <Image src="/images/ecell-logo.png" alt="E-Cell Logo" width={80} height={80} className="object-contain" />
        </div>
        <NavMenu />
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-red-600 leading-tight">
              Empowering Innovators, <br />
              Igniting Startups.
            </h1>
          </div>
          <div>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              We empower student entrepreneurs with mentorship, and real-world exposure to build sustainable startups
              and drive impactful innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="px-8 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="#about"
                className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 max-w-4xl mx-auto rounded-2xl overflow-hidden bg-zinc-900">
          <div className="aspect-video w-full">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-4 text-center text-sm text-gray-400">
              <p>E-Cell promotional video showcasing entrepreneurial activities and events</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-zinc-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Our Story */}
          <div className="mb-24">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-xl font-medium">OUR STORY</h2>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-red-600 leading-tight mb-8">
                  Your Vision, Our Expertise
                  <br />
                  Your Success Gets Noticed.
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="E-Cell Story"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-red-600 mb-4">Message from the Faculty Co-ordinator</h4>
                  <p className="text-gray-300 mb-6">
                    At E-Cell REC, we believe in nurturing innovation and entrepreneurial mindset among students. Our
                    goal is to provide a platform where ideas can transform into successful ventures.
                  </p>
                  <div className="text-sm text-gray-400">
                    <p className="font-medium">Dr. V. Sampath Kumar, M.Tech., Ph.D.</p>
                    <p>Director - Startup HQ</p>
                    <p>Head - Entrepreneurship Development Cell</p>
                    <p>Rajalakshmi Engineering College</p>
                    <p>Thandalam, Chennai - 602 105</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="mb-24">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-xl font-medium">OUR MISSION</h2>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-red-600 leading-tight mb-8">
                  Nurturing Entrepreneurial Spirit
                  <br />
                  Through Innovation And Action.
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="E-Cell Mission"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-300">
                    Our mission is to foster entrepreneurial thinking and provide students with the resources,
                    mentorship, and opportunities they need to transform innovative ideas into successful ventures. We
                    aim to create a vibrant ecosystem that encourages risk-taking and creative problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Vision */}
          <div className="mb-24">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-xl font-medium">OUR VISION</h2>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-red-600 leading-tight mb-8">
                From Classrooms To Unicorns,
                  <br />
                  Empowering Student Visionaries.
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="E-Cell Mission"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-300">
                  We envision a future where every student at Rajalakshmi Engineering College has the opportunity to
                  explore entrepreneurship. Our goal is to be the catalyst that transforms classroom knowledge into
                  real-world business success, creating a generation of job creators rather than job seekers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-red-600 mb-12 text-center">Our Events</h2>
          {/* Events grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-zinc-900 rounded-lg overflow-hidden">
                <div className="h-48 bg-zinc-800">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt={`Event ${item}`}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {item === 1 && "Entrepreneurship Workshop with Mr.Sivasankaran"}
                    {item === 2 && "EDII - Bootcamp"}
                    {item === 3 && "Innovation Summit"}
                    {item === 4 && "Startup Spark - Grand Hackathon"}
                    {item === 5 && "TBH"}
                    {item === 6 && "TBH"}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    A hands-on session on building startups from scratch with industry experts.
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>June 15, 2023</span>
                    <span>Main Auditorium</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View More button */}
          <div className="text-center mt-12">
            <Link
              href="/events"
              className="px-8 py-3 border border-red-600 text-red-600 rounded-full font-medium hover:bg-red-600 hover:text-white transition-colors inline-block"
            >
              View More Events
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-zinc-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-red-600 mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-zinc-800">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt={`Team Member ${item}`}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">
                  {item === 1 && "Joel"}
                  {item === 2 && "Manish"}
                  {item === 3 && "Jayden"}
                </h3>
                <p className="text-red-600">
                  {item === 1 && "President"}
                  {item === 2 && "Vice President"}
                  {item === 3 && "CEO"}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/team"
              className="px-8 py-3 border border-red-600 text-red-600 rounded-full font-medium hover:bg-red-600 hover:text-white transition-colors inline-block"
            >
              Meet the Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Centre and Labs Section */}
      <section id="labs" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-red-600 mb-12 text-center">Centre and Labs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Startup Incubation Centre</h3>
              <p className="text-gray-300 mb-6">
                Our state-of-the-art incubation center provides the perfect environment for startups to grow. With
                modern facilities, mentorship programs, and networking opportunities, we ensure that innovative ideas
                get the support they need.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>24/7 access to workspace</li>
                <li>High-speed internet and conference rooms</li>
                <li>Prototyping facilities</li>
                <li>Legal and financial advisory services</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Incubation Centre"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {["Innovation Lab", "Design Thinking Space", "Maker Space"].map((lab, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{lab}</h3>
                <p className="text-gray-400 mb-6">
                  A specialized space equipped with the latest tools and technologies to help students experiment,
                  prototype, and bring their ideas to life.
                </p>
                <Link href="#" className="text-red-600 hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-zinc-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-red-600 mb-12 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                Have questions or want to collaborate? Reach out to us and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 text-red-600">📍</div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-400">
                      Entrepreneurship Development Cell
                      <br />
                      Rajalakshmi Engineering College
                      <br />
                      Thandalam, Chennai - 602 105
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 text-red-600">📧</div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-400">ecell@rajalakshmi.edu.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 text-red-600">📱</div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-400">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/images/ecell-logo.png"
                alt="E-Cell Logo"
                width={120}
                height={60}
                className="object-contain mb-4"
              />
              <p className="text-gray-400 text-sm">
                Empowering student entrepreneurs to build sustainable startups and drive impactful innovation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#about" className="hover:text-red-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="hover:text-red-600 transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="hover:text-red-600 transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#labs" className="hover:text-red-600 transition-colors">
                    Centre and Labs
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-red-600 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-red-600 transition-colors">
                    Startup Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 transition-colors">
                    Mentorship Program
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 transition-colors">
                    Funding Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 transition-colors">
                    Workshops
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
              <div className="flex gap-4 mb-4">
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-red-600 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-red-600 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-red-600 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-red-600 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for updates on events and opportunities.
              </p>
              <NewsletterForm />
              {/* Remove duplicate form below */}
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} E-Cell, Rajalakshmi Engineering College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
