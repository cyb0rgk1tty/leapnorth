"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardTitle } from "@/app/components/ui/card";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";
import { AnimatedSection } from "@/app/components/animated/AnimatedSection";
import { AnimatedCard } from "@/app/components/animated/AnimatedCard";
import { NumberCounter } from "@/app/components/animated/NumberCounter";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/app/lib/animations/variants";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const [activeCard, setActiveCard] = useState(0);

  const team = [
    {
      name: "Anthony Foster",
      role: "Founder and CEO",
      initials: "AF",
      image: "/images/about/founder.webp",
      bio: "Canadian founder with a Master of Arts from the University of Toronto and award-winning Master's Scholar. Anthony bridges commercial strategy and marketing execution for meaningful, long-term growth."
    },
    {
      name: "Stefan Roy",
      role: "Chief Marketing Officer",
      initials: "SR",
      image: "/images/about/cmo.webp",
      bio: "Former head of digital at a leading Canadian agency with 12 years of experience. Stefan builds integrated marketing strategies that connect brand positioning with measurable outcomes."
    },
    {
      name: "Michelle Chan",
      role: "Chief Operating Officer",
      initials: "MC",
      image: "/images/about/coo.webp",
      bio: "Operations leader with a background in scaling service businesses. Michelle ensures our delivery processes run smoothly, bringing structure and efficiency to every client engagement."
    }
  ];

  const values = [
    {
      title: "Strategic Alignment",
      description: "We ensure your marketing is aligned with your full commercial engine. Not operating in isolation, but driving meaningful revenue contribution.",
      image: "/images/about/growth-value.webp"
    },
    {
      title: "Transparency",
      description: "Clear communication, honest assessment of your funnel, and full visibility into where inefficiencies exist and how to fix them.",
      image: "/images/about/integrity-value.webp"
    },
    {
      title: "Connected Strategy",
      description: "We look at marketing as part of your complete commercial operation, clarifying how teams work together for long-term growth.",
      image: "/images/about/innovation-value.png"
    },
    {
      title: "True Partnership",
      description: "We act as a strategic extension of your organization, helping you move forward with the alignment and clarity needed to grow.",
      image: "/images/about/excellence-value.webp"
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
                src="/images/about/team-collaboration.webp"
                alt="Team Collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-secondary to-transparent" />
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
                  <Card className="h-full border-border bg-accent hover:border-primary transition-colors duration-300 overflow-hidden">
                    <div className="relative h-64 w-full">
                      <Image
                        src={value.image}
                        alt={value.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-accent to-transparent" />
                    </div>
                    <CardContent className="pt-4 pb-6">
                      <CardTitle className="text-2xl mb-3">{value.title}</CardTitle>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Leadership Team Section */}
      <AnimatedSection className="py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Leadership</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet the Team
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
            className="max-w-4xl mx-auto"
          >
            {/* Horizontal Stacked Card Carousel */}
            <div className="relative h-[450px] flex items-center justify-center">
              {/* Card Stack */}
              <div className="relative w-full h-[400px] flex items-center justify-center">
                {team.map((member, index) => {
                  // Calculate relative position (-1 = left, 0 = center, 1 = right)
                  let relativePos = index - activeCard;

                  // Wrap around for circular navigation
                  if (relativePos > 1) relativePos = relativePos - team.length;
                  if (relativePos < -1) relativePos = relativePos + team.length;

                  // Only show cards that are visible (-1, 0, 1)
                  if (Math.abs(relativePos) > 1) return null;

                  const isActive = relativePos === 0;
                  const xOffset = relativePos * 280; // Horizontal offset
                  const scale = isActive ? 1 : 0.85;
                  const rotation = relativePos * -8; // Slight rotation
                  const zIndex = isActive ? 10 : 5;
                  const opacity = isActive ? 1 : 0.6;

                  return (
                    <motion.div
                      key={member.name}
                      className="absolute w-[320px]"
                      animate={{
                        x: xOffset,
                        scale,
                        rotateY: rotation,
                        zIndex,
                        opacity,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                      onClick={() => !isActive && setActiveCard(index)}
                    >
                      <Card className={`h-[380px] text-center border-border bg-accent transition-all duration-300 cursor-pointer ${isActive ? 'border-primary shadow-xl shadow-primary/20' : 'hover:opacity-80'}`}>
                        <CardContent className="h-full pt-6 flex flex-col">
                          {member.image ? (
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative">
                              <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover object-top"
                                sizes="128px"
                              />
                            </div>
                          ) : (
                            <Avatar className="w-32 h-32 mx-auto mb-4 bg-primary/10 text-primary">
                              <AvatarFallback className="text-3xl font-bold">
                                {member.initials}
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                          <p className="text-primary mb-4">{member.role}</p>
                          <p className="text-sm text-muted-foreground flex-grow">{member.bio}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 rounded-full h-12 w-12 border-border hover:border-primary hover:bg-primary/10 z-20"
                onClick={() => setActiveCard((prev) => (prev - 1 + team.length) % team.length)}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous team member</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 rounded-full h-12 w-12 border-border hover:border-primary hover:bg-primary/10 z-20"
                onClick={() => setActiveCard((prev) => (prev + 1) % team.length)}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next team member</span>
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeCard
                      ? 'bg-primary w-6'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
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
