"use client";

import { Navigation } from "@/components/Navigation";
import { BackgroundDecoration } from "@/components/BackgroundDecoration";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RoadmapPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative">
      <BackgroundDecoration />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
            {t.roadPage.badge}
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t.roadPage.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t.roadPage.subtitle}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8">
            {/* Phase 1 */}
            <Card className="bg-slate-800/50 border-slate-700 border-l-4 border-l-cyan-500">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-cyan-600">2021-2023</Badge>
                  <Badge variant="outline" className="text-green-400 border-green-400">{t.roadPage.completed}</Badge>
                </div>
                <CardTitle className="text-white text-2xl">{t.roadPage.phase1}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-3 text-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-cyan-400 mb-2">Company Formation</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li>✓ Velar Capital Group LLC established</li>
                      <li>✓ New York state registration completed</li>
                      <li>✓ Core team assembled</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-400 mb-2">Technology Development</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li>✓ AI Quant System architecture designed</li>
                      <li>✓ Machine learning models developed</li>
                      <li>✓ Backtesting infrastructure built</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-400 mb-2">Regulatory Compliance</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li>✓ SEC Reg D filing completed</li>
                      <li>✓ FinCEN MSB registration achieved</li>
                      <li>✓ Legal framework established</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-400 mb-2">Research & Analysis</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li>✓ Market research conducted</li>
                      <li>✓ Token economics designed</li>
                      <li>✓ Whitepaper published</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 2 */}
            <Card className="bg-slate-800/50 border-slate-700 border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-purple-600">2024-2025</Badge>
                  <Badge variant="outline" className="text-yellow-400 border-yellow-400">{t.roadPage.inProgress}</Badge>
                </div>
                <CardTitle className="text-white text-2xl">{t.roadPage.phase2}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-3 text-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-purple-400 mb-2">System Deployment</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li>✓ Pinnacle Quant System live</li>
                      <li>✓ Multi-layer risk controls active</li>
                      <li>⏳ Performance optimization ongoing</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-400 mb-2">Token Launch</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li>✓ Private sale to accredited investors</li>
                      <li>⏳ Trading platform integration</li>
                      <li>⏳ Liquidity pool establishment</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-400 mb-2">Global Expansion</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li>✓ New York headquarters operational</li>
                      <li>⏳ Singapore office opening Q2 2025</li>
                      <li>⏳ London node planned Q4 2025</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-400 mb-2">Ecosystem Development</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li>⏳ Smart wallet launch</li>
                      <li>⏳ Staking platform beta</li>
                      <li>⏳ Community governance portal</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 3 */}
            <Card className="bg-slate-800/50 border-slate-700 border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-600">2026-2027</Badge>
                  <Badge variant="outline" className="text-slate-400 border-slate-400">{t.roadPage.planned}</Badge>
                </div>
                <CardTitle className="text-white text-2xl">{t.roadPage.phase3}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-3 text-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-blue-400 mb-2">Product Diversification</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li>□ Multi-asset portfolio products</li>
                      <li>□ AI-powered robo-advisor</li>
                      <li>□ Institutional custody services</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-400 mb-2">Strategic Partnerships</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li>□ Major exchange listings</li>
                      <li>□ Banking partnerships</li>
                      <li>□ Institutional fund collaborations</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-400 mb-2">Geographic Expansion</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li>□ European market entry</li>
                      <li>□ Asian operations expansion</li>
                      <li>□ MENA region exploration</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-400 mb-2">Technology Enhancement</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li>□ Advanced AI models (GPT integration)</li>
                      <li>□ Cross-chain interoperability</li>
                      <li>□ Real-time sentiment analysis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 4 */}
            <Card className="bg-slate-800/50 border-slate-700 border-l-4 border-l-indigo-500">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-indigo-600">2028+</Badge>
                  <Badge variant="outline" className="text-slate-400 border-slate-400">{t.roadPage.vision}</Badge>
                </div>
                <CardTitle className="text-white text-2xl">{t.roadPage.phase4}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-3 text-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-indigo-400 mb-2">Market Leadership</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li>□ VEL as global AI asset standard</li>
                      <li>□ Top 10 digital asset by market cap</li>
                      <li>□ Industry-recognized benchmark</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-indigo-400 mb-2">Financial Products</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li>□ AI-based insurance products</li>
                      <li>□ Decentralized credit systems</li>
                      <li>□ Algorithmic hedge funds</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-indigo-400 mb-2">Infrastructure</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li>□ Cross-chain settlement network</li>
                      <li>□ TradFi integration layer</li>
                      <li>□ Global liquidity protocol</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-indigo-400 mb-2">Impact</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li>□ Democratize AI-powered wealth management</li>
                      <li>□ Bridge TradFi and DeFi ecosystems</li>
                      <li>□ Set industry compliance standards</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.roadPage.keyMilestones}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">2021</div>
                <div className="text-slate-400 text-sm">{t.roadPage.companyFounded}</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">2023</div>
                <div className="text-slate-400 text-sm">{t.roadPage.regulatoryApproval}</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">2025</div>
                <div className="text-slate-400 text-sm">{t.roadPage.tokenLaunch}</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-indigo-400 mb-2">2028+</div>
                <div className="text-slate-400 text-sm">{t.roadPage.globalStandard}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
