import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-6">
          GSCE (Green Strategy for Clean Energy)
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Strategi jangka panjang pemerintah Kota Karunia menuju transisi Energi Baru Terbarukan (EBT)
          melalui program strategis, penerapan teknologi inovatif, dan kolaborasi multipihak.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <Card className="h-full border-2 hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-2xl">
              <Award className="h-8 w-8 mr-3 text-secondary" />
              Visi
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Menanggulangi krisis energi Kota Karunia menuju EBT, mendorong pertumbuhan ekonomi,
              serta menciptakan kota yang inklusif dan ramah lingkungan.
            </p>
          </CardContent>
        </Card>

        <Card className="h-full border-2 hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-2xl">
              <Target className="h-8 w-8 mr-3 text-primary" />
              Misi
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="font-bold text-primary text-lg mr-3 mt-1">1.</span>
                <span className="text-muted-foreground leading-relaxed">
                  Mempercepat transisi energi Kota Karunia menuju Energi Baru Terbarukan (EBT) dengan
                  mengimplementasikan sistem monitoring berbasis dashboard indikator Real-time, Program
                  Pemerintah Strategis, dan kolaborasi multipihak untuk mendorong inovasi dalam teknologi
                  energi terbarukan
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-primary text-lg mr-3 mt-1">2.</span>
                <span className="text-muted-foreground leading-relaxed">
                  Memastikan pertumbuhan ekonomi dan keberlanjutan lingkungan.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Objectives */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Tujuan Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tiga pilar utama yang menjadi fokus dalam mencapai visi energi berkelanjutan
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Menanggulangi Krisis Energi",
              description: "Mengatasi ketergantungan pada energi fosil dan mengimplementasikan solusi energi berkelanjutan untuk Kota Karunia.",
              icon: Target,
              badge: "Energi",
              color: "text-green-600"
            },
            {
              title: "Kota Karunia yang Inklusif",
              description: "Menciptakan kota yang memberikan akses energi bersih dan terjangkau bagi seluruh lapisan masyarakat.",
              icon: Users,
              badge: "Inklusivitas",
              color: "text-blue-600"
            },
            {
              title: "Penerapan Kebijakan Dinamis dan Responsif",
              description: "Mengembangkan dan menerapkan kebijakan energi yang adaptif terhadap perubahan dan kebutuhan masyarakat.",
              icon: Award,
              badge: "Kebijakan",
              color: "text-purple-600"
            }
          ].map((objective, index) => (
            <Card key={index} className="h-full border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10">
                    <objective.icon className={`h-12 w-12 ${objective.color}`} />
                  </div>
                </div>
                <Badge variant="outline" className="mb-3 mx-auto">{objective.badge}</Badge>
                <CardTitle className="text-xl">{objective.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {objective.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
