import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BarChart3, TrendingDown, TrendingUp, Users, Zap, Building2, Leaf, Activity, MapPin } from 'lucide-react';

const GovernmentProgram = () => {
  // State untuk animasi dan data real-time
  const [currentEmissions, setCurrentEmissions] = useState(1247800);
  const [renewablePercent, setRenewablePercent] = useState(18.2);
  const [reduction, setReduction] = useState(-2.3);
  const [isUpdating, setIsUpdating] = useState(false);

  // Simulasi update data real-time
  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      setTimeout(() => {
        setCurrentEmissions(prev => {
          const variation = Math.random() * 20000 - 10000;
          return Math.max(1000000, Math.floor(prev + variation));
        });
        setRenewablePercent(prev => {
          const variation = Math.random() * 0.5 - 0.25;
          return Math.max(15, Math.min(25, +(prev + variation).toFixed(1)));
        });
        setReduction(prev => {
          const variation = Math.random() * 1 - 0.5;
          return +((prev + variation).toFixed(1));
        });
        setIsUpdating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('id-ID').format(num);
  };

  // Data untuk districts/kecamatan
  const districtData = [
    { name: 'Kec. Harmoni Hijau', emissions: 85.2, renewable: 22.1, status: 'excellent' },
    { name: 'Kec. Energi Bersih', emissions: 72.8, renewable: 19.5, status: 'good' },
    { name: 'Kec. Masa Depan', emissions: 91.5, renewable: 16.3, status: 'warning' },
    { name: 'Kec. Berkelanjutan', emissions: 78.1, renewable: 20.8, status: 'good' },
    { name: 'Kec. Hijau Sentosa', emissions: 95.3, renewable: 14.7, status: 'critical' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-50';
      case 'good': return 'text-blue-600 bg-blue-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'critical': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
          Inisiatif Pemerintah
        </Badge>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Karunia Green Government
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Dashboard monitoring komprehensif real-time untuk emisi karbon Kota Karunia dan transisi energi bersih.
        </p>
      </div>

      {/* Dashboard Real-time */}
      <div className="space-y-6">
        {/* Real-time Status Indicator */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Dashboard Real-Time</h2>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isUpdating ? 'bg-yellow-500' : 'bg-green-500'} animate-pulse`} />
            <span className="text-sm text-muted-foreground">
              {isUpdating ? 'Memperbarui data...' : 'Data terkini'}
            </span>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className={`transition-all duration-500 ${isUpdating ? 'scale-105 shadow-lg' : ''}`}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <BarChart3 className="h-4 w-4 mr-2" />
                Total Emisi Harian
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatNumber(currentEmissions)}</div>
              <div className="text-xs text-muted-foreground">ton CO₂ hari ini</div>
            </CardContent>
          </Card>

          <Card className={`transition-all duration-500 ${isUpdating ? 'scale-105 shadow-lg' : ''}`}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                {reduction < 0 ? (
                  <TrendingDown className="h-4 w-4 mr-2 text-green-600" />
                ) : (
                  <TrendingUp className="h-4 w-4 mr-2 text-red-600" />
                )}
                Perubahan Emisi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${reduction < 0 ? 'text-green-600' : 'text-red-600'}`}>
                {reduction > 0 ? '+' : ''}{reduction}%
              </div>
              <div className="text-xs text-muted-foreground">dari kemarin</div>
            </CardContent>
          </Card>

          <Card className={`transition-all duration-500 ${isUpdating ? 'scale-105 shadow-lg' : ''}`}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                Energi Terbarukan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{renewablePercent}%</div>
              <div className="text-xs text-muted-foreground">dari total energi</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Building2 className="h-4 w-4 mr-2" />
                Kecamatan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <div className="text-xs text-muted-foreground">kecamatan dipantau</div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Charts */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Target Pengurangan Emisi 2025
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress Tahunan</span>
                  <span className="font-medium">67%</span>
                </div>
                <Progress value={67} className="h-3" />
                <p className="text-xs text-muted-foreground mt-1">Target: 30% pengurangan dari baseline 2020</p>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Energi Terbarukan</span>
                  <span className="font-medium">{renewablePercent}%</span>
                </div>
                <Progress value={renewablePercent * 4} className="h-3" />
                <p className="text-xs text-muted-foreground mt-1">Target: 25% pada akhir 2025</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Leaf className="h-5 w-5 mr-2" />
                Program Hijau Aktif
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">24</div>
                  <div className="text-xs text-muted-foreground">Proyek Solar</div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">8</div>
                  <div className="text-xs text-muted-foreground">Wind Farm</div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">156</div>
                  <div className="text-xs text-muted-foreground">EV Charging</div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">89</div>
                  <div className="text-xs text-muted-foreground">Green Building</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* District Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Performa Kecamatan Real-Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {districtData.map((district, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-smooth">
                  <div className="flex-1">
                    <h4 className="font-medium">{district.name}</h4>
                    <p className="text-sm text-muted-foreground">Emisi: {district.emissions}% dari target | Energi Terbarukan: {district.renewable}%</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <div className="text-sm font-medium">{district.renewable}%</div>
                      <div className="text-xs text-muted-foreground">EBT</div>
                    </div>
                    <Badge className={getStatusColor(district.status)}>
                      {district.status === 'excellent' && 'Sangat Baik'}
                      {district.status === 'good' && 'Baik'}
                      {district.status === 'warning' && 'Perhatian'}
                      {district.status === 'critical' && 'Kritis'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Live Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              Aktivitas Terkini
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Solar Panel Kec. Harmoni Hijau Online</p>
                  <p className="text-xs text-muted-foreground">Kapasitas 2.5 MW telah terhubung ke grid - 2 menit lalu</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">EV Charging Station Baru</p>
                  <p className="text-xs text-muted-foreground">5 unit charging station di Kec. Masa Depan mulai beroperasi - 15 menit lalu</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Audit Emisi Bulanan</p>
                  <p className="text-xs text-muted-foreground">Laporan emisi bulan ini menunjukkan penurunan 3.2% - 1 jam lalu</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GovernmentProgram;
