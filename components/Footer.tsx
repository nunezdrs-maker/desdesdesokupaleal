import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
// Logo import desde /assets (ruta relativa desde components/)
import logo from "../assets/2b8bb7dcc03ee542cf1a9d8448c5a59fffed45d6.png";

export function Footer() {
  const scrollToBooking = () => {
    const element = document.getElementById('reservar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src={logo} alt="DESOKUPACIÓN LEAL" className="w-20 h-20 mb-4" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Recuperamos lo que es tuyo con legalidad y profesionalidad
            </p>
            <div className="inline-block bg-brand/10 border border-brand/20 rounded-lg px-4 py-2">
              <p className="text-brand-light text-xs">Atención 24/7</p>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white mb-6 relative inline-block">
              Navegación
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-brand"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-slate-400 hover:text-brand-light transition-colors text-sm flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Inicio
                </button>
              </li>
              {/* ... resto del footer ... */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
