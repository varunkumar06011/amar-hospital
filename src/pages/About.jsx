import { Stethoscope, Microscope, HandHeart, Wallet, ShieldCheck, Building2 } from 'lucide-react'

const whyChooseUs = [
  {
    icon: Stethoscope,
    title: 'Multi Speciality Care',
    desc: 'From emergency critical care to advanced robotic surgery, our multi-disciplinary team covers a wide spectrum of medical specialities under one roof. Patients receive coordinated, comprehensive treatment plans tailored to their unique needs.',
  },
  {
    icon: Microscope,
    title: 'Advance Technology',
    desc: 'We invest in cutting-edge medical technology including robotic-assisted surgical systems, modern diagnostic imaging, and advanced ICU monitoring to ensure accurate diagnosis and precise treatment outcomes.',
  },
  {
    icon: HandHeart,
    title: 'Compassionate Care',
    desc: 'Every patient is treated with empathy, dignity, and respect. Our healthcare professionals go beyond clinical excellence to provide emotional support and a comforting environment throughout the healing journey.',
  },
  {
    icon: Wallet,
    title: 'Affordable Care',
    desc: 'Quality healthcare should be accessible to everyone. We strive to keep our services reasonably priced without compromising on standards, making advanced treatments available to the broader community.',
  },
]

export default function About() {
  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="bg-cream py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-maroon mb-4">About AMAR HOSPITALS</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A trusted multi-specialty healthcare provider dedicated to serving the Ongole community with compassion, advanced technology, and affordable excellence.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-50 flex items-center justify-center">
                <img
                  src="/images/hospital uilding.png"
                  alt="AMAR HOSPITALS Building"
                  className="w-full h-auto max-h-[480px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-maroon">
                Caring for the Community Since Our Inception
              </h2>
              <p className="text-gray-600 leading-relaxed">
                AMAR HOSPITALS is a leading multi-specialty hospital located in Ongole, Prakasam District, Andhra Pradesh. We are committed to delivering exceptional healthcare services that combine clinical excellence with genuine compassion.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our hospital brings together a team of highly qualified doctors, skilled nurses, and dedicated support staff who work collaboratively to ensure every patient receives personalized attention and the best possible care.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in treating not just the illness, but the whole person. Our patient-centric approach, modern infrastructure, and community-focused mission make us a trusted healthcare partner for families across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-3">Our Infrastructure</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Modern facilities designed for patient comfort and clinical excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: 'Modern Hospital Building',
                desc: 'Spacious, well-designed hospital premises with comfortable patient rooms, advanced operation theaters, and streamlined outpatient services.',
              },
              {
                icon: Microscope,
                title: 'Robotic Surgery Systems',
                desc: 'State-of-the-art robotic-assisted surgical technology enabling precision procedures with faster recovery and better outcomes.',
              },
              {
                icon: ShieldCheck,
                title: '24x7 Critical Care Unit',
                desc: 'Fully equipped intensive care unit staffed round-the-clock by experienced intensivists and critical care nurses.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm text-center"
              >
                <div className="w-14 h-14 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={26} className="text-maroon" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-3">Why Choose Us</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              What sets AMAR HOSPITALS apart in delivering healthcare excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
