"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { AnimatedSection } from "@/app/components/animated/AnimatedSection";
import { AnimatedCard } from "@/app/components/animated/AnimatedCard";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/app/lib/animations/variants";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const marketingServices = [
    {
      title: "SEO & Content Marketing",
      description: "Boost organic visibility and engage your audience with strategic content that ranks and converts.",
      features: [
        "Keyword research & strategy",
        "Technical SEO optimization",
        "Content creation & optimization",
        "Link building campaigns",
        "Local SEO for local businesses",
        "SEO audits & reporting"
      ]
    },
    {
      title: "Paid Advertising",
      description: "Maximize ROI with data-driven paid campaigns across Google, Meta, LinkedIn, and more.",
      features: [
        "Google Ads (Search, Display, Shopping)",
        "Meta Ads (Facebook & Instagram)",
        "LinkedIn Ads for B2B",
        "Retargeting campaigns",
        "A/B testing & optimization",
        "Conversion tracking & analytics"
      ]
    },
    {
      title: "Social Media Management",
      description: "Build brand awareness and community engagement across all major social platforms.",
      features: [
        "Social media strategy",
        "Content creation & curation",
        "Community management",
        "Influencer partnerships",
        "Social media advertising",
        "Performance analytics"
      ]
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and drive conversions with personalized email campaigns and automation.",
      features: [
        "Email strategy & planning",
        "Campaign design & copywriting",
        "List segmentation",
        "Marketing automation",
        "A/B testing",
        "Performance tracking"
      ]
    }
  ];

  const automationServices = [
    {
      title: "Workflow Automation",
      description: "Streamline operations and eliminate repetitive tasks with intelligent automation.",
      features: [
        "Process mapping & optimization",
        "Zapier, Make, n8n integration",
        "Custom automation workflows",
        "Task automation",
        "Data synchronization",
        "Workflow monitoring"
      ]
    },
    {
      title: "CRM Implementation",
      description: "Optimize customer relationships with tailored CRM solutions and integrations.",
      features: [
        "CRM selection & setup",
        "Data migration",
        "Custom field configuration",
        "Pipeline automation",
        "Reporting & dashboards",
        "Team training"
      ]
    },
    {
      title: "AI Integration",
      description: "Leverage artificial intelligence to enhance customer experience and operational efficiency.",
      features: [
        "AI chatbot implementation",
        "Content generation tools",
        "Predictive analytics",
        "AI-powered recommendations",
        "Natural language processing",
        "Machine learning models"
      ]
    },
    {
      title: "Custom API Development",
      description: "Build seamless integrations between your tools and systems with custom API solutions.",
      features: [
        "API design & development",
        "Third-party integrations",
        "Data mapping & transformation",
        "Real-time synchronization",
        "API documentation",
        "Ongoing maintenance"
      ]
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
              <Badge className="mb-4" variant="outline">Our Services</Badge>
            </motion.div>
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Services That Drive Growth
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Comprehensive marketing and automation solutions designed to help your business scale efficiently
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Marketing Services */}
      <AnimatedSection className="py-24 px-4" id="marketing">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Badge className="mb-4">Marketing & Growth</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Marketing Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Drive measurable results with data-driven marketing strategies that attract, engage, and convert your target audience.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/services/marketing-services.png"
                alt="Marketing and Growth Services"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {marketingServices.map((service, index) => (
              <motion.div key={index} variants={staggerItem}>
                <AnimatedCard>
                  <Card className="h-full border-border bg-accent hover:border-primary transition-colors duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2 mt-0.5">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Automation Services */}
      <AnimatedSection className="py-24 px-4 bg-secondary" id="automation">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="/images/services/automation-services.png"
                alt="Business Automation Services"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <Badge className="mb-4">Business Automation</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Automation Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Scale your operations with intelligent automation systems that save time, reduce errors, and improve efficiency.
              </p>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {automationServices.map((service, index) => (
              <motion.div key={index} variants={staggerItem}>
                <AnimatedCard>
                  <Card className="h-full border-border bg-accent hover:border-primary transition-colors duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2 mt-0.5">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
