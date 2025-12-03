"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-lg border-b border-purple-900/30 z-50 shadow-lg shadow-purple-900/10">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-cyan-300 transition">
          VEL TOKEN
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 xl:gap-8 items-center text-sm">
          <Link href="/" className="text-slate-300 hover:text-purple-400 transition font-medium">
            {t.nav.home}
          </Link>
          <Link href="/technology" className="text-slate-300 hover:text-purple-400 transition font-medium">
            {t.nav.technology}
          </Link>
          <Link href="/tokenomics" className="text-slate-300 hover:text-purple-400 transition font-medium">
            {t.nav.tokenomics}
          </Link>
          <Link href="/compliance" className="text-slate-300 hover:text-purple-400 transition font-medium">
            {t.nav.compliance}
          </Link>
          <Link href="/team" className="text-slate-300 hover:text-purple-400 transition font-medium">
            {t.nav.team}
          </Link>
          <Link href="/roadmap" className="text-slate-300 hover:text-purple-400 transition font-medium">
            {t.nav.roadmap}
          </Link>
          <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
          <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg shadow-purple-500/30">
            {t.nav.getStarted}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 hover:bg-purple-900/20 rounded-lg transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-purple-900/30 animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-3">
            <Link
              href="/"
              className="text-slate-300 hover:text-purple-400 transition py-3 px-4 rounded-lg hover:bg-purple-900/10 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/technology"
              className="text-slate-300 hover:text-purple-400 transition py-3 px-4 rounded-lg hover:bg-purple-900/10 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.technology}
            </Link>
            <Link
              href="/tokenomics"
              className="text-slate-300 hover:text-purple-400 transition py-3 px-4 rounded-lg hover:bg-purple-900/10 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.tokenomics}
            </Link>
            <Link
              href="/compliance"
              className="text-slate-300 hover:text-purple-400 transition py-3 px-4 rounded-lg hover:bg-purple-900/10 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.compliance}
            </Link>
            <Link
              href="/team"
              className="text-slate-300 hover:text-purple-400 transition py-3 px-4 rounded-lg hover:bg-purple-900/10 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.team}
            </Link>
            <Link
              href="/roadmap"
              className="text-slate-300 hover:text-purple-400 transition py-3 px-4 rounded-lg hover:bg-purple-900/10 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.roadmap}
            </Link>
            <div className="pt-2">
              <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
            </div>
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-full rounded-full shadow-lg shadow-purple-500/30 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.getStarted}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
