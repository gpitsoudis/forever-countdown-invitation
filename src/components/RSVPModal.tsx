import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RSVPModal = ({ isOpen, onClose }: RSVPModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '1',
    dietary: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "RSVP Submitted",
      description: "Thank you for your response! We can't wait to celebrate with you.",
    });
    onClose();
    setFormData({
      name: '',
      email: '',
      attendance: '',
      guests: '1',
      dietary: '',
      message: '',
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-center text-primary">
            RSVP
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="border-border/50 focus:border-gold"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="border-border/50 focus:border-gold"
            />
          </div>

          <div className="space-y-3">
            <Label>Will you be attending? *</Label>
            <RadioGroup
              value={formData.attendance}
              onValueChange={(value) => setFormData({ ...formData, attendance: value })}
              required
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes, I'll be there!</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">Sorry, can't make it</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.attendance === 'yes' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests (including yourself)</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="4"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="border-border/50 focus:border-gold"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dietary">Dietary Restrictions</Label>
                <Input
                  id="dietary"
                  value={formData.dietary}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                  placeholder="e.g., vegetarian, allergies..."
                  className="border-border/50 focus:border-gold"
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="message">Special Message (Optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Share your excitement or well wishes..."
              className="border-border/50 focus:border-gold min-h-[80px]"
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-gold hover:bg-gold/90 text-gold-foreground">
              Send RSVP
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RSVPModal;