"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  { name: "Intel", slug: "intel" },
  { name: "Google", slug: "google" },
  { name: "Rogers", slug: "rogers" },
  { name: "Telus", slug: "telus" },
  { name: "BMW", slug: "bmw" },
  { name: "Ford", slug: "ford" },
  { name: "IBM", slug: "ibm" },
  { name: "John Deere", slug: "john-deere" },
  { name: "Pandora", slug: "pandora" },
  { name: "Indigo", slug: "indigo" },
  { name: "Canadian Cancer Society", slug: "canadian-cancer-society" },
  { name: "Chick-fil-A", slug: "chick-fil-a" },
  { name: "Kawai", slug: "kawai" },
  { name: "Merz Pharma", slug: "merz-pharma" },
  { name: "Compeed", slug: "compeed" },
  { name: "Mederma", slug: "mederma" },
  { name: "Vertex Pharmaceuticals", slug: "vertex-pharmaceuticals" },
];

function LogoSet() {
  return (
    <>
      {companies.map((company, index) => (
        <div
          key={`${company.slug}-${index}`}
          className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
        >
          <Image
            src={`/images/logos/${company.slug}.${['telus', 'merz-pharma', 'compeed'].includes(company.slug) ? 'png' : 'svg'}`}
            alt={`${company.name} logo`}
            width={120}
            height={48}
            className={
              company.slug === 'pandora' || company.slug === 'canadian-cancer-society' || company.slug === 'mederma'
                ? 'h-10 object-contain'
                : company.slug === 'vertex-pharmaceuticals'
                ? 'h-14 object-contain'
                : 'h-12 object-contain'
            }
            style={{
              width: 'auto',
              height: company.slug === 'pandora' || company.slug === 'canadian-cancer-society' || company.slug === 'mederma'
                ? '2.5rem'
                : company.slug === 'vertex-pharmaceuticals'
                ? '3.5rem'
                : '3rem'
            }}
          />
        </div>
      ))}
    </>
  );
}

export function LogoSlider() {
  return (
    <div className="w-full py-12 overflow-hidden border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider">
          Brands We've Worked With
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Sliding logos container with two identical sets */}
        <motion.div
          className="flex gap-16"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          style={{
            width: "max-content",
          }}
        >
          <div className="flex gap-16 items-center flex-shrink-0">
            <LogoSet />
          </div>
          <div className="flex gap-16 items-center flex-shrink-0">
            <LogoSet />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
