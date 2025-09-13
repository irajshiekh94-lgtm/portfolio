import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="h-96 bg-background relative">
      <Navigation activeSection="hero" onNavigate={(section) => console.log(`Navigating to ${section}`)} />
      <div className="p-8">
        <p className="text-muted-foreground">Scroll to see navigation backdrop effect</p>
      </div>
    </div>
  );
}