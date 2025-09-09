import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Users, BookOpen, Calendar } from 'lucide-react';

const InnovationHub = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
          Innovation Hub
        </Badge>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Karunia Green Innovation Hub
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Pusat penelitian dan pengembangan canggih yang mendorong inovasi dalam teknologi energi bersih dan pendidikan.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Pusat Edukasi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Sumber daya pembelajaran komprehensif untuk teknologi energi bersih dan praktik berkelanjutan.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                <span className="text-sm">Artikel Penelitian</span>
                <Badge variant="outline">245</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                <span className="text-sm">Tutorial Video</span>
                <Badge variant="outline">89</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                <span className="text-sm">Modul Interaktif</span>
                <Badge variant="outline">34</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Kemitraan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Jaringan kolaboratif dengan institusi akademik, pusat penelitian, dan pemimpin industri.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                <span className="text-sm">Universitas</span>
                <Badge variant="outline">45</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                <span className="text-sm">Pusat Penelitian</span>
                <Badge variant="outline">23</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                <span className="text-sm">Mitra Industri</span>
                <Badge variant="outline">67</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Acara Mendatang
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Summit Inovasi Energi Bersih 2024",
                  date: "15 Maret 2024",
                  type: "Konferensi"
                },
                {
                  title: "Workshop Teknologi Tenaga Surya",
                  date: "22 Maret 2024", 
                  type: "Workshop"
                },
                {
                  title: "Program Sertifikasi Keahlian Hijau",
                  date: "5 April 2024",
                  type: "Pelatihan"
                },
                {
                  title: "Forum Kolaborasi Internasional",
                  date: "18 April 2024",
                  type: "Forum"
                }
              ].map((event, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-sm">{event.title}</h4>
                    <Badge variant="outline" className="text-xs">{event.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InnovationHub;