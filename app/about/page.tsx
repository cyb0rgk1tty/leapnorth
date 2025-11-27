"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { AnimatedSection } from "@/app/components/animated/AnimatedSection";
import { AnimatedCard } from "@/app/components/animated/AnimatedCard";
import { NumberCounter } from "@/app/components/animated/NumberCounter";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/app/lib/animations/variants";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      initials: "AJ",
      bio: "15+ years experience in digital marketing and business growth. Former VP of Marketing at Fortune 500 company."
    },
    {
      name: "Sarah Mitchell",
      role: "Head of Marketing",
      initials: "SM",
      bio: "SEO and content marketing expert with proven track record of driving 300%+ organic growth for clients."
    },
    {
      name: "David Chen",
      role: "Head of Automation",
      initials: "DC",
      bio: "Automation architect specializing in AI integration and workflow optimization for scaling businesses."
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      initials: "ER",
      bio: "Award-winning designer with expertise in brand identity and conversion-focused design."
    }
  ];

  const values = [
    {
      title: "Results-Driven",
      description: "We focus on metrics that matter. Every strategy is designed to deliver measurable ROI and tangible business growth.",
      image: "/images/about/growth-value.png"
    },
    {
      title: "Transparency",
      description: "Clear communication, honest reporting, and full visibility into our processes and your campaign performance.",
      image: "/images/about/integrity-value.png"
    },
    {
      title: "Innovation",
      description: "We stay ahead of industry trends, leveraging the latest tools and technologies to give you a competitive edge.",
      image: "/images/about/innovation-value.png"
    },
    {
      title: "Partnership",
      description: "We're not just a vendor—we're your growth partner, invested in your long-term success.",
      image: "/images/about/excellence-value.png"
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
              <Badge className="mb-4" variant="outline">About Us</Badge>
            </motion.div>
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Your Growth Partner
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              We're a team of marketing strategists, automation experts, and growth hackers dedicated to helping businesses scale efficiently through integrated marketing and intelligent automation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                <NumberCounter end={50} suffix="+" />
              </div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                <NumberCounter end={350} prefix="$" suffix="M+" />
              </div>
              <p className="text-muted-foreground">Budget Managed</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                <NumberCounter end={15} suffix="+" />
              </div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission Section */}
      <AnimatedSection className="py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about/team-collaboration.png"
                alt="Team Collaboration"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To empower businesses of all sizes to achieve sustainable growth through the perfect blend of strategic marketing and intelligent automation. We believe that every business deserves access to enterprise-level growth strategies and cutting-edge technology—without the enterprise price tag.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Drives Us
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={staggerItem}>
                <AnimatedCard>
                  <Card className="h-full border-border bg-accent hover:border-primary transition-colors duration-300">
                    <CardContent className="pt-6">
                      <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                        <Image
                          src={value.image}
                          alt={value.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <CardTitle className="text-2xl mb-4">{value.title}</CardTitle>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Leadership Team</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to driving your success
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={staggerItem} className="h-full">
                <AnimatedCard className="h-full">
                  <Card className="h-full text-center border-border bg-accent hover:border-primary transition-colors duration-300">
                    <CardContent className="h-full pt-6 flex flex-col">
                      <Avatar className="w-24 h-24 mx-auto mb-4 bg-primary/10 text-primary">
                        <AvatarFallback className="text-2xl font-bold">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary mb-4">{member.role}</p>
                      <p className="text-sm text-muted-foreground flex-grow">{member.bio}</p>
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
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Ready to transform your business with strategic marketing and intelligent automation?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
