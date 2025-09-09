import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Filter } from 'lucide-react';
import seedData from '@/data/seedData.json';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  
  const categories = ['Semua', 'Update Kebijakan', 'Update Proyek', 'Inovasi', 'Investasi'];
  
  const filteredNews = selectedCategory === 'Semua' 
    ? seedData.news 
    : seedData.news.filter(article => article.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Berita & Update
        </h1>
        <p className="text-xl text-muted-foreground">
          Tetap terinformasi tentang kemajuan dan inisiatif energi bersih Indonesia
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Filter berdasarkan kategori:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((article) => (
          <Card key={article.id} className="transition-smooth hover:shadow-card group cursor-pointer">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline">
                  {article.category}
                </Badge>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(article.date).toLocaleDateString('id-ID')}</span>
                </div>
              </div>
              <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-smooth">
                {article.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {article.excerpt}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Tidak ada artikel yang ditemukan untuk kategori yang dipilih.</p>
        </div>
      )}
    </div>
  );
};

export default News;