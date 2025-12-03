"use client";

import { Navigation } from "@/components/Navigation";
import { BackgroundDecoration } from "@/components/BackgroundDecoration";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CompliancePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative">
      <BackgroundDecoration />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-green-500/10 text-green-400 border-green-500/20">
            {t.compPage.badge}
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t.compPage.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t.compPage.subtitle}
          </p>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.compPage.regulatoryFramework}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-green-900/20 to-slate-800/50 border-green-700/30">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{t.compPage.secRegD}</CardTitle>
                <CardDescription className="text-slate-400">{t.compPage.secRegDSubtitle}</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p className="font-semibold text-green-400">{t.compPage.rule506c}</p>
                <p className="text-sm">
                  {t.compPage.secDescription}
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Verification of all investor accreditation status</li>
                  <li>• Full disclosure of material information</li>
                  <li>• Federal securities law compliance</li>
                  <li>• Exemption from public offering requirements</li>
                  <li>• State securities law preemption (Blue Sky)</li>
                </ul>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-xs text-slate-400">
                    Filing: Form D filed with the U.S. Securities and Exchange Commission
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-slate-800/50 border-blue-700/30">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{t.compPage.fincenMSB}</CardTitle>
                <CardDescription className="text-slate-400">{t.compPage.fincenSubtitle}</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p className="font-semibold text-blue-400">{t.compPage.fincenCompleted}</p>
                <p className="text-sm">
                  {t.compPage.fincenDescription}
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Digital asset issuance and custody</li>
                  <li>• Payment processing services</li>
                  <li>• Cross-border fund transfers</li>
                  <li>• Anti-Money Laundering (AML) compliance</li>
                  <li>• Know Your Customer (KYC) procedures</li>
                </ul>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-xs text-slate-400">
                    Registration: FinCEN MSB Registration Number on file
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.compPage.issuingEntity}</h2>
          <Card className="bg-slate-800/50 border-slate-700 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Velar Capital Group LLC</CardTitle>
              <CardDescription className="text-slate-400">Registered Financial Technology Company</CardDescription>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-cyan-400 mb-3">{t.compPage.companyDetails}</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-slate-500">{t.compPage.legalName}</span> Velar Capital Group LLC</p>
                    <p><span className="text-slate-500">{t.compPage.jurisdiction}</span> New York, United States</p>
                    <p><span className="text-slate-500">{t.compPage.formationDate}</span> July 9, 2021</p>
                    <p><span className="text-slate-500">{t.compPage.businessType}</span> Financial Technology</p>
                    <p><span className="text-slate-500">{t.compPage.ceo}</span> Julio Contreras</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-cyan-400 mb-3">{t.compPage.licenses}</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-slate-500">SEC:</span> Regulation D Filer</p>
                    <p><span className="text-slate-500">FinCEN:</span> MSB Registered</p>
                    <p><span className="text-slate-500">NY State:</span> Business Entity Registered</p>
                    <p><span className="text-slate-500">Insurance:</span> Institutional Coverage Active</p>
                    <p><span className="text-slate-500">Audit:</span> Big 4 Accounting Firm</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Audit & Oversight */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.compPage.auditOversight}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">{t.compPage.internalControls}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm space-y-3">
                <div>
                  <p className="font-semibold mb-1">Compliance Committee</p>
                  <p className="text-xs text-slate-400">Quarterly legal and risk reviews</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Technical Audit Center</p>
                  <p className="text-xs text-slate-400">Smart contract security monitoring</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Risk Management Dept.</p>
                  <p className="text-xs text-slate-400">Quantitative risk assessment</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">{t.compPage.externalAudits}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm space-y-3">
                <div>
                  <p className="font-semibold mb-1">Financial Audit</p>
                  <p className="text-xs text-slate-400">Annual audit by Big 4 firm</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Legal Review</p>
                  <p className="text-xs text-slate-400">Securities and tax compliance</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Insurance Assessment</p>
                  <p className="text-xs text-slate-400">Coverage verification and updates</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">{t.compPage.blockchainVerification}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm space-y-3">
                <div>
                  <p className="font-semibold mb-1">On-Chain Records</p>
                  <p className="text-xs text-slate-400">All issuance and distributions logged</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Independent Nodes</p>
                  <p className="text-xs text-slate-400">Third-party validation network</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Public Verification</p>
                  <p className="text-xs text-slate-400">Transparent and immutable records</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investor Protection */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.compPage.investorProtection}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">{t.compPage.assetSecurity}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-3 text-sm">
                <p><strong>Custody:</strong> Independent third-party custody with segregated accounts</p>
                <p><strong>Cold Storage:</strong> 80% of assets in offline multi-signature wallets</p>
                <p><strong>Insurance:</strong> Institutional-grade coverage for digital assets</p>
                <p><strong>Operational Separation:</strong> Trading and custody funds kept separate</p>
                <p><strong>Emergency Protocols:</strong> Automated circuit breakers and recovery procedures</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">{t.compPage.kycAML}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-3 text-sm">
                <p><strong>Identity Verification:</strong> Multi-factor authentication and documentation</p>
                <p><strong>Accreditation Check:</strong> Income and net worth verification for all investors</p>
                <p><strong>Source of Funds:</strong> Anti-money laundering screening</p>
                <p><strong>Ongoing Monitoring:</strong> Transaction surveillance and risk scoring</p>
                <p><strong>Sanctions Screening:</strong> OFAC and international watchlist checks</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Disclaimers */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-amber-950/20 border-amber-900/30">
            <CardHeader>
              <CardTitle className="text-white text-2xl">{t.compPage.legalInfo}</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-amber-400 mb-2">{t.compPage.accreditedOnly}</h4>
                <p>
                  VEL Tokens are offered exclusively to accredited investors as defined under Rule 501 of Regulation D. Investors must meet specific income or net worth requirements and provide verification.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-400 mb-2">{t.compPage.noPublicOffering}</h4>
                <p>
                  This is a private placement exempt from registration under the Securities Act of 1933. Tokens have not been registered with the SEC and carry resale restrictions under Rule 144.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-400 mb-2">{t.compPage.jurisdictionalRestrictions}</h4>
                <p>
                  VEL Tokens are not available to residents of certain jurisdictions. Prospective investors must consult local counsel regarding the legality of participation in their jurisdiction.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-700">
                <p className="text-xs text-slate-500">
                  This page is for informational purposes only and does not constitute an offer to sell or solicitation of an offer to buy VEL Tokens. Any offers or sales will be made only through official offering documents.
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
