import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Filter, ArrowRight, User } from 'lucide-react';
import seedData from '@/data/seedData.json';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  
  const categories = ['Semua', 'PerDa Transisi Energi', 'Update Proyek', 'Inovasi', 'Program Pelatihan'];
  
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
          Tetap terinformasi tentang kemajuan dan inisiatif energi bersih Kota Karunia
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
          <Card key={article.id} className="transition-smooth hover:shadow-card group cursor-pointer h-full flex flex-col">
            <CardHeader className="flex-grow">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline">
                  {article.category}
                </Badge>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(article.date).toLocaleDateString('id-ID')}</span>
                </div>
              </div>
              <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-smooth mb-3">
                {article.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                {article.excerpt}
              </p>
              {article.author && (
                <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-4">
                  <User className="h-3 w-3" />
                  <span>{article.author}</span>
                </div>
              )}
            </CardHeader>
            <CardContent className="pt-0">
              <Link to={`/news/${article.id}`}>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  Baca Selengkapnya
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
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