import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Calendar, MapPin, Play } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import VenueInfo from '@/components/VenueInfo';
import RSVPModal from '@/components/RSVPModal';
import VideoModal from '@/components/VideoModal';
import sunsetBackground from '@/assets/wedding-sunset-bg.jpg';

const Index = () => {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center px-4 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${sunsetBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center glow-shadow">
              <Heart className="w-8 h-8 text-gold" />
            </div>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-primary mb-6 leading-tight">
            Sarah & Michael
          </h1>
          
          <div className="w-24 h-0.5 bg-gold mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            are getting married
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-lg md:text-xl text-primary mb-12">
            <Calendar className="w-5 h-5 text-gold" />
            <span className="font-serif">September 27th, 2025</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="elegant" 
              size="lg"
              onClick={() => setIsRSVPOpen(true)}
              className="px-8 py-3 text-lg"
            >
              <Heart className="w-5 h-5 mr-2" />
              RSVP
            </Button>
            
            <Button 
              variant="gold" 
              size="lg"
              onClick={() => setIsVideoOpen(true)}
              className="px-8 py-3 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </Button>
          </div>

          <CountdownTimer />
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-4">
              Join Us
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We can't wait to celebrate this special moment with our family and friends. 
              Here are the details for our big day.
            </p>
          </div>
          
          <VenueInfo />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-champagne/10 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-gold" />
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            We are so grateful to have you in our lives and can't wait to celebrate with you!
          </p>
          <p className="text-sm text-muted-foreground font-serif">
            Sarah & Michael • September 27th, 2025
          </p>
        </div>
      </footer>

      {/* Modals */}
      <RSVPModal isOpen={isRSVPOpen} onClose={() => setIsRSVPOpen(false)} />
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </div>
  );
};

export default Index;
