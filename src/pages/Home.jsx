import { useRef, useState, useEffect } from 'react'
import {
  Stethoscope,
  Phone,
  ChevronRight,
  Microscope,
  HandHeart,
  Wallet,
  Star,
  Quote,
} from 'lucide-react'

const trustBadges = [
  { icon: Stethoscope, label: 'Multi Speciality Care' },
  { icon: Microscope, label: 'Advance Technology' },
  { icon: HandHeart, label: 'Compassionate Care' },
  { icon: Wallet, label: 'Affordable Care' },
]

const carouselImages = [
  { src: '/images/image 1.png', alt: 'Dr. K. Shilpa - General Medicine' },
  { src: '/images/image 2.png', alt: 'Dr. R. Amarnath Reddy - Orthopedics' },
  { src: '/images/image 3.png', alt: 'Dr. M. Jhansi Rani - General Surgery' },
  { src: '/images/image 4.png', alt: 'Dr. Somineni Ramesh - General Physician' },
  { src: '/images/image 5.png', alt: 'Dr. Srikanth Ganesh - Physiotherapy' },
  { src: '/images/image 6.png', alt: 'Dr. Amarnadha Reddy - Orthopaedic Surgeon' },
]

function AutoScrollCarousel({ images }) {
  const trackRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate for seamless infinite scroll feel
  const doubled = [...images, ...images]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let animId
    const speed = 0.8 // pixels per frame

    const step = () => {
      if (!isPaused && !isDragging) {
        track.scrollLeft += speed
        const maxScroll = track.scrollWidth / 2
        if (track.scrollLeft >= maxScroll) {
          track.scrollLeft = 0
        }
      }
      animId = requestAnimationFrame(step)
    }

    animId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animId)
  }, [isPaused, isDragging])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    trackRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    trackRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => { setIsPaused(false); setIsDragging(false) }}
    >
      <div
        ref={trackRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {doubled.map((img, idx) => (
          <div
            key={`${img.src}-${idx}`}
            className="shrink-0 w-[260px] sm:w-[300px] md:w-[340px] rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto max-h-[380px] object-contain"
              draggable={false}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="font-poppins">
      {/* Hero Banner */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
          <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-gray-50">
            <img
              src="/images/opening bannerssss.png"
              alt="AMAR HOSPITALS Banner"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <AutoScrollCarousel images={carouselImages} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-maroon leading-tight mb-4">
            Your Trusted Destination for Complete Healthcare
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
            24x7 Emergency & Critical Care with advanced technology and compassionate healthcare for the Ongole community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9281622955"
              className="inline-flex items-center gap-2 bg-maroon text-white font-semibold px-6 py-3 rounded-full hover:bg-maroon-light transition-colors duration-200"
            >
              <Phone size={18} />
              Book Appointment
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-maroon text-maroon font-semibold px-6 py-3 rounded-full hover:bg-maroon hover:text-white transition-colors duration-200"
            >
              Our Services
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-cream py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center text-center gap-3 bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-maroon/10 flex items-center justify-center">
                  <badge.icon size={20} className="text-maroon md:hidden" />
                  <badge.icon size={24} className="text-maroon hidden md:block" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-800">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Robotic Knee Surgery Offer */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Small image box */}
            <div className="order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 p-3 md:p-4">
                <img
                  src="/images/AH_fathers day offer_1.png"
                  alt="Robotic Knee Replacement Surgery Offer"
                  className="w-full h-auto max-h-[320px] object-contain mx-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Text content */}
            <div className="order-2 space-y-4 md:space-y-5">
              <div className="inline-block bg-maroon text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                First in Prakasam District
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-maroon leading-tight">
                Robotic Knee Replacement Surgery
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Experience the future of joint replacement with our state-of-the-art robotic-assisted technology. Our precision-guided system ensures accurate implant placement, faster recovery, minimal pain, and a more natural feel.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <span>Precision implant alignment for longer-lasting results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <span>Faster recovery and shorter hospital stay</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <span>Pain-free walking and improved quality of life</span>
                </li>
              </ul>
              <div className="flex items-center gap-3 pt-1">
                <div className="bg-gold/10 rounded-lg px-4 py-2">
                  <p className="text-xs text-gray-500">Package Starts From</p>
                  <p className="text-xl md:text-2xl font-bold text-maroon">&#8377;2,20,000/-</p>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="tel:9281622955"
                  className="inline-flex items-center gap-2 bg-maroon text-white font-semibold px-6 py-3 rounded-full hover:bg-maroon-light transition-colors duration-200 text-sm md:text-base"
                >
                  <Phone size={18} />
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-maroon mb-3">What Our Patients Say</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
              Real stories from patients who trusted us with their care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Ravi Kumar',
                location: 'Ongole',
                text: 'The robotic knee replacement surgery at AMAR HOSPITALS changed my life. I was walking within days and the recovery was much faster than I expected. Dr. Amarnadha Reddy and the team were exceptional.',
                rating: 5,
              },
              {
                name: 'Lakshmi Devi',
                location: 'Prakasam Dt.',
                text: 'My father received critical care here during an emergency. The 24x7 team was incredibly responsive and professional. The facilities are modern and the staff genuinely cares. Highly recommended.',
                rating: 5,
              },
              {
                name: 'Suresh Reddy',
                location: 'Ongole',
                text: 'From diagnosis to post-surgery physiotherapy, the entire journey was smooth. The physiotherapy department under Dr. Srikanth Ganesh helped me regain full mobility. Best hospital in the region.',
                rating: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <div className="mb-4">
                  <Quote size={20} className="text-maroon/20" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center">
                    <span className="text-maroon font-semibold text-sm">
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-maroon mb-4">
            Schedule Your Appointment Today
          </h2>
          <p className="text-gray-500 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Take the first step towards better health. Our team is ready to provide you with personalized care and attention.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <a
              href="tel:9281622955"
              className="inline-flex items-center gap-2 bg-maroon text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-maroon-light transition-colors duration-200 text-base md:text-lg"
            >
              <Phone size={20} />
              9281622955
            </a>
            <a
              href="tel:8810554444"
              className="inline-flex items-center gap-2 border-2 border-maroon text-maroon font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-maroon hover:text-white transition-colors duration-200 text-base md:text-lg"
            >
              <Phone size={20} />
              8810554444
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
