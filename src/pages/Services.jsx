const criticalCareItems = [
  'All Sorts of Trauma',
  'Poisoning',
  'Septic Shock',
  'Critically Ill Patients (MODS)',
  'Emergency Dialysis',
  'Respiratory Failure',
  'MI (Chest Pain)',
  'Ventilator Support',
  'Snake Bite',
  'Burns',
  'Head Injury',
  'Pneumonia',
  'Respiratory Diseases',
  'Jaundice',
  'Liver Failure',
  'Liver Cirrhosis',
  'Viral Fevers',
  'Dengue',
  'Malaria',
  'Typhoid',
]

const otherSpecialties = [
  { title: 'Neuro Surgery', desc: 'Advanced neurosurgical procedures for brain, spine, and nervous system conditions with precision care.' },
  { title: 'General Medicine', desc: 'Comprehensive management of acute and chronic medical conditions with evidence-based protocols.' },
  { title: 'General Surgery', desc: 'A wide range of surgical procedures including minimally invasive laparoscopic surgeries.' },
  { title: 'Anesthesia', desc: 'Expert anesthesia services ensuring patient safety and comfort during all surgical procedures.' },
  { title: 'Physiotherapy', desc: 'Personalized rehabilitation programs to restore movement, reduce pain, and accelerate recovery.' },
]

export default function Services() {
  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="bg-cream py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-maroon mb-4">Our Services</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive multi-speciality healthcare services delivered with advanced technology and compassionate care.
          </p>
        </div>
      </section>

      {/* Critical Care & Emergency */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-3xl font-bold text-maroon mb-2">Critical Care & Emergency Services</h2>
            <p className="text-gray-500 text-sm md:text-base">Round-the-clock emergency and critical care for life-threatening conditions.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {criticalCareItems.map((label) => (
              <div
                key={label}
                className="bg-white rounded-lg p-3 md:p-4 border border-gray-100 shadow-sm hover:border-maroon/20 hover:shadow-md transition-all duration-200"
              >
                <span className="text-xs md:text-sm font-medium text-gray-800">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orthopedics */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-5">
              <h2 className="text-xl md:text-3xl font-bold text-maroon">Orthopedics</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Our Orthopedics department offers comprehensive bone, joint, and muscle care — from fracture management to complex joint replacement surgeries.
              </p>

              <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 shadow-sm">
                <div className="inline-block bg-maroon text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  Flagship Service
                </div>
                <h3 className="text-lg md:text-xl font-bold text-maroon mb-2">Robotic Knee Replacement Surgery</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  The first robotic total knee replacement facility in Prakasam District. Our robotic-assisted technology ensures millimetre-level precision, custom-fit implants, and significantly faster recovery times.
                </p>
                <div className="bg-gold/10 rounded-lg px-4 py-2 inline-block">
                  <p className="text-xs text-gray-500">Package Starts From</p>
                  <p className="text-xl font-bold text-maroon">&#8377;2,20,000/-</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 shadow-sm">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Trauma & Orthopedic Care</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Expert management of fractures, dislocations, sports injuries, degenerative joint conditions, and spinal disorders with both surgical and non-surgical approaches.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-100">
                <img
                  src="/images/AH_fathers day offer_1.png"
                  alt="Robotic Knee Replacement Surgery Offer"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Specialties */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-maroon mb-3">Other Specialties</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
              Specialized departments providing focused expertise across a range of medical disciplines.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {otherSpecialties.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-base md:text-lg font-semibold text-maroon mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
