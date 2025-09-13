import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    console.log(`${field} updated:`, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Contact form submitted:', formData);
    
    // TODO: Implement actual form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'TikTok', href: '#', icon: '🎵' }
  ];

  return (
    <section 
      id="contact" 
      className="py-24 bg-background relative overflow-hidden"
      data-testid="contact-section"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-muted rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Left content */}
          <div className="flex-1">
            <h2 className="text-5xl lg:text-6xl font-light text-foreground mb-4">
              LET'S CHAT!
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-md">
              I'm available for new projects and collaborations
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-transparent border-0 border-b border-muted rounded-none px-0 py-4 text-lg focus-visible:ring-0 focus-visible:border-foreground"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-transparent border-0 border-b border-muted rounded-none px-0 py-4 text-lg focus-visible:ring-0 focus-visible:border-foreground"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-transparent border-0 border-b border-muted rounded-none px-0 py-4 text-lg resize-none min-h-[100px] focus-visible:ring-0 focus-visible:border-foreground"
                  data-testid="input-message"
                />
              </div>

              <div className="pt-8">
                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className="bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-3 rounded-full transition-all duration-300 hover-elevate"
                  data-testid="button-submit"
                >
                  {isSubmitting ? 'Sending...' : 'Send a request'}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground pt-4">
                by clicking the button, you accept the privacy policy
              </p>
            </form>
          </div>

          {/* Right content */}
          <div className="flex-1 lg:text-right">
            <div className="lg:ml-auto lg:max-w-md">
              <p className="text-muted-foreground mb-8">
                You can also find me here
              </p>

              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <div key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center gap-4 text-foreground hover:text-primary transition-colors duration-300 hover-elevate p-2 rounded-lg lg:justify-end"
                      data-testid={`social-link-${link.name.toLowerCase()}`}
                    >
                      <span className="text-2xl">{link.icon}</span>
                      <span className="font-medium">{link.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}