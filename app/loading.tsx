export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="space-y-4 text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-primary/40 rounded-full animate-spin mx-auto" style={{ animationDuration: '1.5s' }}></div>
        </div>
        <p className="text-muted-foreground font-medium">Loading...</p>
      </div>
    </div>
  );
}
