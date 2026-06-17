import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', phone: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="bg-cream py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-maroon mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are here to help. Reach out to us for appointments, enquiries, or any assistance you may need.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-maroon mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-colors text-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-colors text-sm"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-colors text-sm"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-colors text-sm resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-maroon text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold transition-colors duration-200"
                >
                  <Send size={18} />
                  Submit
                </button>
                {submitted && (
                  <p className="text-green-600 text-sm font-medium">Thank you! We will get back to you soon.</p>
                )}
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              {/* Appointment Call-out */}
              <div className="bg-maroon rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Clock size={20} className="text-gold" />
                  For Appointment
                </h3>
                <div className="space-y-3">
                  <a href="tel:9281622955" className="flex items-center gap-3 hover:text-gold transition-colors">
                    <Phone size={18} className="text-gold" />
                    <span className="font-semibold text-lg">9281622955</span>
                  </a>
                  <a href="tel:8810554444" className="flex items-center gap-3 hover:text-gold transition-colors">
                    <Phone size={18} className="text-gold" />
                    <span className="font-semibold text-lg">8810554444</span>
                  </a>
                  <a href="tel:9281622970" className="flex items-center gap-3 hover:text-gold transition-colors">
                    <Phone size={18} className="text-gold" />
                    <span>9281622970</span>
                  </a>
                  <a href="tel:9281622969" className="flex items-center gap-3 hover:text-gold transition-colors">
                    <Phone size={18} className="text-gold" />
                    <span>9281622969</span>
                  </a>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-cream rounded-xl p-6 space-y-5">
                <h3 className="text-lg font-bold text-maroon">Contact Details</h3>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-gold mt-0.5 shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    South By-pass Junction, Near Aster Ramesh Hospital,<br />
                    Pragathi Colony, Ongole - 523001,<br />
                    Prakasam Dt., A.P.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-gold shrink-0" />
                  <p className="text-gray-600 text-sm">9281622955</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-gold shrink-0" />
                  <p className="text-gray-600 text-sm">info@amarhospitals.com</p>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="text-lg font-bold text-maroon mb-3">Find Us</h3>
                <div className="aspect-video rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
                  <iframe
                    title="AMAR HOSPITALS Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.5!2d80.05!3d15.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDMwJzAwLjAiTiA4MMKwMDMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Map location: South By-pass Junction, Near Aster Ramesh Hospital, Pragathi Colony, Ongole
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
