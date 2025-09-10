import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman formulir
    setTimeout(() => {
      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih telah menghubungi kami. Kami akan segera merespons.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Kantor",
      details: [
        "Jl. Neraca No. 1",
        "Kota Karunia 12112",
        "Kota Karunia"
      ]
    },
    {
      icon: Phone,
      title: "Nomor Telepon",
      details: [
        "+62 271 1234 5678"
      ]
    },
    {
      icon: Mail,
      title: "Alamat Email",
      details: [
        "GreenStrategyforCleanEnergy@gmail.com"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Hubungi Kami
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Hubungi tim kami untuk pertanyaan tentang program energi bersih,
          kemitraan, atau dukungan teknis.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Mari Terhubung
          </h2>

          <div className="grid gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="transition-smooth hover:shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <info.icon className="h-6 w-6 mr-3 text-primary" />
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {info.details.map((detail, idx) => (
                      <div key={idx}>
                        {info.title === "Alamat Email" ? (
                          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-2">
                              <Mail className="h-4 w-4 text-primary" />
                              <span className="text-xs font-medium text-primary uppercase tracking-wide">Email Address</span>
                            </div>
                            <a
                              href={`mailto:${detail}`}
                              className="text-foreground font-semibold text-base hover:text-primary transition-smooth cursor-pointer block mb-3 break-all"
                            >
                              {detail}
                            </a>
                            <a href={`mailto:${detail}`}>
                              <Button
                                variant="hero"
                                size="sm"
                                className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
                              >
                                <Send className="h-4 w-4 mr-2" />
                                Kirim Pesan
                              </Button>
                            </a>
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground">
                            {info.title === "Nomor Telepon" ? (
                              <a
                                href={`tel:${detail}`}
                                className="hover:text-primary transition-smooth cursor-pointer"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        )}
                        {info.title === "Alamat Email" && (
                          <div className="mt-3">
                            {/* Button moved inside the email frame above */}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Fictional Map of Kota Karunia */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Peta Lokasi Kota Karunia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64 rounded-lg overflow-hidden bg-slate-100 border">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 800 400"
                  className="w-full h-full"
                  style={{ background: 'linear-gradient(180deg, #e0f2fe 0%, #f1f8e9 100%)' }}
                >
                  {/* Background terrain */}
                  <defs>
                    <pattern id="cityPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                      <rect width="20" height="20" fill="#f5f5f5" opacity="0.3"/>
                      <rect width="2" height="2" x="9" y="9" fill="#ddd"/>
                    </pattern>
                  </defs>

                  {/* Mountains in background */}
                  <path d="M0,200 L100,120 L200,160 L300,100 L400,140 L500,80 L600,120 L700,100 L800,140 L800,400 L0,400 Z"
                        fill="#81c784" opacity="0.3"/>

                  {/* Hills */}
                  <path d="M0,280 Q200,240 400,260 T800,280 L800,400 L0,400 Z"
                        fill="#a5d6a7" opacity="0.4"/>

                  {/* City area */}
                  <rect x="200" y="180" width="400" height="220" fill="url(#cityPattern)" opacity="0.6"/>

                  {/* Main roads */}
                  <line x1="50" y1="300" x2="750" y2="300" stroke="#666" strokeWidth="4"/>
                  <line x1="400" y1="100" x2="400" y2="380" stroke="#666" strokeWidth="4"/>
                  <line x1="250" y1="180" x2="550" y2="350" stroke="#888" strokeWidth="3"/>

                  {/* Jl. Neraca (our office street) */}
                  <line x1="350" y1="280" x2="450" y2="280" stroke="#4fc3f7" strokeWidth="6" strokeDasharray="2,2"/>

                  {/* Buildings */}
                  <rect x="320" y="240" width="15" height="30" fill="#64b5f6"/>
                  <rect x="340" y="235" width="12" height="35" fill="#81c784"/>
                  <rect x="355" y="245" width="18" height="25" fill="#ffb74d"/>
                  <rect x="380" y="230" width="20" height="40" fill="#e57373"/>
                  <rect x="405" y="240" width="15" height="30" fill="#ba68c8"/>

                  {/* Parks/Green spaces */}
                  <circle cx="300" cy="200" r="25" fill="#66bb6a" opacity="0.7"/>
                  <circle cx="500" cy="320" r="30" fill="#66bb6a" opacity="0.7"/>

                  {/* River */}
                  <path d="M0,350 Q200,330 400,340 T800,350" stroke="#42a5f5" strokeWidth="8" fill="none" opacity="0.7"/>

                  {/* Office marker - Red pin */}
                  <g transform="translate(400,280)">
                    <circle cx="0" cy="0" r="12" fill="#f44336"/>
                    <circle cx="0" cy="0" r="8" fill="#ffffff"/>
                    <path d="M0,-15 Q-8,-25 0,-35 Q8,-25 0,-15" fill="#f44336"/>
                    <circle cx="0" cy="-25" r="4" fill="#ffffff"/>
                  </g>

                  {/* Compass */}
                  <g transform="translate(720,60)">
                    <circle cx="0" cy="0" r="25" fill="white" stroke="#333" strokeWidth="2"/>
                    <path d="M0,-20 L5,0 L0,5 L-5,0 Z" fill="#f44336"/>
                    <text x="0" y="-30" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">U</text>
                  </g>

                  {/* Scale */}
                  <g transform="translate(50,350)">
                    <line x1="0" y1="0" x2="50" y2="0" stroke="#333" strokeWidth="2"/>
                    <line x1="0" y1="-3" x2="0" y2="3" stroke="#333" strokeWidth="2"/>
                    <line x1="50" y1="-3" x2="50" y2="3" stroke="#333" strokeWidth="2"/>
                    <text x="25" y="15" textAnchor="middle" fontSize="10" fill="#333">1 km</text>
                  </g>

                  {/* City labels */}
                  <text x="400" y="150" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#2e7d32">KOTA KARUNIA</text>
                  <text x="400" y="170" textAnchor="middle" fontSize="12" fill="#666">Pusat Energi Berkelanjutan</text>

                  {/* Office label */}
                  <text x="420" y="275" fontSize="11" fontWeight="bold" fill="#1976d2">Kantor GSCE</text>
                  <text x="420" y="290" fontSize="9" fill="#666">Jl. Neraca No. 1</text>

                  {/* District labels */}
                  <text x="300" y="220" fontSize="10" fill="#4a4a4a">Taman Energi</text>
                  <text x="500" y="340" fontSize="10" fill="#4a4a4a">Taman Hijau</text>
                  <text x="400" y="365" fontSize="10" fill="#1976d2">Sungai Karunia</text>
                </svg>
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-red-500" />
                  Kantor GSCE terletak di Jl. Neraca No. 1, pusat Kota Karunia
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="h-5 w-5 mr-2" />
                Kirim Pesan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Alamat Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Masukkan email Anda"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subjek *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Perihal apa ini?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Pesan *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mohon berikan detail tentang pertanyaan Anda..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Mengirim..."
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Kirim Pesan
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Kolom wajib diisi. Kami biasanya merespons dalam 24 jam pada hari kerja.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
