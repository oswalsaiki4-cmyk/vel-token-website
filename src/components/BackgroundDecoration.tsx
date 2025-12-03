export function BackgroundDecoration() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Main Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-slate-950 to-cyan-950"></div>

      {/* Animated gradient orbs - larger and more vibrant */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-gradient-to-br from-green-600/15 to-cyan-600/15 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>

      {/* Large curved decorative elements - Solana style */}
      <svg className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30" viewBox="0 0 800 800" fill="none">
        <path d="M800 0C800 441.828 441.828 800 0 800V0H800Z" fill="url(#gradient1)" />
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="800" y2="800" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="1" stopColor="#06B6D4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      <svg className="absolute bottom-0 left-0 w-[700px] h-[700px] opacity-20" viewBox="0 0 700 700" fill="none">
        <path d="M0 700C0 313.401 313.401 0 700 0V700H0Z" fill="url(#gradient2)" />
        <defs>
          <linearGradient id="gradient2" x1="700" y1="0" x2="0" y2="700" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981" stopOpacity="0.2" />
            <stop offset="1" stopColor="#06B6D4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </div>
  );
}
