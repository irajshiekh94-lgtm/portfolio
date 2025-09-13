import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import profileImage from '@assets/generated_images/Professional_designer_headshot_ec43f1f0.png';

//TODO: remove mock functionality
const mockInstagramPosts = [
  { id: 1, image: profileImage, views: '776K', type: 'video' },
  { id: 2, image: profileImage, views: '241M', type: 'video' },
  { id: 3, image: profileImage, views: '761K', type: 'video' },
  { id: 4, image: profileImage, views: '905K', type: 'video' },
  { id: 5, image: profileImage, views: '667K', type: 'video' }
];

export default function SocialSection() {
  const handleFollowClick = () => {
    console.log('Follow Instagram triggered');
    // TODO: Add Instagram follow functionality
  };

  const handlePostClick = (postId: number) => {
    console.log(`Instagram post ${postId} clicked`);
    // TODO: Add Instagram post view functionality
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

        {/* Instagram Posts Grid */}
        <div className="flex justify-center gap-4 overflow-x-auto pb-4">
          {mockInstagramPosts.map((post, index) => (
            <div 
              key={post.id}
              className="flex-shrink-0 w-64 aspect-[3/4] relative group cursor-pointer hover-elevate rounded-lg overflow-hidden"
              onClick={() => handlePostClick(post.id)}
              data-testid={`instagram-post-${post.id}`}
            >
              <img 
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Play button for videos */}
              {post.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              )}
              
              {/* Views counter */}
              <div className="absolute bottom-4 left-4 bg-black/50 rounded-full px-3 py-1 backdrop-blur-sm">
                <p className="text-white text-sm font-medium">
                  <span className="mr-1">▶</span>
                  {post.views}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
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