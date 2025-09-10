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
        "Indonesia"
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
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map with Google Maps Embed */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Peta Lokasi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4056129.348456078!2d108.56324567345446!3d-6.882958973557683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2da393f79feeb5c5%3A0x1030bfbca7cb850!2sJawa%20Timur!5e0!3m2!1sid!2sid!4v1757463218705!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kantor Green Strategy for Clean Energy 2025"
                />
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
