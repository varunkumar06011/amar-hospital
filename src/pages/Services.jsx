import {
  HeartPulse,
  Bone,
  Brain,
  Activity,
  ShieldCheck,
  Syringe,
  Move,
  AlertTriangle,
  Droplets,
  Wind,
  Flame,
  Sun,
  Thermometer,
  Bug,
  Pill,
} from 'lucide-react'

const criticalCareItems = [
  { icon: AlertTriangle, label: 'All Sorts of Trauma' },
  { icon: Pill, label: 'Poisoning' },
  { icon: HeartPulse, label: 'Septic Shock' },
  { icon: Activity, label: 'Critically Ill Patients (MODS)' },
  { icon: Droplets, label: 'Emergency Dialysis' },
  { icon: Wind, label: 'Respiratory Failure' },
  { icon: HeartPulse, label: 'MI (Chest Pain)' },
  { icon: Wind, label: 'Ventilator Support' },
  { icon: Bug, label: 'Snake Bite' },
  { icon: Flame, label: 'Burns' },
  { icon: Brain, label: 'Head Injury' },
  { icon: Wind, label: 'Pneumonia' },
  { icon: Wind, label: 'Respiratory Diseases' },
  { icon: Sun, label: 'Jaundice' },
  { icon: AlertTriangle, label: 'Liver Failure' },
  { icon: ShieldCheck, label: 'Liver Cirrhosis' },
  { icon: Thermometer, label: 'Viral Fevers' },
  { icon: Bug, label: 'Dengue' },
  { icon: Bug, label: 'Malaria' },
  { icon: Bug, label: 'Typhoid' },
]

const otherSpecialties = [
  { icon: Brain, title: 'Neuro Surgery', desc: 'Advanced neurosurgical procedures for brain, spine, and nervous system conditions with precision care.' },
  { icon: Activity, title: 'General Medicine', desc: 'Comprehensive management of acute and chronic medical conditions with evidence-based protocols.' },
  { icon: ShieldCheck, title: 'General Surgery', desc: 'A wide range of surgical procedures including minimally invasive laparoscopic surgeries.' },
  { icon: Syringe, title: 'Anesthesia', desc: 'Expert anesthesia services ensuring patient safety and comfort during all surgical procedures.' },
  { icon: Move, title: 'Physiotherapy', desc: 'Personalized rehabilitation programs to restore movement, reduce pain, and accelerate recovery.' },
]

export default function Services() {
  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="bg-cream py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-maroon mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive multi-speciality healthcare services delivered with advanced technology and compassionate care.
          </p>
        </div>
      </section>

      {/* Critical Care & Emergency */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-2">Critical Care & Emergency Services</h2>
            <p className="text-gray-500">Round-the-clock emergency and critical care for life-threatening conditions.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {criticalCareItems.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon size={20} className="text-maroon" />
                </div>
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orthopedics */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-4">Orthopedics</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Orthopedics department offers comprehensive bone, joint, and muscle care — from fracture management to complex joint replacement surgeries.
              </p>

              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-maroon text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Flagship Service
                  </div>
                </div>
                <h3 className="text-xl font-bold text-maroon mb-2">Robotic Knee Replacement Surgery</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  The first robotic total knee replacement facility in Prakasam District. Our robotic-assisted technology ensures millimetre-level precision, custom-fit implants, and significantly faster recovery times.
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-gold/10 rounded-lg px-4 py-2">
                    <p className="text-xs text-gray-500">Package Starts From</p>
                    <p className="text-xl font-bold text-maroon">&#8377;2,20,000/-</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Trauma & Orthopedic Care</h3>
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-3">Other Specialties</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Specialized departments providing focused expertise across a range of medical disciplines.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherSpecialties.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
