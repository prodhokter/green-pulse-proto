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

          {/* Peta Lokasi Kota Karunia */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Peta Lokasi Kota Karunia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64 rounded-lg overflow-hidden bg-slate-100 border">
                <img
                  src="/peta.png"
                  alt="Peta Lokasi Kota Karunia"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="w-full h-full bg-slate-200 flex items-center justify-center text-muted-foreground hidden"
                  style={{ display: 'none' }}
                >
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>Peta tidak dapat dimuat</p>
                  </div>
                </div>
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
