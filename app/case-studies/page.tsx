"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { AnimatedSection } from "@/app/components/animated/AnimatedSection";
import { AnimatedCard } from "@/app/components/animated/AnimatedCard";
import { NumberCounter } from "@/app/components/animated/NumberCounter";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/app/lib/animations/variants";
import Link from "next/link";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      slug: "major-telecom-cpa-optimization",
      client: "Major Telecommunications Company",
      industry: "Telecommunications",
      challenge: "Facing high cost per acquisition across biddable channels with 12+ competing campaigns causing cannibalization and increased costs. Unable to meet Q4 acquisition benchmarks while stuck in #3 market position behind aggressive competitors.",
      solution: "Strategic campaign consolidation from 12+ campaigns to 6 streamlined always-on campaigns, eliminating internal competition. Comprehensive paid media optimization across all biddable channels with advanced audience segmentation and bid strategy refinement. Doubled retention rate and drove 20% YoY increase in client satisfaction.",
      results: [
        { label: "Cost Per Acquisition", value: 200, suffix: "%" },
        { label: "Campaign Efficiency", value: 50, suffix: "%" },
        { label: "Market Position", value: 3, prefix: "#", suffix: " → #2" },
        { label: "Q4 Performance", prefix: "#1 ", value: "Q4 performance", suffix: " within past decade" }
      ],
      services: ["Paid Media Optimization", "Performance Marketing"],
      testimonial: "",
      author: ""
    },
    {
      slug: "growthco-retail-automation",
      client: "GrowthCo Retail",
      industry: "E-commerce",
      challenge: "Manual order processing causing delays and errors",
      solution: "Custom automation workflow connecting Shopify, inventory management, and shipping",
      results: [
        { label: "Processing Time", value: 85, suffix: "%" },
        { label: "Order Errors", value: 94, suffix: "%" },
        { label: "Cost Savings", value: 40, prefix: "$", suffix: "K/yr" }
      ],
      services: ["Workflow Automation", "API Integration"],
      testimonial: "The automation system has been a game-changer. We're processing 3x more orders with the same team.",
      author: "Michael Torres, Operations Director"
    },
    {
      slug: "fintech-innovations-ai-chatbot",
      client: "FinTech Innovations",
      industry: "Financial Technology",
      challenge: "Needed to scale lead nurturing without expanding sales team",
      solution: "AI-powered chatbot and email automation with CRM integration",
      results: [
        { label: "Lead Response Time", value: 90, suffix: "%" },
        { label: "Qualified Meetings", value: 156, suffix: "%" },
        { label: "Sales Cycle", value: 35, suffix: "%" }
      ],
      services: ["AI Integration", "Marketing Automation", "CRM"],
      testimonial: "We're now engaging leads 24/7 and our sales team focuses on closing deals instead of qualification.",
      author: "Jennifer Park, VP Sales"
    },
    {
      slug: "localservice-pro-local-seo",
      client: "LocalService Pro",
      industry: "Home Services",
      challenge: "Struggling to compete with larger companies for local visibility",
      solution: "Local SEO, Google Ads, and reputation management strategy",
      results: [
        { label: "Local Rankings", value: 450, suffix: "%" },
        { label: "Phone Inquiries", value: 310, suffix: "%" },
        { label: "Revenue Growth", value: 180, suffix: "%" }
      ],
      services: ["Local SEO", "Paid Advertising", "Reputation Management"],
      testimonial: "We went from invisible to dominating our local market. Our phone won't stop ringing!",
      author: "David Miller, Owner"
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <Badge className="mb-4" variant="outline">Success Stories</Badge>
            </motion.div>
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Case Studies
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Real results from real businesses. See how we've helped companies like yours achieve measurable growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={index === 0 ? false : "initial"}
              animate={index === 0 ? undefined : undefined}
              whileInView={index > 0 ? "animate" : undefined}
              viewport={{ once: true, amount: 0.2 }}
              variants={index === 0 ? undefined : staggerContainer}
              className={index % 2 === 1 ? "bg-secondary p-8 md:p-12 rounded-2xl" : ""}
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left Column - Info */}
                <motion.div variants={index === 0 ? undefined : staggerItem} className="space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{study.client}</h2>
                    <p className="text-muted-foreground text-lg">{study.industry}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">The Challenge</h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Our Solution</h3>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.services.map((service, i) => (
                      <Badge key={i} variant="outline">{service}</Badge>
                    ))}
                  </div>

                  {study.testimonial && study.author && (
                    <Card className="border-primary/20 bg-accent">
                      <CardContent className="pt-6">
                        <p className="text-muted-foreground italic mb-4">"{study.testimonial}"</p>
                        <p className="font-semibold">— {study.author}</p>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>

                {/* Right Column - Results */}
                <motion.div variants={index === 0 ? undefined : staggerItem}>
                  {index === 0 ? (
                    <Card className="border-border bg-accent">
                      <CardHeader>
                        <CardTitle className="text-2xl">Results</CardTitle>
                        <CardDescription>Measurable impact in key metrics</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {study.results.map((result, i) => (
                          <div key={i} className="space-y-2">
                            <p className="text-sm text-muted-foreground">{result.label}</p>
                            <div className="flex items-baseline gap-2 flex-wrap">
                              {typeof result.value === 'string' && result.label.includes("Performance") ? (
                                <>
                                  <span className="text-4xl font-bold text-primary">{result.prefix}</span>
                                  <span className="text-muted-foreground">{result.value}{result.suffix}</span>
                                </>
                              ) : typeof result.value === 'string' ? (
                                <span className="text-4xl font-bold text-primary">
                                  {result.prefix}
                                  {result.value}
                                  {result.suffix}
                                </span>
                              ) : (
                                <span className="text-4xl font-bold text-primary">
                                  <NumberCounter
                                    end={result.value as number}
                                    prefix={'prefix' in result ? result.prefix as string : ""}
                                    suffix={'suffix' in result ? result.suffix as string : ""}
                                    decimals={'decimals' in result ? result.decimals as number : 0}
                                  />
                                </span>
                              )}
                              {!result.label.includes("Position") && !result.label.includes("Performance") && (
                                <span className="text-muted-foreground">
                                  {result.label.includes("Cost Per Acquisition") ? "decrease" : "increase"}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                        <div className="pt-4 border-t border-border">
                          <Button asChild className="w-full">
                            <Link href={`/case-studies/${study.slug}`}>
                              View Full Case Study
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <AnimatedCard>
                      <Card className="border-border bg-accent">
                        <CardHeader>
                          <CardTitle className="text-2xl">Results</CardTitle>
                          <CardDescription>Measurable impact in key metrics</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          {study.results.map((result, i) => (
                            <div key={i} className="space-y-2">
                              <p className="text-sm text-muted-foreground">{result.label}</p>
                              <div className="flex items-baseline gap-2 flex-wrap">
                                {typeof result.value === 'string' && result.label.includes("Performance") ? (
                                  <>
                                    <span className="text-4xl font-bold text-primary">{result.prefix}</span>
                                    <span className="text-muted-foreground">{result.value}{result.suffix}</span>
                                  </>
                                ) : typeof result.value === 'string' ? (
                                  <span className="text-4xl font-bold text-primary">
                                    {result.prefix}
                                    {result.value}
                                    {result.suffix}
                                  </span>
                                ) : (
                                  <span className="text-4xl font-bold text-primary">
                                    <NumberCounter
                                      end={result.value as number}
                                      prefix={'prefix' in result ? result.prefix as string : ""}
                                      suffix={'suffix' in result ? result.suffix as string : ""}
                                      decimals={'decimals' in result ? result.decimals as number : 0}
                                    />
                                  </span>
                                )}
                                {!result.label.includes("Position") && !result.label.includes("Performance") && (
                                  <span className="text-muted-foreground">
                                    {result.label.includes("Cost Per Acquisition") ? "decrease" : "increase"}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                          <div className="pt-4 border-t border-border">
                            <Button asChild className="w-full">
                              <Link href={`/case-studies/${study.slug}`}>
                                View Full Case Study
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection className="py-24 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <Button size="lg" asChild className="text-lg px-8 py-6">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </AnimatedSection>
    </main>
  );
}
