import { useState, useEffect } from 'react'

export default function SplashScreen({ children }) {
  const [visible, setVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const hasSeen = localStorage.getItem('amar-splash-seen')
    if (!hasSeen) {
      setVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setFadeOut(true)
    setTimeout(() => {
      setVisible(false)
      localStorage.setItem('amar-splash-seen', 'true')
    }, 500)
  }

  if (!visible) {
    return children
  }

  return (
    <div className="relative">
      {/* Splash Overlay */}
      <div
        onClick={handleDismiss}
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white cursor-pointer transition-opacity duration-500 ease-out ${
          fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Animated rings behind logo */}
        <div className="absolute flex items-center justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-maroon/10 animate-ping" style={{ animationDuration: '2.5s' }} />
        </div>
        <div className="absolute flex items-center justify-center">
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-full border border-gold/20 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.3s' }} />
        </div>

        {/* Logo with scale-in animation */}
        <div className={`relative transition-transform duration-700 ease-out ${fadeOut ? 'scale-90' : 'scale-100'}`}>
          <img
            src="/images/amar logo.png"
            alt="AMAR HOSPITALS"
            className="h-28 w-auto md:h-36 object-contain drop-shadow-lg"
          />
        </div>

        {/* Tagline fade-in */}
        <div
          className={`mt-6 text-center transition-all duration-700 delay-300 ${
            fadeOut ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}
        >
          <p className="text-maroon font-semibold text-base md:text-lg tracking-wide">
            AMAR HOSPITALS
          </p>
          <p className="text-gold text-xs md:text-sm tracking-widest uppercase mt-1">
            Caring for the Community
          </p>
        </div>

        {/* Click hint */}
        <div
          className={`absolute bottom-12 md:bottom-16 transition-all duration-700 delay-500 ${
            fadeOut ? 'opacity-0' : 'opacity-60'
          }`}
        >
          <p className="text-gray-400 text-xs md:text-sm tracking-wide">
            Tap anywhere to enter
          </p>
          <div className="w-px h-6 bg-gray-300 mx-auto mt-2 animate-bounce" />
        </div>
      </div>

      {/* Site content sits behind, instantly visible after dismiss */}
      <div className={`transition-opacity duration-300 ${fadeOut ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </div>
  )
}
