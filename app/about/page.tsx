"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { AnimatedSection } from "@/app/components/animated/AnimatedSection";
import { AnimatedCard } from "@/app/components/animated/AnimatedCard";
import { NumberCounter } from "@/app/components/animated/NumberCounter";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/app/lib/animations/variants";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const founder = {
    name: "Anthony Foster",
    role: "Founder & CEO",
    initials: "AF",
    image: "/images/about/founder.webp",
    bio: "Canadian founder with a Master's from U of T and professional coaching certification. Anthony bridges commercial strategy and marketing execution, helping organizations align their marketing with their full commercial engine for meaningful, long-term growth."
  };

  const values = [
    {
      title: "Strategic Alignment",
      description: "We ensure your marketing is aligned with your full commercial engine. Not operating in isolation, but driving meaningful revenue contribution.",
      image: "/images/about/growth-value.png"
    },
    {
      title: "Transparency",
      description: "Clear communication, honest assessment of your funnel, and full visibility into where inefficiencies exist and how to fix them.",
      image: "/images/about/integrity-value.png"
    },
    {
      title: "Connected Strategy",
      description: "We look at marketing as part of your complete commercial operation, clarifying how teams work together for long-term growth.",
      image: "/images/about/innovation-value.png"
    },
    {
      title: "True Partnership",
      description: "We act as a strategic extension of your organization, helping you move forward with the alignment and clarity needed to grow.",
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
              We're a strategic marketing partner helping organizations close the gap between the strength of their teams and the impact they have in the market. We align marketing with your full commercial engine for meaningful, long-term growth.
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
                To help organizations close the gap between the strength of their teams and the impact they have in the market. We act as a strategic extension of your organization, uncovering inefficiencies in your funnel, clarifying how teams work together, and creating connected strategies that support long-term growth.
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

      {/* Founder Section */}
      <AnimatedSection className="py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Leadership</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet the Founder
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The vision and expertise driving your success
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <AnimatedCard className="h-full">
              <Card className="h-full text-center border-border bg-accent hover:border-primary transition-colors duration-300">
                <CardContent className="h-full pt-6 flex flex-col">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-top"
                      sizes="128px"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-primary mb-4">{founder.role}</p>
                  <p className="text-sm text-muted-foreground flex-grow">{founder.bio}</p>
                </CardContent>
              </Card>
            </AnimatedCard>
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
