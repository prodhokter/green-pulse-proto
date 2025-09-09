import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, TrendingDown, Users, Zap, Building2, Leaf } from 'lucide-react';

const GovernmentProgram = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
          Government Initiative
        </Badge>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Karunia Green Government
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Comprehensive real-time monitoring dashboard for Indonesia's carbon emissions and clean energy transition.
        </p>
      </div>

      {/* Dashboard placeholder - will be implemented in next iteration */}
      <div className="space-y-6">
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <BarChart3 className="h-4 w-4 mr-2" />
                Total Emissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247,800</div>
              <div className="text-xs text-muted-foreground">tons CO₂ today</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <TrendingDown className="h-4 w-4 mr-2" />
                Reduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">-2.3%</div>
              <div className="text-xs text-muted-foreground">vs yesterday</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                Renewable %
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">18.2%</div>
              <div className="text-xs text-muted-foreground">of total energy</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Building2 className="h-4 w-4 mr-2" />
                Regions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">34</div>
              <div className="text-xs text-muted-foreground">provinces monitored</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Real-Time Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 bg-muted/30 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive dashboard with charts and maps will be implemented here
                </p>
                <Badge variant="outline" className="mt-2">Coming Soon</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GovernmentProgram;