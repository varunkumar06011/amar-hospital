const doctors = [
  {
    src: '/images/image 6.png',
    alt: 'Dr. Amarnadha Reddy - Orthopaedic Surgeon',
    name: 'Dr. Amarnadha Reddy',
    qualifications: 'MS (Ortho), DNB (Ortho), FIJR (USA)',
    role: 'Visiting Director – AMAR HOSPITALS',
    specialization: 'Senior Orthopaedic Consultant',
    background: 'Ex – International Fellow in Joint Replacement (USA)',
  },
  {
    src: '/images/image 4.png',
    alt: 'Dr. Somineni Ramesh - General Physician',
    name: 'Dr. Somineni Ramesh',
    qualifications: 'MBBS, MD',
    role: 'General Physician',
    specialization: 'Diabetologist & Critical Care Specialist',
    background: 'Expert in managing acute and chronic medical conditions with a special focus on diabetes and critical care medicine.',
  },
  {
    src: '/images/image 5.png',
    alt: 'Dr. Srikanth Ganesh, PT - Physiotherapist',
    name: 'Dr. Srikanth Ganesh, PT',
    qualifications: 'MPT (Neuro), AEA (Cert), CKT, CCT',
    role: 'HOD – Dept of Physiotherapy',
    specialization: 'Sr. Senior Physiotherapist',
    background: 'Specialized in neurological physiotherapy with advanced certifications in certified kinesio taping and clinical therapy.',
  },
]

export default function Doctors() {
  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="bg-cream py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-maroon mb-4">Our Doctors</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet our team of experienced and dedicated medical professionals committed to your health and well-being.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {doctors.map((doc) => (
              <div
                key={doc.src}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-full bg-gray-50 flex items-center justify-center p-2 md:p-3">
                  <img
                    src={doc.src}
                    alt={doc.alt}
                    className="w-full h-auto max-h-[520px] object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 md:p-6 border-t border-gray-100">
                  <h3 className="text-lg md:text-xl font-bold text-maroon mb-1">{doc.name}</h3>
                  <p className="text-sm text-gold font-semibold mb-1">{doc.qualifications}</p>
                  <p className="text-sm text-gray-700 font-medium mb-1">{doc.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{doc.specialization}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{doc.background}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
