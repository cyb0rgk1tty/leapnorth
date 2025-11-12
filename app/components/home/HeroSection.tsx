"use client";

import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/app/lib/animations/variants";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            variants={staggerItem}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-foreground"
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
  );
}
