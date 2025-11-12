"use client";

import type { Metadata } from "next";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { AnimatedSection } from "@/app/components/animated/AnimatedSection";
import { AnimatedCard } from "@/app/components/animated/AnimatedCard";
import { NumberCounter } from "@/app/components/animated/NumberCounter";
import { AlgorithmicBackground } from "@/app/components/home/AlgorithmicBackground";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/app/lib/animations/variants";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        {/* Algorithmic Background */}
        <AlgorithmicBackground />

        <div className="max-w-7xl mx-auto text-center relative z-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              variants={staggerItem}
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 text-foreground tracking-tight"
            >
              Leap North
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-primary"
            >
              True North. True Growth.
            </motion.p>
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Transform your business through integrated marketing strategies and intelligent automation,
              delivering measurable growth and operational efficiency.
            </motion.p>
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
                <Link href="/services">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="py-24 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                <NumberCounter end={150} suffix="+" />
              </div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                <NumberCounter end={98} suffix="%" />
              </div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                <NumberCounter end={50} suffix="+" />
              </div>
              <p className="text-muted-foreground">Team Members</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for modern businesses looking to grow and scale efficiently
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={staggerItem}>
              <AnimatedCard>
                <Card className="h-full border-border bg-accent hover:border-primary transition-colors duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <CardTitle className="text-2xl mb-2">Marketing & Growth</CardTitle>
                    <CardDescription>Drive measurable results with data-driven marketing strategies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>SEO & Content Marketing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Paid Advertising (Google, Meta, LinkedIn)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Social Media Management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Email Marketing & Automation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Conversion Rate Optimization</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </motion.div>

            <motion.div variants={staggerItem}>
              <AnimatedCard>
                <Card className="h-full border-border bg-accent hover:border-primary transition-colors duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <CardTitle className="text-2xl mb-2">Business Automation</CardTitle>
                    <CardDescription>Scale operations with intelligent automation systems</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Workflow Automation (Zapier, Make, n8n)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>CRM Implementation & Optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>AI Integration (chatbots, content generation)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Data Integration & Analytics Setup</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Custom API Development</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <Button size="lg" asChild variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Let's discuss how we can help you achieve your growth goals through marketing and automation.
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
