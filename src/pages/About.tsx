import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          About Green Strategy for Clean Energy
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Indonesia's comprehensive government initiative driving the transition to sustainable energy 
          through strategic programs, innovative technologies, and community engagement.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-6 w-6 mr-2 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              To accelerate Indonesia's transition to sustainable clean energy by implementing 
              comprehensive monitoring systems, strategic government programs, and fostering 
              innovation in renewable energy technologies while ensuring economic growth and 
              environmental sustainability.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-6 w-6 mr-2 text-secondary" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              To position Indonesia as a global leader in clean energy adoption and innovation, 
              achieving carbon neutrality by 2060 while creating millions of green jobs and 
              establishing sustainable energy communities across the archipelago.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Key Objectives */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Key Objectives</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Carbon Emission Reduction",
              description: "Reduce national carbon emissions by 35% by 2030 through comprehensive monitoring and strategic interventions.",
              icon: Target,
              badge: "Environmental"
            },
            {
              title: "Renewable Energy Expansion", 
              description: "Increase renewable energy capacity to 50% of total energy mix through solar, wind, and hydroelectric projects.",
              icon: Award,
              badge: "Energy"
            },
            {
              title: "Green Job Creation",
              description: "Create 2 million green jobs across various sectors including renewable energy, research, and sustainable technologies.",
              icon: Users,
              badge: "Economic"
            },
            {
              title: "Innovation & Education",
              description: "Establish 100+ innovation hubs and train 50,000 professionals in clean energy technologies and sustainable practices.",
              icon: BookOpen,
              badge: "Innovation"
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
          <CardTitle>Legal Framework & Authority</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Regulatory Foundation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Presidential Regulation No. 22/2017 on National Energy General Plan</li>
                <li>• Law No. 30/2007 on Energy Management</li>
                <li>• Government Regulation No. 79/2014 on National Energy Policy</li>
                <li>• Presidential Regulation No. 112/2022 on Renewable Energy Acceleration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Implementation Partners</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Ministry of Energy and Mineral Resources</li>
                <li>• Ministry of Environment and Forestry</li>
                <li>• National Research and Innovation Agency (BRIN)</li>
                <li>• Regional Energy Development Agencies</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;