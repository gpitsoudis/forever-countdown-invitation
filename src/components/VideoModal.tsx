import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl p-0 bg-black border-0">
        <div className="relative">
          <Button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white border-0"
            size="icon"
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="aspect-video">
            {/* Placeholder for video - you would replace this with your actual video */}
            <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-6xl mb-4">🎥</div>
                <h3 className="text-xl font-serif mb-2">Our Love Story</h3>
                <p className="text-gray-300">Video will be embedded here</p>
                <p className="text-sm text-gray-400 mt-4">
                  Replace this placeholder with your actual video embed code
                </p>
              </div>
            </div>
            
            {/* Example of how to embed a video:
            <iframe
              className="w-full h-full"
              src="YOUR_VIDEO_URL"
              title="Our Love Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;