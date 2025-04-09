
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface VideosSectionProps {
  language: string;
}

interface Video {
  id: string;
  title: string;
  titleHindi: string;
  thumbnail: string;
  views: string;
}

const VideosSection = ({ language }: VideosSectionProps) => {
  const [activeVideo, setActiveVideo] = useState('B7z0gLQ_QDc');
  
  const videos: Video[] = [
    {
      id: 'B7z0gLQ_QDc',
      title: 'AADHA FUNNY | Stand-Up Comedy by Kunal Kamra',
      titleHindi: 'आधा फनी | कुणाल कामरा द्वारा स्टैंड-अप कॉमेडी',
      thumbnail: 'https://img.youtube.com/vi/B7z0gLQ_QDc/maxresdefault.jpg',
      views: '10M'
    },
    {
      id: 'iUZ3nUinaLE',
      title: 'CRITICAL OF SUCCESS | Stand-Up Comedy by Kunal Kamra',
      titleHindi: 'सफलता का आलोचक | कुणाल कामरा द्वारा स्टैंड-अप कॉमेडी',
      thumbnail: 'https://img.youtube.com/vi/iUZ3nUinaLE/maxresdefault.jpg',
      views: '8.5M'
    },
    {
      id: '1M6G4111a0s',
      title: 'Indian PARENTS and MARRIAGE | Stand-Up Comedy by Kunal Kamra',
      titleHindi: 'भारतीय माता-पिता और शादी | कुणाल कामरा द्वारा स्टैंड-अप कॉमेडी',
      thumbnail: 'https://img.youtube.com/vi/1M6G4111a0s/maxresdefault.jpg',
      views: '7.2M'
    },
    {
      id: 'eEnGFcfYgZM',
      title: 'Honest REVIEWS & AIRPORT Security | Stand-Up Comedy by Kunal Kamra',
      titleHindi: 'ईमानदार समीक्षा और हवाई अड्डे की सुरक्षा | कुणाल कामरा द्वारा स्टैंड-अप कॉमेडी',
      thumbnail: 'https://img.youtube.com/vi/eEnGFcfYgZM/maxresdefault.jpg',
      views: '6.8M'
    }
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollAmount = 320;

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('videos-container');
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    
    if (direction === 'left') {
      const newPosition = Math.max(0, scrollPosition - scrollAmount);
      setScrollPosition(newPosition);
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
    } else {
      const newPosition = Math.min(maxScroll, scrollPosition + scrollAmount);
      setScrollPosition(newPosition);
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="videos" className="py-20 bg-muted relative">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-44 w-96 h-96 bg-comedy-pink opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {language === 'en' ? 'Latest Videos' : 'नवीनतम वीडियो'}
          </h2>
          <p className="max-w-2xl mx-auto opacity-80">
            {language === 'en'
              ? "Watch Kunal's most popular comedy clips and full shows."
              : "कुणाल के सबसे लोकप्रिय कॉमेडी क्लिप और पूरे शो देखें।"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg">
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${activeVideo}`}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-heading text-xl md:text-2xl font-bold">
              {language === 'en' ? 'Popular Videos' : 'लोकप्रिय वीडियो'}
            </h3>
            
            <div className="relative">
              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full bg-background/80 backdrop-blur-sm border-none shadow-md hover:bg-background"
                  onClick={() => handleScroll('left')}
                  disabled={scrollPosition === 0}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full bg-background/80 backdrop-blur-sm border-none shadow-md hover:bg-background"
                  onClick={() => handleScroll('right')}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              
              <div 
                id="videos-container" 
                className="flex gap-4 overflow-x-auto scrollbar-none pb-4 px-1"
                style={{ scrollBehavior: 'smooth' }}
              >
                {videos.map((video) => (
                  <Card 
                    key={video.id} 
                    className={`flex-shrink-0 w-72 cursor-pointer card-hover transition-all duration-200 ${activeVideo === video.id ? 'ring-2 ring-comedy-orange' : ''}`}
                    onClick={() => setActiveVideo(video.id)}
                  >
                    <CardContent className="p-0 overflow-hidden">
                      <div className="relative aspect-video">
                        <img 
                          src={video.thumbnail} 
                          alt={language === 'en' ? video.title : video.titleHindi}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <div className="w-12 h-12 rounded-full bg-comedy-orange/90 flex items-center justify-center">
                            <div className="w-0 h-0 border-t-6 border-t-transparent border-l-10 border-l-white border-b-6 border-b-transparent ml-1"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.views} {language === 'en' ? 'views' : 'व्यूज'}
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium line-clamp-2 text-sm">
                          {language === 'en' ? video.title : video.titleHindi}
                        </h4>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="https://www.youtube.com/@KunalKamra" 
                target="_blank" 
                rel="noreferrer"
                className="text-comedy-orange hover:text-comedy-orange/80 font-medium flex items-center justify-center gap-1"
              >
                {language === 'en' ? 'View all videos on YouTube' : 'सभी वीडियो YouTube पर देखें'} →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-6 text-center">
            {language === 'en' ? 'Follow on Social Media' : 'सोशल मीडिया पर फॉलो करें'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl overflow-hidden shadow-md card-hover">
              <div className="p-4 border-b border-border flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full"></div>
                <div>
                  <p className="font-bold">@kunalkamra88</p>
                  <p className="text-xs text-muted-foreground">Instagram</p>
                </div>
              </div>
              <div className="aspect-square bg-muted">
                <img 
                  src="https://i.postimg.cc/BbsY3x9L/kunal-insta-post.jpg" 
                  alt="Kunal Kamra Instagram post" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm line-clamp-2">
                  {language === 'en' 
                    ? "Mumbai show was a blast! Coming to Delhi next week, book your tickets now!"
                    : "मुंबई शो शानदार रहा! अगले हफ्ते दिल्ली आ रहा हूं, अभी अपने टिकट बुक करें!"}
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md card-hover">
              <div className="p-4 border-b border-border flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                <div>
                  <p className="font-bold">@kunalkamra88</p>
                  <p className="text-xs text-muted-foreground">Twitter</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm">
                  {language === 'en' 
                    ? "Government: 'We're working hard to fix the economy.' Me: 'Yeah, and I'm working hard on my abs... by watching workout videos.'"
                    : "सरकार: 'हम अर्थव्यवस्था को ठीक करने के लिए कड़ी मेहनत कर रहे हैं।' मैं: 'हां, और मैं अपने एब्स पर कड़ी मेहनत कर रहा हूं... वर्कआउट वीडियो देखकर।'"}
                </p>
                <div className="mt-2 text-xs text-muted-foreground">
                  12:45 PM · Apr 15, 2025
                </div>
                <div className="mt-3 flex items-center gap-6 text-xs">
                  <span>12.5K {language === 'en' ? 'Likes' : 'लाइक्स'}</span>
                  <span>2.3K {language === 'en' ? 'Retweets' : 'रीट्वीट'}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md card-hover">
              <div className="p-4 border-b border-border flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                <div>
                  <p className="font-bold">Kunal Kamra</p>
                  <p className="text-xs text-muted-foreground">YouTube</p>
                </div>
              </div>
              <div className="aspect-video bg-muted">
                <img 
                  src="https://i.postimg.cc/fyW9FRpY/kunal-youtube.jpg" 
                  alt="Kunal Kamra YouTube thumbnail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium line-clamp-1">
                  {language === 'en' 
                    ? "NEW VIDEO: The Honest Politics Show - Episode 4"
                    : "नया वीडियो: द ऑनेस्ट पॉलिटिक्स शो - एपिसोड 4"}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  1.2M {language === 'en' ? 'views' : 'व्यूज'} · 3 {language === 'en' ? 'days ago' : 'दिन पहले'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
