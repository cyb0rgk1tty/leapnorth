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
      slug: "major-telecom-transformation",
      client: "Major Telecommunications Company",
      industry: "Telecommunications",
      challenge: "Facing high cost per acquisition across biddable channels with 12+ competing campaigns causing cannibalization and increased costs across Business, Mobility, Health, Regional, and Smart Home Security divisions. Unable to meet Q4 acquisition benchmarks while stuck in #3 market position behind aggressive competitors.",
      solution: "Strategic campaign consolidation from 12+ campaigns to 6 streamlined always-on campaigns, eliminating internal competition. Developed tailored strategies for each business unit while implementing comprehensive paid media optimization with advanced audience segmentation and bid strategy refinement. Led account restructuring initiatives and actively optimized paid search accounts across all channels.",
      results: [
        { label: "Cost Per Acquisition", value: 30, suffix: "%" },
        { label: "Cost Per Click", value: 20, suffix: "%" },
        { label: "Conversions", value: 25, suffix: "%" },
        { label: "Market Position", value: 3, prefix: "#", suffix: " → #2" }
      ],
      services: ["Paid Media Optimization", "Performance Marketing", "Account Management", "Digital Strategy"],
      testimonial: "",
      author: ""
    },
    {
      slug: "business-cost-savings-cicd-automation",
      client: "Business Cost Savings Consultant",
      industry: "Business Consulting",
      challenge: "Client required secure, efficient code deployment while maintaining complete data privacy and eliminating time-consuming manual compilation and deployment processes",
      solution: "Implemented self-hosted Git repository with automated CI/CD pipeline, ensuring all client information remains private on their own infrastructure while automating the entire build and deployment workflow",
      results: [
        { label: "Deployment Time", value: 70, suffix: "% reduction" },
        { label: "Manual Errors", value: 100, suffix: "% eliminated" },
        { label: "Development Velocity", value: 3, suffix: "x faster" }
      ],
      services: ["DevOps Automation", "CI/CD Implementation", "Infrastructure Security"],
      testimonial: "The self-hosted CI/CD pipeline transformed our development process. We now deploy in minutes instead of hours, with complete confidence in data privacy.",
      author: "Operations Lead"
    },
    {
      slug: "campus-dental-clinic-business-transformation",
      client: "Campus Dental Clinic",
      industry: "Healthcare",
      challenge: "Struggling to attract new patients with poor online reputation and negative reviews. Faced high appointment cancellations, inconsistent schedules, and difficulty finding and retaining qualified staff. Limited clinic hours were restricting revenue potential and growth opportunities.",
      solution: "Business consultant conducted comprehensive operational audit and implemented process improvements across all areas. Launched aggressive reputation management campaign to improve Google Reviews and online presence. Created targeted social media marketing strategy to attract local patients. Developed robust HR recruiting strategy with improved staff onboarding and retention programs. Optimized scheduling system and expanded clinic hours to maximize capacity.",
      results: [
        { label: "Revenue Growth", value: 70, suffix: "%" },
        { label: "Google Reviews", value: 400, suffix: "%" },
        { label: "Staff Retention", value: 100, suffix: "%" },
        { label: "Appointment Fill Rate", value: 85, suffix: "%" }
      ],
      services: ["Business Consulting", "Reputation Management", "Social Media Marketing", "HR/Recruiting Strategy"],
      testimonial: "",
      author: ""
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
    },
    {
      slug: "pharma-multi-brand-campaign-management",
      client: "Global Pharmaceutical Company",
      industry: "Pharmaceutical & Healthcare",
      challenge: "Managing complex, highly regulated advertising campaigns across multiple therapeutic areas with strict compliance requirements, large monthly budgets exceeding $1.5M, and the need to hit spending targets while maintaining full regulatory adherence.",
      solution: "Expert management of substantial monthly ad spend across multiple pharmaceutical brands. Collaborated with media planners to establish and consistently hit monthly and quarterly budgets. Conducted thorough research into pharmaceutical advertising regulations and applied them to campaigns, ensuring full compliance and mitigating risks.",
      results: [
        { label: "Monthly Ad Spend", value: 1.5, prefix: "$", suffix: "M+" },
        { label: "Budget Targets", value: 100, suffix: "%" },
        { label: "Onsite Conversions", value: 20, suffix: "% MoM" }
      ],
      services: ["Paid Media Management", "Regulatory Compliance", "Budget Planning", "Healthcare Marketing"],
      testimonial: "",
      author: ""
    },
    {
      slug: "american-automaker-digital-innovation",
      client: "Major American Automaker",
      industry: "Automotive",
      challenge: "High customer acquisition costs through traditional retail channels at $100 per app download. Needed innovative digital advertising approaches and new performance metrics to compete in the evolving automotive digital landscape.",
      solution: "Pioneered new ad formats in collaboration with Google, including app download campaigns achieving 85% cost reduction and dealer visit tracking on Google Maps. Applied best practices across the largest account portfolio, earning industry recognition for excellence.",
      results: [
        { label: "App Download Cost", value: 85, suffix: "%" },
        { label: "Cost Per Click", value: 20, suffix: "%" },
        { label: "Cost Per Acquisition", value: 15, suffix: "%" },
        { label: "Recognition", value: "Google Best Practices Award" }
      ],
      services: ["Paid Advertising", "App Marketing", "Innovation Strategy", "Performance Marketing"],
      testimonial: "",
      author: ""
    },
    {
      slug: "multi-industry-ux-optimization",
      client: "Multiple Clients",
      industry: "Multi-Industry",
      challenge: "Various businesses struggling with poor conversion rates, high bounce rates, low foot traffic, and suboptimal mobile experiences that were directly impacting revenue and growth potential.",
      solution: "Conducted comprehensive UX research and implemented strategic website optimizations across multiple clients. Delivered mobile-first design improvements, enhanced search engine rankings, and drove business development initiatives through compelling presentations and pitches.",
      results: [
        { label: "Conversion Rate", value: 120, suffix: "%" },
        { label: "Bounce Rate", value: 50, suffix: "%" },
        { label: "Online Orders", value: 500, suffix: "%" },
        { label: "Additional Sales", value: 60, prefix: "$", suffix: "K" }
      ],
      services: ["UX Design", "Conversion Optimization", "Business Development", "Mobile Optimization", "SEO"],
      testimonial: "",
      author: ""
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
                                  <span className="text-4xl font-bold text-primary">{'prefix' in result && result.prefix}</span>
                                  <span className="text-muted-foreground">{result.value}{'suffix' in result && result.suffix}</span>
                                </>
                              ) : typeof result.value === 'string' ? (
                                <span className="text-4xl font-bold text-primary">
                                  {'prefix' in result && result.prefix}
                                  {result.value}
                                  {'suffix' in result && result.suffix}
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
                              {!result.label.includes("Position") && !result.label.includes("Performance") && !result.label.includes("Recognition") && (
                                <span className="text-muted-foreground">
                                  {result.label.includes("Cost") || result.label.includes("Bounce") ? "decrease" : "increase"}
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
                                    <span className="text-4xl font-bold text-primary">{'prefix' in result && result.prefix}</span>
                                    <span className="text-muted-foreground">{result.value}{'suffix' in result && result.suffix}</span>
                                  </>
                                ) : typeof result.value === 'string' ? (
                                  <span className="text-4xl font-bold text-primary">
                                    {'prefix' in result && result.prefix}
                                    {result.value}
                                    {'suffix' in result && result.suffix}
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
                                {!result.label.includes("Position") && !result.label.includes("Performance") && !result.label.includes("Recognition") && (
                                  <span className="text-muted-foreground">
                                    {result.label.includes("Cost") || result.label.includes("Bounce") ? "decrease" : "increase"}
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
