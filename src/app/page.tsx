"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundDecoration } from "@/components/BackgroundDecoration";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PerformanceDashboard } from "@/components/PerformanceDashboard";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative">
      <BackgroundDecoration />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto text-center">
          <AnimatedSection delay={0.1}>
            <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20 transition-colors">
              {t.hero.badge}
            </Badge>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent animate-fade-in px-4">
              {t.hero.title}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-3 md:mb-4 font-light px-4">
              {t.hero.subtitle}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-2xl sm:text-3xl md:text-4xl text-slate-300 mb-6 md:mb-8 font-bold px-4">
              {t.hero.tagline}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <p className="text-slate-400 max-w-3xl mx-auto mb-6 md:mb-8 text-base md:text-lg px-4 leading-relaxed">
              {t.hero.description}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="text-slate-400 space-y-1 md:space-y-2 mb-8 md:mb-12 px-4 text-sm md:text-base">
              <p>{t.hero.issuedBy} <span className="text-white font-semibold">{t.hero.issuer}</span></p>
              <p>{t.hero.registered} <span className="text-white font-semibold">{t.hero.location}</span></p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all rounded-full px-6 md:px-8 text-base md:text-lg font-semibold">
              {t.hero.downloadWhitepaper}
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <AnimatedSection delay={0.1}>
              <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:scale-105">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">85%</div>
                <div className="text-slate-400">{t.stats.aiAccuracy}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 hover:border-blue-500/40 transition-all hover:scale-105">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">$50M+</div>
                <div className="text-slate-400">{t.stats.aum}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">&lt;1ms</div>
                <div className="text-slate-400">{t.stats.latency}</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Live Performance Dashboard */}
      <section className="py-20 px-4 bg-slate-900/50 relative">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-4 text-center">{t.performance.title}</h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              {t.performance.description}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <PerformanceDashboard />
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-900/30 relative">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.features.title}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection delay={0.1}>
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <CardTitle className="text-cyan-400">{t.features.aiPowered.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  {t.features.aiPowered.description}
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <CardTitle className="text-cyan-400">{t.features.compliant.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  {t.features.compliant.description}
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <CardTitle className="text-cyan-400">{t.features.transparent.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  {t.features.transparent.description}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-4 text-center">{t.technology.title}</h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              {t.technology.description}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Card className="bg-gradient-to-br from-purple-900/20 to-slate-800/50 border-purple-700/30 hover:border-purple-500/50 transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-cyan-400 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {t.technology.fourEngines.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 text-sm space-y-2">
                  {t.technology.fourEngines.items.map((item, index) => (
                    <p key={index}>• {item}</p>
                  ))}
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Card className="bg-gradient-to-br from-cyan-900/20 to-slate-800/50 border-cyan-700/30 hover:border-cyan-500/50 transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-cyan-400 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {t.technology.aiRiskControl.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 text-sm space-y-2">
                  {t.technology.aiRiskControl.items.map((item, index) => (
                    <p key={index}>• {item}</p>
                  ))}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <Link href="/technology">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all rounded-full">
                  {t.technology.exploreTechnology}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-4 text-center">{t.tokenomics.title}</h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              {t.tokenomics.description}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 text-center hover:border-cyan-500/50 transition-all hover:scale-105 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <CardTitle className="text-cyan-400">{t.tokenomics.marketAppreciation.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 text-sm">
                  {t.tokenomics.marketAppreciation.description}
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 text-center hover:border-cyan-500/50 transition-all hover:scale-105 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-cyan-400">{t.tokenomics.quarterlyDividends.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 text-sm">
                  {t.tokenomics.quarterlyDividends.description}
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 text-center hover:border-cyan-500/50 transition-all hover:scale-105 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                  </div>
                  <CardTitle className="text-cyan-400">{t.tokenomics.deflationaryBurns.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 text-sm">
                  {t.tokenomics.deflationaryBurns.description}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <Link href="/tokenomics">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all rounded-full">
                  {t.tokenomics.viewFullTokenomics}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
        <div className="container mx-auto text-center relative">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              {t.cta.title}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/compliance">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all rounded-full px-8 font-semibold">
                  {t.cta.viewCompliance}
                </Button>
              </Link>
              <Link href="/technology">
                <Button size="lg" variant="outline" className="border-purple-600/50 text-purple-300 hover:bg-purple-600/10 hover:border-purple-500 transition-all rounded-full px-8 font-semibold backdrop-blur-sm">
                  {t.cta.exploreTechnology}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
