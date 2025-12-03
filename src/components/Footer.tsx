import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-purple-900/30 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">VEL TOKEN</h3>
            <p className="text-cyan-400 mb-4">Let Intelligence Drive Wealth</p>
            <p className="text-slate-400 text-sm">
              AI-powered intelligent digital asset built on compliance and transparency.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-white font-semibold mb-4">Learn</h4>
            <div className="space-y-2 text-sm">
              <Link href="/technology" className="block text-slate-400 hover:text-white transition">
                Technology
              </Link>
              <Link href="/tokenomics" className="block text-slate-400 hover:text-white transition">
                Token Economics
              </Link>
              <Link href="/compliance" className="block text-slate-400 hover:text-white transition">
                Compliance
              </Link>
              <Link href="/roadmap" className="block text-slate-400 hover:text-white transition">
                Roadmap
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm">
              <Link href="/team" className="block text-slate-400 hover:text-white transition">
                Team
              </Link>
              <a href="#" className="block text-slate-400 hover:text-white transition">
                About Us
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition">
                Careers
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition">
                Contact
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-slate-400 hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition">
                Cookie Policy
              </a>
              <Link href="/compliance" className="block text-slate-400 hover:text-white transition">
                Regulatory Info
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col items-center gap-4 mb-8">
            <h4 className="text-white font-semibold">Connect With Us</h4>
            <div className="flex items-center gap-4">
              {/* Twitter/X */}
              <a
                href="https://twitter.com/veltoken"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 transition-all"
                aria-label="Follow us on Twitter"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/veltoken"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 transition-all"
                aria-label="Join our Telegram"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>



              {/* Medium */}
              <a
                href="https://medium.com/@veltoken"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 transition-all"
                aria-label="Read our blog on Medium"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/veltoken"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 transition-all"
                aria-label="Connect on LinkedIn"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>


            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          <div className="mb-4">
            <p className="font-semibold text-white">Velar Capital Group LLC</p>
            <p>Registered in New York, USA</p>
          </div>
          <p className="mb-2">© 2025 Velar Capital Group. All rights reserved.</p>
          <p className="text-xs">SEC Reg D Compliant · FinCEN MSB Registered</p>
        </div>
      </div>
    </footer>
  );
}
