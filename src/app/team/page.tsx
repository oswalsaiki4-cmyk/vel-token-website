"use client";

import { Navigation } from "@/components/Navigation";
import { BackgroundDecoration } from "@/components/BackgroundDecoration";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TeamPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative">
      <BackgroundDecoration />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20">
            {t.teamPage.badge}
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t.teamPage.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t.teamPage.subtitle}
          </p>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.teamPage.leadershipTeam}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Julio Contreras</CardTitle>
                <CardDescription className="text-cyan-400 text-lg">Founder & Chief Executive Officer</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-3 text-sm">
                <p>
                  Julio brings over 15 years of experience at the intersection of finance and technology.
                  Prior to founding Velar Capital Group, he held senior positions at Goldman Sachs and
                  Morgan Stanley, where he specialized in multi-asset portfolio management and quantitative trading strategies.
                </p>
                <p className="text-slate-400">
                  <strong className="text-white">{t.teamPage.expertise}</strong> Asset Management, Quantitative Finance, Regulatory Compliance
                </p>
                <p className="text-slate-400">
                  <strong className="text-white">{t.teamPage.education}</strong> MBA - Wharton School of Business
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Dr. Christian Louis Hamadou</CardTitle>
                <CardDescription className="text-cyan-400 text-lg">Chief Quantitative Scientist</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-3 text-sm">
                <p>
                  Dr. Hamadou holds a PhD in Financial Engineering from Stanford University.
                  He previously led quantitative research at Bloomberg, developing cutting-edge algorithms
                  for predictive modeling and risk assessment across global markets.
                </p>
                <p className="text-slate-400">
                  <strong className="text-white">{t.teamPage.expertise}</strong> Machine Learning, Quantitative Modeling, Statistical Arbitrage
                </p>
                <p className="text-slate-400">
                  <strong className="text-white">{t.teamPage.education}</strong> PhD Financial Engineering - Stanford University
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Sophia Reynolds</CardTitle>
                <CardDescription className="text-cyan-400 text-lg">Chief Technology Officer</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-3 text-sm">
                <p>
                  Sophia is a veteran technologist with deep expertise in AI and distributed systems.
                  She was previously a senior engineer at Google AI and IBM Watson Research,
                  where she architected large-scale machine learning platforms.
                </p>
                <p className="text-slate-400">
                  <strong className="text-white">{t.teamPage.expertise}</strong> Artificial Intelligence, Distributed Systems, Blockchain Architecture
                </p>
                <p className="text-slate-400">
                  <strong className="text-white">{t.teamPage.education}</strong> MS Computer Science - Carnegie Mellon University
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">James Everett</CardTitle>
                <CardDescription className="text-cyan-400 text-lg">Chief Compliance Officer</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-3 text-sm">
                <p>
                  James is a Chartered Financial Analyst (CFA) and licensed attorney with extensive
                  experience in securities law. He spent over a decade at the U.S. Securities and
                  Exchange Commission (SEC) in the Division of Enforcement and Compliance.
                </p>
                <p className="text-slate-400">
                  <strong className="text-white">{t.teamPage.expertise}</strong> Securities Regulation, AML/KYC, Corporate Governance
                </p>
                <p className="text-slate-400">
                  <strong className="text-white">{t.teamPage.education}</strong> JD - Boston College Law School, CFA
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.teamPage.advisoryBoard}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <CardTitle className="text-white">Michael Turner</CardTitle>
                <CardDescription className="text-cyan-400">Risk Management Advisor</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm">
                <p>Former Head of Global Risk at J.P. Morgan with 20+ years in financial risk and capital assessment</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <CardTitle className="text-white">Dr. Aisha Grant</CardTitle>
                <CardDescription className="text-cyan-400">AI Technology Advisor</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm">
                <p>MIT PhD in Computer Science, specialist in explainable AI and federated learning systems</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <CardTitle className="text-white">Jonathan Kim</CardTitle>
                <CardDescription className="text-cyan-400">Legal Advisor</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm">
                <p>Partner at international law firm, expert in U.S. securities and cross-border digital asset regulations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.teamPage.culture}</h2>
          <Card className="bg-gradient-to-br from-purple-900/20 to-slate-800/50 border-purple-700/30">
            <CardContent className="p-8 text-slate-300 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">{t.teamPage.scienceDriven}</h3>
                <p className="text-sm">
                  {t.teamPage.scienceDrivenDesc}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">{t.teamPage.complianceFirst}</h3>
                <p className="text-sm">
                  {t.teamPage.complianceFirstDesc}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">{t.teamPage.longTermFocus}</h3>
                <p className="text-sm">
                  {t.teamPage.longTermFocusDesc}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">{t.teamPage.continuousInnovation}</h3>
                <p className="text-sm">
                  {t.teamPage.continuousInnovationDesc}
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
