"use client";

import Image from "next/image";

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
            src={`/images/logos/${company.slug}.${company.slug === 'telus' ? 'png' : 'svg'}`}
            alt={`${company.name} logo`}
            width={120}
            height={48}
            className={company.slug === 'pandora' || company.slug === 'canadian-cancer-society' ? 'h-10 object-contain' : 'h-12 object-contain'}
            style={{ width: 'auto', height: company.slug === 'pandora' || company.slug === 'canadian-cancer-society' ? '2.5rem' : '3rem' }}
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
        <div className="slider-container">
          <div className="slider-track">
            <div className="slider-content">
              <LogoSet />
            </div>
            <div className="slider-content" aria-hidden="true">
              <LogoSet />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-container {
          width: 100%;
          overflow: hidden;
        }

        .slider-track {
          display: flex;
          gap: 4rem;
          width: max-content;
          animation: scroll 30s linear infinite;
        }

        .slider-content {
          display: flex;
          gap: 4rem;
          align-items: center;
          flex-shrink: 0;
        }

        @keyframes scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .slider-track:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .slider-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
