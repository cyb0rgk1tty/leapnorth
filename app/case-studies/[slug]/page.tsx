import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";
import { ArrowLeftIcon, TargetIcon, LightningBoltIcon, BarChartIcon, QuoteIcon } from "@radix-ui/react-icons";
import { CaseStudyChart } from "@/app/components/case-studies/CaseStudyChart";

// Case study data (in a real app, this would come from a database or CMS)
const caseStudies = [
  {
    slug: "major-telecom-transformation",
    client: "Major Telecommunications Company",
    industry: "Telecommunications",
    challenge:
      "A major telecommunications provider faced escalating costs and inefficiencies across their digital acquisition channels. Managing diverse accounts spanning Business, Mobility, Health, Regional, and Smart Home Security divisions created significant complexity. With 12+ competing campaigns running simultaneously, they experienced severe campaign cannibalization, driving cost per acquisition to unsustainable levels. Despite significant ad spend, they were falling short of Q4 acquisition benchmarks and stuck in #3 market position behind aggressive competitors.",
    solution:
      "We led a comprehensive paid media transformation, consolidating campaigns from 12+ fragmented efforts to 6 strategically designed always-on campaigns. We developed tailored strategies aligned with each division's unique objectives, ensuring campaigns supported rather than competed with each other. This included advanced audience segmentation to eliminate overlap, refined bid strategies optimized for efficiency, channel-specific performance frameworks, and real-time optimization protocols. Through active paid search optimization and account restructuring initiatives, we drove significant improvements across all metrics while moving the company from #3 to #2 market position.",
    results: [
      { label: "Cost Per Acquisition", value: 30, suffix: "%" },
      { label: "Cost Per Click", value: 20, suffix: "%" },
      { label: "Conversions", value: 25, suffix: "%" },
      { label: "Market Position", value: 3, prefix: "#", suffix: " → #2" },
    ],
    services: ["Paid Media Optimization", "Performance Marketing", "Account Management", "Digital Strategy"],
    testimonial: "",
    author: "",
    image: "/images/case-studies/telecom.webp",
    timeline: "6 months",
    metrics: [
      { name: "Month 1", cpa: 100, cpc: 100, conversions: 100 },
      { name: "Month 2", cpa: 90, cpc: 95, conversions: 108 },
      { name: "Month 3", cpa: 82, cpc: 90, conversions: 115 },
      { name: "Month 4", cpa: 76, cpc: 86, conversions: 120 },
      { name: "Month 5", cpa: 72, cpc: 82, conversions: 123 },
      { name: "Month 6", cpa: 70, cpc: 80, conversions: 125 },
    ],
  },
  {
    slug: "business-cost-savings-cicd-automation",
    client: "Business Cost Savings Consultant",
    industry: "Business Consulting",
    challenge:
      "A business cost savings consultant faced two critical challenges: their code deployment process was manual, time-consuming, and error-prone, taking 60-80% longer than industry standards. Additionally, they needed to maintain absolute data privacy for sensitive client information, making third-party CI/CD services unsuitable.",
    solution:
      "Our team designed and implemented a self-hosted Git repository with a fully automated CI/CD pipeline running on their own secure infrastructure. This solution eliminated manual compilation steps, automated testing, and streamlined deployment while ensuring all client data remained completely private and under their control. The system includes automated code quality checks, security scanning, and rollback capabilities.",
    results: [
      { label: "Deployment Time", value: 70, suffix: "% reduction" },
      { label: "Manual Errors", value: 100, suffix: "% eliminated" },
      { label: "Development Velocity", value: 3, suffix: "x faster" },
    ],
    services: ["DevOps Automation", "CI/CD Implementation", "Infrastructure Security"],
    testimonial:
      "The self-hosted CI/CD pipeline transformed our development process. We now deploy in minutes instead of hours, with complete confidence in data privacy. This was exactly what we needed.",
    author: "Operations Lead",
    image: "/images/case-studies/cicd-automation.png",
    timeline: "2 months",
    metrics: [
      { name: "Week 1", deploymentTime: 100, errors: 100 },
      { name: "Week 2", deploymentTime: 80, errors: 80 },
      { name: "Week 4", deploymentTime: 50, errors: 40 },
      { name: "Week 8", deploymentTime: 30, errors: 0 },
    ],
  },
  {
    slug: "campus-dental-clinic-business-transformation",
    client: "Campus Dental Clinic",
    industry: "Healthcare",
    challenge:
      "Campus Dental Clinic was struggling with multiple critical business challenges that were limiting their growth and profitability. They faced difficulty attracting new patients due to poor online reputation and negative reviews. Their appointment schedules were inconsistent with high cancellation rates, creating unpredictable revenue and wasted resources. Finding and retaining qualified staff was an ongoing problem that affected service quality. Additionally, their limited clinic hours were restricting revenue potential and preventing them from serving more patients who needed care outside traditional business hours.",
    solution:
      "Our business consultant led a comprehensive transformation across all areas of the practice. We started with an in-depth operational audit to identify inefficiencies and pain points. We then launched an aggressive reputation management campaign to address negative reviews, encourage satisfied patients to share their experiences, and rebuild the clinic's online presence on Google and social media platforms. A targeted social media marketing strategy was developed to attract local patients and showcase the clinic's services, team, and patient success stories. We implemented a robust HR recruiting strategy with improved hiring processes, competitive compensation packages, and comprehensive staff onboarding programs to ensure consistency and retention. Finally, we optimized the scheduling system to reduce cancellations and expanded clinic hours to maximize appointment capacity and revenue opportunities.",
    results: [
      { label: "Revenue Growth", value: 70, suffix: "%" },
      { label: "Google Reviews", value: 400, suffix: "%" },
      { label: "Staff Retention", value: 100, suffix: "%" },
      { label: "Appointment Fill Rate", value: 85, suffix: "%" },
    ],
    services: ["Business Consulting", "Reputation Management", "Social Media Marketing", "HR/Recruiting Strategy"],
    testimonial: "",
    author: "",
    image: "/images/case-studies/campus-dental.webp",
    timeline: "Mar-Oct 2024 (8 months)",
    metrics: [
      { name: "Mar", revenue: 100, reviews: 100, fillRate: 55 },
      { name: "Apr", revenue: 108, reviews: 150, fillRate: 60 },
      { name: "May", revenue: 118, reviews: 220, fillRate: 65 },
      { name: "Jun", revenue: 130, reviews: 310, fillRate: 70 },
      { name: "Jul", revenue: 145, reviews: 380, fillRate: 75 },
      { name: "Aug", revenue: 158, reviews: 440, fillRate: 80 },
      { name: "Sep", revenue: 165, reviews: 480, fillRate: 83 },
      { name: "Oct", revenue: 170, reviews: 500, fillRate: 85 },
    ],
  },
  {
    slug: "fintech-innovations-ai-chatbot",
    client: "FinTech Innovations",
    industry: "Financial Technology",
    challenge:
      "FinTech Innovations needed to scale their lead nurturing without expanding their sales team. Manual qualification was taking too much time and causing potential customers to wait days for responses.",
    solution:
      "We implemented an AI-powered chatbot for 24/7 lead engagement, email automation workflows for nurturing, CRM integration for seamless handoffs, and automated lead scoring based on behavior and demographics.",
    results: [
      { label: "Lead Response Time", value: 90, suffix: "%" },
      { label: "Qualified Meetings", value: 156, suffix: "%" },
      { label: "Sales Cycle", value: 35, suffix: "%" },
    ],
    services: ["AI Integration", "Marketing Automation", "CRM"],
    testimonial:
      "We're now engaging leads 24/7 and our sales team focuses on closing deals instead of qualification.",
    author: "Jennifer Park, VP Sales",
    image: "/images/case-studies/fintech.png",
    timeline: "4 months",
    metrics: [
      { name: "Month 1", meetings: 100, responseTime: 100 },
      { name: "Month 2", meetings: 135, responseTime: 45 },
      { name: "Month 3", meetings: 190, responseTime: 20 },
      { name: "Month 4", meetings: 256, responseTime: 10 },
    ],
  },
  {
    slug: "localservice-pro-local-seo",
    client: "LocalService Pro",
    industry: "Home Services",
    challenge:
      "LocalService Pro, a home services company, was struggling to compete with larger companies for local visibility. They were barely showing up in Google Maps and local search results.",
    solution:
      "We implemented a comprehensive local SEO strategy including Google Business Profile optimization, local citation building, reputation management with review generation, and targeted Google Ads for local searches.",
    results: [
      { label: "Local Rankings", value: 450, suffix: "%" },
      { label: "Phone Inquiries", value: 310, suffix: "%" },
      { label: "Revenue Growth", value: 180, suffix: "%" },
    ],
    services: ["Local SEO", "Paid Advertising", "Reputation Management"],
    testimonial:
      "We went from invisible to dominating our local market. Our phone won't stop ringing!",
    author: "David Miller, Owner",
    image: "/images/case-studies/localservice.png",
    timeline: "5 months",
    metrics: [
      { name: "Month 1", rankings: 100, calls: 100 },
      { name: "Month 2", rankings: 200, calls: 150 },
      { name: "Month 3", rankings: 350, calls: 230 },
      { name: "Month 4", rankings: 480, calls: 340 },
      { name: "Month 5", rankings: 550, calls: 410 },
    ],
  },
  {
    slug: "pharma-multi-brand-campaign-management",
    client: "Global Pharmaceutical Company",
    industry: "Pharmaceutical & Healthcare",
    challenge:
      "A global pharmaceutical company needed expert management of complex, highly regulated advertising campaigns across multiple therapeutic areas. With monthly ad spend exceeding $1.5 million, the stakes were high. The company faced strict compliance requirements from regulatory bodies, needed to hit aggressive spending targets without waste, and required deep expertise in pharmaceutical advertising regulations. Any compliance misstep could result in significant legal and reputational consequences, making precision and expertise essential.",
    solution:
      "Our team provided expert management of substantial monthly ad spend across multiple pharmaceutical brands, each targeting different therapeutic areas. We collaborated closely with media planners to establish realistic monthly and quarterly budgets, then consistently hit those targets through careful pacing and optimization. Most critically, we conducted thorough research into pharmaceutical advertising regulations and applied them rigorously to every campaign, ensuring full compliance while still driving performance. This included proper fair balance requirements, appropriate claims, and adherence to platform-specific healthcare advertising policies.",
    results: [
      { label: "Monthly Ad Spend", value: 1.5, prefix: "$", suffix: "M+" },
      { label: "Budget Targets", value: 100, suffix: "%" },
      { label: "Onsite Conversions", value: 20, suffix: "% MoM" },
    ],
    services: ["Paid Media Management", "Regulatory Compliance", "Budget Planning", "Healthcare Marketing"],
    testimonial: "",
    author: "",
    image: "/images/case-studies/pharma.webp",
    timeline: "12+ months (ongoing)",
    metrics: [
      { name: "Q1", spend: 100, conversions: 100, compliance: 100 },
      { name: "Q2", spend: 100, conversions: 115, compliance: 100 },
      { name: "Q3", spend: 100, conversions: 132, compliance: 100 },
      { name: "Q4", spend: 100, conversions: 152, compliance: 100 },
    ],
  },
  {
    slug: "american-automaker-digital-innovation",
    client: "Major American Automaker",
    industry: "Automotive",
    challenge:
      "A major American automaker was struggling with high customer acquisition costs through traditional retail channels, paying approximately $100 per app download. The automotive industry was rapidly evolving digitally, but the company lacked innovative digital advertising approaches and the new performance metrics needed to compete effectively. They needed a partner who could pioneer new strategies and deliver measurable cost reductions while maintaining scale.",
    solution:
      "We pioneered groundbreaking ad formats in collaboration with Google that transformed the company's digital marketing effectiveness. Our team developed and launched the 'app download' ad format, achieving just $15 per download versus $100 through traditional retail channels - a 85% cost reduction. We generated tens of thousands of app downloads over 3 months. Additionally, we spearheaded the introduction of the 'visit a dealer/store' ad format on Google Maps, providing entirely new metrics and insights for reporting. Our rigorous adherence to best practices on their largest account earned the Google Best Practices Award in 2019.",
    results: [
      { label: "App Download Cost", value: 85, suffix: "%" },
      { label: "Cost Per Click", value: 20, suffix: "%" },
      { label: "Cost Per Acquisition", value: 15, suffix: "%" },
      { label: "Recognition", value: "Google Best Practices Award" },
    ],
    services: ["Paid Advertising", "App Marketing", "Innovation Strategy", "Performance Marketing"],
    testimonial: "",
    author: "",
    image: "/images/case-studies/automotive.webp",
    timeline: "6 months",
    metrics: [
      { name: "Month 1", appCost: 100, cpc: 100, downloads: 100 },
      { name: "Month 2", appCost: 60, cpc: 92, downloads: 180 },
      { name: "Month 3", appCost: 35, cpc: 88, downloads: 320 },
      { name: "Month 4", appCost: 20, cpc: 84, downloads: 450 },
      { name: "Month 5", appCost: 17, cpc: 82, downloads: 520 },
      { name: "Month 6", appCost: 15, cpc: 80, downloads: 580 },
    ],
  },
  {
    slug: "multi-industry-ux-optimization",
    client: "Multiple Clients",
    industry: "Multi-Industry",
    challenge:
      "Multiple businesses across various industries were struggling with poor conversion rates, high bounce rates, low foot traffic, and suboptimal mobile experiences that were directly impacting revenue and growth potential. These companies needed comprehensive UX expertise to identify issues and implement solutions that would drive measurable business results.",
    solution:
      "We conducted comprehensive UX research and implemented strategic website optimizations across multiple clients. Our approach included in-depth user behavior analysis, conversion funnel optimization, and mobile-first design improvements. We enhanced search engine rankings through technical SEO improvements and content optimization. Beyond implementation, we drove business development initiatives through compelling presentations and strategic planning, securing additional contracts and expanding client relationships.",
    results: [
      { label: "Conversion Rate", value: 120, suffix: "%" },
      { label: "Bounce Rate", value: 50, suffix: "%" },
      { label: "Online Orders", value: 500, suffix: "%" },
      { label: "Additional Sales", value: 60, prefix: "$", suffix: "K" },
    ],
    services: ["UX Design", "Conversion Optimization", "Business Development", "Mobile Optimization", "SEO"],
    testimonial: "",
    author: "",
    image: "/images/case-studies/ux-optimization.webp",
    timeline: "Various projects",
    metrics: [
      { name: "Baseline", conversions: 100, bounceRate: 100, orders: 100 },
      { name: "Week 1", conversions: 150, bounceRate: 80, orders: 200 },
      { name: "Week 2", conversions: 180, bounceRate: 65, orders: 350 },
      { name: "Week 3", conversions: 200, bounceRate: 55, orders: 500 },
      { name: "Week 4", conversions: 220, bounceRate: 50, orders: 600 },
    ],
  },
];

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/case-studies">
          <Button variant="ghost" className="gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Case Studies
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="mb-8">
          <Badge className="mb-4">{study.industry}</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {study.client}
          </h1>
          <p className="text-xl text-muted-foreground">
            How we helped {study.client} achieve remarkable growth
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {study.results.map((result, i) => (
            <Card key={i} className="bg-secondary border-border">
              <CardHeader>
                <CardTitle className="text-sm font-normal text-muted-foreground">
                  {result.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2 flex-wrap">
                  {result.label.includes("Performance") ? (
                    <>
                      <span className="text-4xl md:text-5xl font-bold text-primary">{'prefix' in result && result.prefix}</span>
                      <span className="text-sm text-muted-foreground">{result.value}{'suffix' in result && result.suffix}</span>
                    </>
                  ) : (
                    <span className="text-4xl md:text-5xl font-bold text-primary">
                      {'prefix' in result && result.prefix}
                      {result.value}
                      {'suffix' in result && result.suffix}
                    </span>
                  )}
                  {!result.label.includes("Position") && !result.label.includes("Performance") && (
                    result.label.includes("Time") ||
                    result.label.includes("Error") ||
                    result.label.includes("Cycle") ||
                    result.label.includes("Cost Per Acquisition") ? (
                      <span className="text-sm text-muted-foreground">reduction</span>
                    ) : (
                      <span className="text-sm text-muted-foreground">increase</span>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* The Challenge */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TargetIcon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">The Challenge</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {study.challenge}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <LightningBoltIcon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">The Solution</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {study.solution}
            </p>
            <div>
              <h3 className="text-sm font-semibold mb-3">Services Provided:</h3>
              <div className="flex flex-wrap gap-2">
                {study.services.map((service) => (
                  <Badge key={service} variant="outline">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Results Chart */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-primary/10 rounded-lg">
            <BarChartIcon className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Growth Over Time</h2>
        </div>

        <Card className="bg-secondary border-border p-6">
          <CaseStudyChart metrics={study.metrics} />
          <p className="text-sm text-muted-foreground text-center mt-4">
            Timeline: {study.timeline}
          </p>
        </Card>
      </section>

      {study.testimonial && study.author && (
        <>
          <Separator />

          {/* Testimonial */}
          <section className="max-w-4xl mx-auto px-4 py-16">
            <div className="bg-secondary rounded-lg p-8 md:p-12 relative">
              <QuoteIcon className="absolute top-8 left-8 h-12 w-12 text-primary/20" />
              <blockquote className="relative z-10">
                <p className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
                  "{study.testimonial}"
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold">
                    {study.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{study.author}</p>
                    <p className="text-sm text-muted-foreground">{study.client}</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </section>
        </>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Similar Results?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help your business achieve exceptional growth.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
