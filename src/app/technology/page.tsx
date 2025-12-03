"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundDecoration } from "@/components/BackgroundDecoration";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TechnologyPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative">
      <BackgroundDecoration />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20">
            {t.techPage.badge}
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t.techPage.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t.techPage.subtitle}
          </p>
        </div>
      </section>

      {/* Pinnacle Quant System */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 mb-12">
            <CardHeader>
              <CardTitle className="text-3xl text-white">{t.techPage.pinnacleTitle}</CardTitle>
              <CardDescription className="text-slate-400 text-lg">
                {t.techPage.pinnacleSubtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-6">
              <p className="text-lg">
                {t.techPage.pinnacleDescription}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-cyan-400 text-xl mb-4">Four Intelligent Engines</h3>
                  <div className="space-y-3">
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Trading Signal Decision System</h4>
                      <p className="text-sm text-slate-400">AI-powered pattern recognition and trend prediction using deep learning models</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Quantitative Trading System</h4>
                      <p className="text-sm text-slate-400">Multi-strategy execution with statistical arbitrage and factor-based models</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Investment Strategy Decision System</h4>
                      <p className="text-sm text-slate-400">Portfolio optimization through macro and micro market analysis</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Expert Investment Decision System</h4>
                      <p className="text-sm text-slate-400">Hybrid AI-human intelligence for strategic validation</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-cyan-400 text-xl mb-4">AI Risk Control</h3>
                  <div className="space-y-3">
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Real-time Market Monitoring</h4>
                      <p className="text-sm text-slate-400">24/7 surveillance across global markets with millisecond latency</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Self-learning Optimization</h4>
                      <p className="text-sm text-slate-400">Continuous model improvement through backtesting and live performance</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Multi-layer Risk Management</h4>
                      <p className="text-sm text-slate-400">Dynamic position sizing with automated stop-loss triggers</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Dynamic Position Adjustment</h4>
                      <p className="text-sm text-slate-400">Real-time rebalancing based on market volatility and risk metrics</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.techPage.systemArchTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">{t.techPage.dataLayer}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm space-y-2">
                <p>• Multi-source real-time data aggregation</p>
                <p>• Market sentiment analysis via NLP</p>
                <p>• On-chain activity monitoring</p>
                <p>• Structured & unstructured data processing</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">{t.techPage.modelLayer}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm space-y-2">
                <p>• XGBoost for feature extraction</p>
                <p>• LSTM for time-series prediction</p>
                <p>• Transformer models for pattern recognition</p>
                <p>• Multi-factor quantitative modeling</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">{t.techPage.executionLayer}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm space-y-2">
                <p>• Low-latency order execution</p>
                <p>• Adaptive slippage optimization</p>
                <p>• Smart order routing</p>
                <p>• Cost minimization algorithms</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Transparency */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.techPage.securityTitle}</h2>
          <Card className="bg-gradient-to-br from-cyan-900/20 to-slate-800/50 border-cyan-700/30">
            <CardContent className="p-8 text-slate-300 space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-cyan-400 text-xl mb-4">{t.techPage.securityMeasures}</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• AES-256 encryption for all data transmission</li>
                    <li>• Multi-signature cold wallet storage (80% cold / 20% hot)</li>
                    <li>• Zero-trust security architecture</li>
                    <li>• ISO 27001 certified infrastructure</li>
                    <li>• Regular third-party security audits</li>
                    <li>• Institutional-grade insurance coverage</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-cyan-400 text-xl mb-4">{t.techPage.transparency}</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• All transactions recorded on-chain</li>
                    <li>• Real-time performance dashboards</li>
                    <li>• Quarterly audit reports</li>
                    <li>• Open-source verification tools</li>
                    <li>• Independent validator network</li>
                    <li>• Public API for strategy backtesting</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.techPage.performanceTitle}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">85%</div>
                <div className="text-slate-400 text-sm">{t.techPage.trendPrediction}</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">&lt;1ms</div>
                <div className="text-slate-400 text-sm">{t.techPage.systemLatency}</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">1M+</div>
                <div className="text-slate-400 text-sm">{t.techPage.dataPointsPerSecond}</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-slate-400 text-sm">{t.techPage.systemUptime}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
