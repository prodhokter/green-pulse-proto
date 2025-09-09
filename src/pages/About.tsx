import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Tentang Strategi Hijau untuk Energi Bersih
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Inisiatif pemerintah Indonesia yang komprehensif mendorong transisi menuju energi berkelanjutan 
          melalui program strategis, teknologi inovatif, dan keterlibatan masyarakat.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-6 w-6 mr-2 text-primary" />
              Misi Kami
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Mempercepat transisi Indonesia menuju energi bersih berkelanjutan dengan mengimplementasikan 
              sistem monitoring komprehensif, program pemerintah strategis, dan mendorong inovasi 
              dalam teknologi energi terbarukan sambil memastikan pertumbuhan ekonomi dan 
              keberlanjutan lingkungan.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-6 w-6 mr-2 text-secondary" />
              Visi Kami
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Memposisikan Indonesia sebagai pemimpin global dalam adopsi dan inovasi energi bersih, 
              mencapai netralitas karbon pada tahun 2060 sambil menciptakan jutaan lapangan kerja hijau dan 
              membangun komunitas energi berkelanjutan di seluruh nusantara.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Key Objectives */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Tujuan Utama</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Pengurangan Emisi Karbon",
              description: "Mengurangi emisi karbon nasional sebesar 35% pada tahun 2030 melalui monitoring komprehensif dan intervensi strategis.",
              icon: Target,
              badge: "Lingkungan"
            },
            {
              title: "Ekspansi Energi Terbarukan", 
              description: "Meningkatkan kapasitas energi terbarukan menjadi 50% dari total bauran energi melalui proyek tenaga surya, angin, dan hidroelektrik.",
              icon: Award,
              badge: "Energi"
            },
            {
              title: "Penciptaan Lapangan Kerja Hijau",
              description: "Menciptakan 2 juta lapangan kerja hijau di berbagai sektor termasuk energi terbarukan, penelitian, dan teknologi berkelanjutan.",
              icon: Users,
              badge: "Ekonomi"
            },
            {
              title: "Inovasi & Pendidikan",
              description: "Membangun 100+ innovation hub dan melatih 50.000 profesional dalam teknologi energi bersih dan praktik berkelanjutan.",
              icon: BookOpen,
              badge: "Inovasi"
            }
          ].map((objective, index) => (
            <Card key={index} className="transition-smooth hover:shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <objective.icon className="h-8 w-8 text-primary" />
                  <Badge variant="outline">{objective.badge}</Badge>
                </div>
                <CardTitle className="text-lg">{objective.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {objective.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Legal Framework */}
      <Card>
        <CardHeader>
          <CardTitle>Kerangka Hukum & Kewenangan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Landasan Regulasi</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Peraturan Presiden No. 22/2017 tentang Rencana Umum Energi Nasional</li>
                <li>• Undang-Undang No. 30/2007 tentang Pengelolaan Energi</li>
                <li>• Peraturan Pemerintah No. 79/2014 tentang Kebijakan Energi Nasional</li>
                <li>• Peraturan Presiden No. 112/2022 tentang Percepatan Energi Terbarukan</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Mitra Implementasi</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Kementerian Energi dan Sumber Daya Mineral</li>
                <li>• Kementerian Lingkungan Hidup dan Kehutanan</li>
                <li>• Badan Riset dan Inovasi Nasional (BRIN)</li>
                <li>• Badan Pengembangan Energi Daerah</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;