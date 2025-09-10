import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BarChart3, Lightbulb, TrendingDown, Users, Calendar, ExternalLink } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import heroImage from '@/assets/hero-renewable-energy.jpg';
import seedData from '@/data/seedData.json';

const Home = () => {
  const [currentEmissions, setCurrentEmissions] = useState(seedData.emissions.totalDaily);
  const [isAnimating, setIsAnimating] = useState(false);

  // Simulasi update data real-time
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentEmissions(prev => {
          const variation = Math.random() * 20000 - 10000;
          return Math.max(1000000, Math.floor(prev + variation));
        });
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('id-ID').format(num);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Membangun
              <span className="block text-primary">
                Masa Depan Berkelanjutan
              </span>
              untuk Kota Karunia
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Strategi jangka panjang pemerintah Kota Karunia menuju transisi Energi Baru Terbarukan (EBT)
              melalui program strategis, penerapan teknologi inovatif, dan kolaborasi multipihak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/programs/government">
                <Button variant="hero" size="xl">
                  <BarChart3 className="h-5 w-5" />
                  Jelajahi Program Kami
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/programs/government">
                <Button variant="outline" size="xl">
                  Lihat Dashboard Live
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Program Strategis Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dua inisiatif komprehensif yang bekerja bersama untuk mencapai target energi bersih Kota Karunia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Government Program Card */}
            <Card className="relative overflow-hidden transition-smooth hover:shadow-card group flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 gradient-primary opacity-10 rounded-full -translate-y-16 translate-x-16" />
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">Inisiatif Pemerintah</Badge>
                </div>
                <CardTitle className="text-2xl">Karunia Green Government</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-6">
                  {seedData.programs.government.description}
                </p>
                <div className="space-y-2 mb-6 flex-grow">
                  {seedData.programs.government.objectives.slice(0, 2).map((objective, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{objective}</p>
                    </div>
                  ))}
                </div>
                <Link to="/programs/government" className="mt-auto">
                  <Button variant="default" className="w-full group-hover:shadow-lg">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Innovation Hub Card */}
            <Card className="relative overflow-hidden transition-smooth hover:shadow-card group flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 gradient-secondary opacity-10 rounded-full -translate-y-16 translate-x-16" />
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Lightbulb className="h-8 w-8 text-secondary" />
                  <Badge variant="outline" className="border-secondary text-secondary">Innovation Hub</Badge>
                </div>
                <CardTitle className="text-2xl">Karunia Green Innovation Hub</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-6">
                  {seedData.programs.innovation.description}
                </p>
                <div className="space-y-2 mb-6 flex-grow">
                  {seedData.programs.innovation.objectives.slice(0, 2).map((objective, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{objective}</p>
                    </div>
                  ))}
                </div>
                <Link to="/programs/innovation" className="mt-auto">
                  <Button variant="secondary" className="w-full group-hover:shadow-lg">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visi, Misi & Tujuan */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Visi, Misi & Tujuan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Landasan strategis dalam mencapai transisi energi berkelanjutan untuk Kota Karunia
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Visi */}
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg gradient-primary mb-3">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>Visi</div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {seedData.programs.government.visi}
                </p>
              </CardContent>
            </Card>

            {/* Misi */}
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg gradient-secondary mb-3">
                    <BarChart3 className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>Misi</div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {seedData.programs.government.misi.map((misi, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-medium text-secondary">{index + 1}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{misi}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tujuan */}
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg gradient-primary mb-3">
                    <Lightbulb className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>Tujuan</div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {seedData.programs.government.tujuan.map((tujuan, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{tujuan}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Monitoring Real-Time
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Dashboard Emisi Karbon Live
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pantau jejak karbon Kota Karunia secara real-time dengan sistem monitoring canggih kami
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Total Emissions KPI */}
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Emisi Harian
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl font-bold text-foreground mb-2 ${isAnimating ? 'animate-pulse-glow' : ''}`}>
                    {formatNumber(currentEmissions)}
                  </div>
                  <div className="text-sm text-muted-foreground">ton CO₂</div>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <TrendingDown className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-500">-2,3% dari kemarin</span>
                  </div>
                </CardContent>
              </Card>

              {/* Target Progress */}
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Target vs Realisasi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {((currentEmissions / seedData.emissions.targetDaily) * 100).toFixed(1)}%
                  </div>
                  <div className="text-sm text-muted-foreground">dari target</div>
                  <div className="mt-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-smooth"
                        style={{ width: `${Math.min(100, (currentEmissions / seedData.emissions.targetDaily) * 100)}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Regions Monitored */}
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Wilayah Dipantau
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {seedData.emissions.regionalData.length}
                  </div>
                  <div className="text-sm text-muted-foreground">wilayah aktif</div>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm text-primary">Data real-time</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Power Sources Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Sumber Energi Saat Ini</span>
                  <Badge variant="outline" className="animate-pulse-glow">Live</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
                  <div className="w-64 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={seedData.emissions.powerSources}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {seedData.emissions.powerSources.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-3">
                    {seedData.emissions.powerSources.map((source) => (
                      <div key={source.name} className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: source.color }}
                        />
                        <div className="text-sm">
                          <div className="font-medium">{source.name}</div>
                          <div className="text-muted-foreground">{source.value}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA for Full Dashboard */}
            <div className="text-center mt-8">
              <Link to="/programs/government">
                <Button variant="hero" size="lg">
                  <BarChart3 className="h-5 w-5" />
                  Lihat Dashboard Lengkap
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Berita & Update Terbaru
              </h2>
              <p className="text-xl text-muted-foreground">
                Tetap terinformasi tentang perkembangan dan inisiatif kami
              </p>
            </div>
            <Link to="/news">
              <Button variant="outline">
                Lihat Semua Berita
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seedData.news.slice(0, 4).map((article) => (
              <Link key={article.id} to={`/news/${article.id}`} className="block">
                <Card className="transition-smooth hover:shadow-card group cursor-pointer h-full flex flex-col">
                  {/* Article Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMzUgMTIwSDI2NVYxODBIMTM1VjEyMFoiIGZpbGw9IiNEMUQ1REIiLz4KPGV4dCB4PSIyMDAiIHk9IjE2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzZCNzI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0Ij5HYW1iYXIgQmVyaXRhPC90ZXh0Pgo8L3N2Zz4K';
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="default" className="shadow-sm">
                        {article.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="flex-grow pb-2">
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-smooth mb-2">
                      {article.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {article.excerpt}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(article.date).toLocaleDateString('id-ID')}</span>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
