import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    console.log('Theme toggle triggered');
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-6 left-6 z-50 hover-elevate"
      data-testid="theme-toggle"
    >
      <span className="text-lg">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
    </Button>
  );
}