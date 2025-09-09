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

  // Simulate real-time data updates
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
    return new Intl.NumberFormat('en-US').format(num);
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
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Green Strategy for Clean Energy
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Building a 
              <span className="block gradient-hero bg-clip-text text-transparent">
                Sustainable Future
              </span> 
              for Indonesia
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive government initiative driving Indonesia's transition to clean energy 
              through innovative monitoring systems, strategic programs, and community engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/programs/government">
                <Button variant="hero" size="xl">
                  <BarChart3 className="h-5 w-5" />
                  Explore Our Programs
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/programs/government">
                <Button variant="outline" size="xl">
                  View Live Dashboard
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
              Our Strategic Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Two comprehensive initiatives working together to achieve Indonesia's clean energy goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Government Program Card */}
            <Card className="relative overflow-hidden transition-smooth hover:shadow-card group">
              <div className="absolute top-0 right-0 w-32 h-32 gradient-primary opacity-10 rounded-full -translate-y-16 translate-x-16" />
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">Government Initiative</Badge>
                </div>
                <CardTitle className="text-2xl">Karunia Green Government</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {seedData.programs.government.description}
                </p>
                <div className="space-y-2 mb-6">
                  {seedData.programs.government.objectives.slice(0, 2).map((objective, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{objective}</p>
                    </div>
                  ))}
                </div>
                <Link to="/programs/government">
                  <Button variant="default" className="w-full group-hover:shadow-lg">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Innovation Hub Card */}
            <Card className="relative overflow-hidden transition-smooth hover:shadow-card group">
              <div className="absolute top-0 right-0 w-32 h-32 gradient-secondary opacity-10 rounded-full -translate-y-16 translate-x-16" />
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Lightbulb className="h-8 w-8 text-secondary" />
                  <Badge variant="outline" className="border-secondary text-secondary">Innovation Hub</Badge>
                </div>
                <CardTitle className="text-2xl">Karunia Green Innovation Hub</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {seedData.programs.innovation.description}
                </p>
                <div className="space-y-2 mb-6">
                  {seedData.programs.innovation.objectives.slice(0, 2).map((objective, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{objective}</p>
                    </div>
                  ))}
                </div>
                <Link to="/programs/innovation">
                  <Button variant="secondary" className="w-full group-hover:shadow-lg">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
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
              Real-Time Monitoring
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Live Carbon Emissions Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track Indonesia's carbon footprint in real-time with our advanced monitoring system
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Total Emissions KPI */}
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Daily Emissions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl font-bold text-foreground mb-2 ${isAnimating ? 'animate-pulse-glow' : ''}`}>
                    {formatNumber(currentEmissions)}
                  </div>
                  <div className="text-sm text-muted-foreground">tons CO₂</div>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <TrendingDown className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-500">-2.3% vs yesterday</span>
                  </div>
                </CardContent>
              </Card>

              {/* Target Progress */}
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Target vs Reality
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {((currentEmissions / seedData.emissions.targetDaily) * 100).toFixed(1)}%
                  </div>
                  <div className="text-sm text-muted-foreground">of target</div>
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
                    Regions Monitored
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {seedData.emissions.regionalData.length}
                  </div>
                  <div className="text-sm text-muted-foreground">active regions</div>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm text-primary">Real-time data</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Power Sources Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Current Power Sources</span>
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
                  View Full Dashboard
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
                Latest News & Updates
              </h2>
              <p className="text-xl text-muted-foreground">
                Stay informed about our progress and initiatives
              </p>
            </div>
            <Link to="/news">
              <Button variant="outline">
                View All News
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seedData.news.slice(0, 4).map((article) => (
              <Card key={article.id} className="transition-smooth hover:shadow-card group cursor-pointer">
                <CardHeader className="pb-2">
                  <Badge variant="outline" className="w-fit mb-2">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-smooth">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;