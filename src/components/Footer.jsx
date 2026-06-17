import { Phone, Mail, Globe, MapPin } from 'lucide-react'

const socialLinks = [
  { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  { name: 'YouTube', icon: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z' },
  { name: 'Instagram', icon: 'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zM2 12.5V16a4 4 0 004 4h3.5M22 11.5V8a4 4 0 00-4-4h-3.5M11 12a2 2 0 100-4 2 2 0 000 4zM17.5 6.5h.01' },
  { name: 'WhatsApp', icon: 'M17.5 14.5c-.8.8-1.7 1.5-2.7 2-.2.1-.4.1-.5 0l-1.8-.8c-1.1.5-2.3.7-3.5.5-1.2-.2-2.3-.7-3.2-1.5-.9-.8-1.6-1.8-2-2.9-.4-1.1-.5-2.3-.3-3.5l-.8-1.8c-.1-.2 0-.4 0-.5.5-1 1.2-1.9 2-2.7.2-.2.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7l-.6.6c-.2.2-.2.6 0 .8.5.6 1.1 1 1.8 1.3.2.1.5 0 .7-.2l.9-.9c.2-.2.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7l-.8.8zM21 11a9 9 0 11-18 0 9 9 0 0118 0z' },
  { name: 'Telegram', icon: 'M22 3L2 12l7 2 2 7 3.5-5.5L22 3z' },
]

function SocialIcon({ name, icon }) {
  return (
    <a
      href="#"
      aria-label={name}
      className="w-9 h-9 rounded-full bg-maroon/10 flex items-center justify-center text-maroon hover:bg-maroon hover:text-white transition-colors duration-200"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={icon} />
      </svg>
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4">
              <img
                src="/images/amar logo.png"
                alt="AMAR HOSPITALS"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Providing multi-speciality healthcare with compassion and advanced technology to the community of Ongole and beyond.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <SocialIcon key={s.name} name={s.name} icon={s.icon} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-maroon font-semibold text-base mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <p>
                  South By-pass Junction, Near Aster Ramesh Hospital,<br />
                  Pragathi Colony, Ongole - 523001,<br />
                  Prakasam Dt., A.P.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <p>9281622955</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <p>info@amarhospitals.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-gold shrink-0" />
                <p>www.amarhospitals.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-maroon font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-maroon transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-maroon transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-maroon transition-colors">Our Services</a></li>
              <li><a href="/doctors" className="hover:text-maroon transition-colors">Our Doctors</a></li>
              <li><a href="/contact" className="hover:text-maroon transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} AMAR HOSPITALS. All rights reserved. Caring for the Community.
        </div>
      </div>
    </footer>
  )
}
