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
    slug: "major-telecom-cpa-optimization",
    client: "Major Telecommunications Company",
    industry: "Telecommunications",
    challenge:
      "A major telecommunications provider faced escalating costs and inefficiencies across their digital acquisition channels. With 12+ competing campaigns running simultaneously, they experienced severe campaign cannibalization, driving cost per acquisition to unsustainable levels. Despite significant ad spend, they were falling short of Q4 acquisition benchmarks and stuck in #3 market position behind aggressive competitors.",
    solution:
      "We led a comprehensive paid media transformation, consolidating campaigns from 12+ fragmented efforts to 6 strategically designed always-on campaigns. This included advanced audience segmentation to eliminate overlap, refined bid strategies optimized for efficiency, channel-specific performance frameworks, and real-time optimization protocols. The streamlined approach eliminated internal competition while maximizing reach and conversion efficiency across all biddable channels. Additionally, we doubled retention rate and drove a 20% YoY increase in client satisfaction through improved campaign performance and customer engagement.",
    results: [
      { label: "Cost Per Acquisition", value: 200, suffix: "%" },
      { label: "Campaign Efficiency", value: 50, suffix: "%" },
      { label: "Market Position", value: 3, prefix: "#", suffix: " → #2" },
      { label: "Q4 Performance", prefix: "#1 ", value: "Q4 performance", suffix: " within past decade" },
    ],
    services: ["Paid Media Optimization", "Performance Marketing"],
    testimonial: "",
    author: "",
    image: "/images/case-studies/telecom.webp",
    timeline: "Q3-Q4 2024 (6 months)",
    metrics: [
      { name: "Jul", cpa: 100, acquisitions: 100, campaigns: 12 },
      { name: "Aug", cpa: 95, acquisitions: 110, campaigns: 12 },
      { name: "Sep", cpa: 85, acquisitions: 125, campaigns: 10 },
      { name: "Oct", cpa: 65, acquisitions: 155, campaigns: 6 },
      { name: "Nov", cpa: 45, acquisitions: 210, campaigns: 6 },
      { name: "Dec", cpa: 33, acquisitions: 285, campaigns: 6 },
    ],
  },
  {
    slug: "growthco-retail-automation",
    client: "GrowthCo Retail",
    industry: "E-commerce",
    challenge:
      "GrowthCo was experiencing rapid growth but their manual order processing system couldn't keep up. This led to delays, errors, and customer complaints that threatened their reputation.",
    solution:
      "We designed and implemented a custom automation workflow that connected their Shopify store with inventory management and shipping systems. The solution included automated order processing, inventory sync, shipping label generation, and customer notification emails.",
    results: [
      { label: "Processing Time", value: 85, suffix: "%" },
      { label: "Order Errors", value: 94, suffix: "%" },
      { label: "Cost Savings", value: 40, prefix: "$", suffix: "K/yr" },
    ],
    services: ["Workflow Automation", "API Integration"],
    testimonial:
      "The automation system has been a game-changer. We're processing 3x more orders with the same team.",
    author: "Michael Torres, Operations Director",
    image: "/images/case-studies/growthco.png",
    timeline: "3 months",
    metrics: [
      { name: "Week 1", efficiency: 15, errors: 100 },
      { name: "Week 4", efficiency: 40, errors: 65 },
      { name: "Week 8", efficiency: 70, errors: 30 },
      { name: "Week 12", efficiency: 100, errors: 6 },
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
