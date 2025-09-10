import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft, Tag, Share2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import seedData from '@/data/seedData.json';

const NewsArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const article = seedData.news.find(article => article.id === parseInt(id || '0'));

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-foreground mb-4">Artikel Tidak Ditemukan</h1>
          <p className="text-muted-foreground mb-6">Artikel yang Anda cari tidak tersedia.</p>
          <Link to="/news">
            <Button variant="hero">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Berita
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Disalin!",
        description: "Link artikel telah disalin ke clipboard.",
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const relatedArticles = seedData.news
    .filter(news => news.id !== article.id && news.category === article.category)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Navigation */}
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/news')}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali ke Berita
        </Button>
      </div>

      {/* Main Article */}
      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Badge variant="default" className="text-sm">
              {article.category}
            </Badge>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            {article.excerpt}
          </p>

          {/* Share Button */}
          <div className="flex justify-end">
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Bagikan
            </Button>
          </div>
        </div>

        {/* Article Image */}
        <div className="mb-8">
          <div className="w-full h-64 lg:h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📰</div>
              <p className="text-muted-foreground">Gambar artikel akan ditampilkan di sini</p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-8">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-foreground leading-relaxed mb-6 text-justify">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-3">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Tag:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Article Footer */}
        <div className="border-t border-border pt-6 mb-8">
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              Dipublikasikan oleh <span className="font-medium">{article.author}</span>
            </div>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Bagikan Artikel
            </Button>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="border-t border-border pt-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Artikel Terkait</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Card key={relatedArticle.id} className="transition-smooth hover:shadow-card group cursor-pointer">
                  <Link to={`/news/${relatedArticle.id}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {relatedArticle.category}
                        </Badge>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(relatedArticle.date).toLocaleDateString('id-ID')}</span>
                        </div>
                      </div>
                      <CardTitle className="text-base line-clamp-2 group-hover:text-primary transition-smooth">
                        {relatedArticle.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default NewsArticle;
