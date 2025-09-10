import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="flex flex-col leading-tight">
                  <h3 className="text-lg font-bold text-foreground">Green Strategy</h3>
                  <p className="text-sm text-muted-foreground">for Clean Energy</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strategi jangka panjang pemerintah Kota Karunia menuju transisi Energi Baru Terbarukan (EBT)
              melalui program strategis, penerapan teknologi inovatif, dan keterlibatan berbagai pihak.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Tautan Cepat</h4>
            <nav className="space-y-2">
              {[
                { name: 'Beranda', href: '/' },
                { name: 'Dashboard', href: '/programs/government' },
                { name: 'Innovation Hub', href: '/programs/innovation' },
                { name: 'Berita & Update', href: '/news' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Program Kami</h4>
            <nav className="space-y-2">
              {[
                'Karunia Green Government',
                'Green Innovation Hub',
                'Pelatihan & Peningkatan Keahlian Hijau',
                'Bantuan Langsung Tunai',
              ].map((item) => (
                <div key={item} className="text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Hubungi Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Jl. Neraca No. 1, Kota Karunia 12112</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+62 271 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>GreenStrategyforCleanEnergy@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0">
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Kebijakan Privasi
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Syarat Layanan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
