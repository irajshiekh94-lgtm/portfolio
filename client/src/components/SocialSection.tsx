import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import profileImage from '@assets/Snapchat-570485137_1757800212972.jpg';


export default function SocialSection() {
  const handleFollowClick = () => {
    console.log('Follow Instagram triggered');
    // TODO: Add Instagram follow functionality
  };


  return (
    <section 
      id="about" 
      className="py-24 bg-background"
      data-testid="social-section"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl lg:text-7xl font-extralight text-foreground mb-8 leading-[0.9] tracking-tight">
            FIND ME ON<br />
            INSTAGRAM
          </h2>

          {/* Profile Card */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4 bg-card rounded-full px-6 py-4 shadow-lg border">
              <Avatar className="h-12 w-12 ring-2 ring-primary">
                <AvatarImage src={profileImage} alt="iraj_designer" />
                <AvatarFallback>IR</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="font-medium text-foreground">iraj_designer</p>
                <p className="text-sm text-muted-foreground">+100k community</p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleFollowClick}
                className="ml-4 hover-elevate"
                data-testid="follow-button"
              >
                Follow me
                <span className="ml-2">+</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Follow for design insights, process breakdowns, and creative inspiration
          </p>
        </div>
      </div>
    </section>
  );
}