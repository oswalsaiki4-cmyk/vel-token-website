"use client";

import { Navigation } from "@/components/Navigation";
import { BackgroundDecoration } from "@/components/BackgroundDecoration";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TokenAllocationChart } from "@/components/TokenAllocationChart";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TokenomicsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative">
      <BackgroundDecoration />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            {t.tokenPage.badge}
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t.tokenPage.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t.tokenPage.subtitle}
          </p>
        </div>
      </section>

      {/* Token Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-cyan-900/20 to-slate-800/50 border-cyan-700/30">
              <CardHeader>
                <CardTitle className="text-white text-2xl">{t.tokenPage.tokenDetailsTitle}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <div className="flex justify-between py-2 border-b border-slate-700">
                  <span className="text-slate-400">{t.tokenPage.tokenName}</span>
                  <span className="font-semibold text-white">VEL TOKEN</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-700">
                  <span className="text-slate-400">{t.tokenPage.totalSupply}</span>
                  <span className="font-semibold text-cyan-400">1,000,000,000 VEL</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-700">
                  <span className="text-slate-400">{t.tokenPage.initialPrice}</span>
                  <span className="font-semibold text-white">0.10 USDT</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-700">
                  <span className="text-slate-400">{t.tokenPage.issuanceMethod}</span>
                  <span className="font-semibold text-white">SEC Reg D Private Placement</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">{t.tokenPage.blockchain}</span>
                  <span className="font-semibold text-white">Ethereum (ERC-20)</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">{t.tokenPage.distributionTitle}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-3">
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm">Private Sale</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-slate-700 rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                    <span className="font-semibold w-12 text-right">20%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm">Team & Advisors</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-slate-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                    <span className="font-semibold w-12 text-right">15%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm">Liquidity Pool</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-slate-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                    <span className="font-semibold w-12 text-right">15%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm">Ecosystem Development</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-slate-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                    <span className="font-semibold w-12 text-right">25%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm">Community Rewards</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-slate-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                    <span className="font-semibold w-12 text-right">20%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm">Reserve Fund</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-slate-700 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: '5%'}}></div>
                    </div>
                    <span className="font-semibold w-12 text-right">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Allocation Chart */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-5xl">
          <TokenAllocationChart />
        </div>
      </section>

      {/* Vesting Schedule */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.tokenPage.vestingTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">{t.tokenPage.privateSale}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm space-y-2">
                <p><strong>{t.tokenPage.lockup}</strong> 12 months</p>
                <p><strong>{t.tokenPage.vesting}</strong> Linear release over 12 months</p>
                <p><strong>{t.tokenPage.cliff}</strong> No cliff period</p>
                <p className="text-xs text-slate-500 pt-2">Designed to ensure long-term holder alignment</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">{t.tokenPage.teamAdvisors}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm space-y-2">
                <p><strong>{t.tokenPage.lockup}</strong> 24 months</p>
                <p><strong>{t.tokenPage.vesting}</strong> 4% monthly release</p>
                <p><strong>{t.tokenPage.cliff}</strong> 6 months</p>
                <p className="text-xs text-slate-500 pt-2">Extended lockup demonstrates team commitment</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">{t.tokenPage.advisors}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm space-y-2">
                <p><strong>{t.tokenPage.lockup}</strong> 18 months</p>
                <p><strong>{t.tokenPage.vesting}</strong> Quarterly release</p>
                <p><strong>{t.tokenPage.cliff}</strong> 3 months</p>
                <p className="text-xs text-slate-500 pt-2">Balanced vesting for advisor contributions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.tokenPage.revenueTitle}</h2>
          <Card className="bg-gradient-to-br from-cyan-900/20 to-slate-800/50 border-cyan-700/30 max-w-5xl mx-auto">
            <CardContent className="p-8">
              <p className="text-slate-300 mb-6 text-lg">
                {t.tokenPage.revenueDescription}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="font-semibold text-cyan-400 text-xl mb-3">Market Appreciation</h4>
                  <p className="text-sm text-slate-400 mb-3">Capital gains from token price growth driven by:</p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>• AI trading performance</li>
                    <li>• Ecosystem expansion</li>
                    <li>• Increased adoption</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="font-semibold text-cyan-400 text-xl mb-3">Quarterly Dividends</h4>
                  <p className="text-sm text-slate-400 mb-3">Profit sharing distributed based on:</p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>• Holding ratio</li>
                    <li>• Lock-in duration</li>
                    <li>• Staking participation</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="font-semibold text-cyan-400 text-xl mb-3">Governance Rewards</h4>
                  <p className="text-sm text-slate-400 mb-3">Incentives for active participation:</p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>• Voting on proposals</li>
                    <li>• Community contributions</li>
                    <li>• Network validation</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700 text-center">
                <p className="text-sm text-slate-400">
                  <strong className="text-white">Deflationary Mechanism:</strong> Token buyback and burn program maintains long-term value appreciation
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Burn Mechanism */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.tokenPage.burnTitle}</h2>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-2xl">{t.tokenPage.burnSubtitle}</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
                {t.tokenPage.burnDescription}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">{t.tokenPage.quarterlyBuybacks}</h4>
                  <p className="text-sm text-slate-400">
                    Up to 10% of quarterly profits allocated for token repurchase from the open market
                  </p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">{t.tokenPage.transparentBurns}</h4>
                  <p className="text-sm text-slate-400">
                    All burned tokens verifiable on-chain with public burn wallet addresses
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-slate-400">
                  <strong className="text-white">{t.tokenPage.targetReduction}</strong> Reduce total supply by 30% over 5 years, enhancing scarcity and long-term value
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
