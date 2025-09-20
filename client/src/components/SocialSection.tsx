import { Button } from '@/components/ui/button';
// Removed Avatar imports since they weren’t used
import selfie from "../assets/selfie.jpg"; // ✅ make sure file name matches exactly

export default function SocialSection() {
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
           
          </h2>

          {/* Profile Card */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <img
              src={selfie}
              alt="Iraj"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-black object-cover shadow-lg"
            />

            <div className="text-left">
              <p className="font-medium text-foreground">ira_.designs</p>
              <p className="text-sm text-muted-foreground">+Building a community</p>
            </div>

            {/* Instagram button */}
            <a
              href="https://instagram.com/ira_.designs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="ml-4 hover-elevate"
                data-testid="follow-button"
              >
                Instagram
                <span className="ml-2">+</span>
              </Button>
            </a>
          </div>
        </div>

       

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
           Building a community of designers, to learn from other designers all around the world and collaborate with them.</p>
         
         
        </div>
      </div>
    </section>
  );
}
