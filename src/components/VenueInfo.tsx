import { MapPin, Clock } from 'lucide-react';

const VenueInfo = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in">
      {/* Church Information */}
      <div className="bg-card rounded-lg p-8 elegant-shadow border border-border/50">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-champagne/20 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold text-primary">Ceremony</h3>
            <p className="text-muted-foreground">Where we say "I do"</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">St. Mary's Church</h4>
            <p className="text-muted-foreground leading-relaxed">
              123 Church Street<br />
              Downtown District<br />
              City, State 12345
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>5:00 PM - Ceremony begins</span>
          </div>
        </div>
      </div>

      {/* Reception Information */}
      <div className="bg-card rounded-lg p-8 elegant-shadow border border-border/50">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-champagne/20 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold text-primary">Reception</h3>
            <p className="text-muted-foreground">Let's celebrate together</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">The Grand Ballroom</h4>
            <p className="text-muted-foreground leading-relaxed">
              456 Celebration Avenue<br />
              Historic District<br />
              City, State 12345
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>7:00 PM - Reception starts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;