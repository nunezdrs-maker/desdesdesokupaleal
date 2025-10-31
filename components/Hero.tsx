import { Button } from "./ui/button";
import { Shield, Phone, Play } from "lucide-react";
// Imágenes importadas desde la carpeta /assets (ruta relativa desde components/)
import logo from "../assets/2b8bb7dcc03ee542cf1a9d8448c5a59fffed45d6.png";
import heroImage1 from "../assets/01582eaa907bcef3e926722dd88ca6521dd03ed1.png";
import heroImage2 from "../assets/ba655dcbb89b3ac706a4880cddd2f7f762f7a90e.png";
import heroImage3 from "../assets/322bfb0504c616fe544d06622193feff5a310789.png";
import heroImage4 from "../assets/dca04aefb92dbd1752f2cc5f8631b362920356aa.png";
import { useState, useEffect } from "react";

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollToBooking = () => {
    const element = document.getElementById('reservar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMethod = () => {
    const element = document.getElementById('metodo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const carouselImages = [heroImage1, heroImage2, heroImage3, heroImage4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white py-20 px-4 overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${image})`,
              opacity: currentImageIndex === index ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Navy Blue Overlay */}
      <div className="absolute inset-0 bg-slate-900/75 z-[1]"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-[2]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-brand-light" />
            <span className="text-xs sm:text-sm">Actuación 100% legal y documentada</span>
          </div>
        </div>

        {/* Contenido */}
        <div className="flex items-center justify-between gap-8">
          <div className="max-w-2xl">
            <img src={logo} alt="DESOKUPACIÓN LEAL" className="w-28 h-28 mb-6" />
            {/* ... resto del contenido ... */}
          </div>

          {/* ... */}
        </div>
      </div>
    </section>
  );
}
