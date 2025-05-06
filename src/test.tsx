'use client';

import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import 'keen-slider/keen-slider.min.css';

const config = defineConfig({
  cssVarsRoot: ":where(:root, :host)",
})

const system = createSystem(defaultConfig, config)

export default function Home() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 15 },
  });

  return (
    <ChakraProvider value={system}>
    <main className="min-h-screen p-10 bg-white text-black">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-20">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hello, I&apos;m Zoe.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            A Mechatronics Engineer with a passion for Software.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/headshot.jpg"
            alt="Zoe"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Web Dev Section */}
      <section className="py-10">
        <h2 className="text-3xl font-semibold mb-6">Web Development</h2>
        <div ref={sliderRef} className="keen-slider">
          {['/images/denisewilsonwebsite.png', '/images/thetreehousewebsite.png'].map((src, i) => (
            <div key={i} className="keen-slider__slide">
              <Image
                src={src}
                alt={`Project ${i + 1}`}
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>

      
      {/* Languages Section */}
      <section className="py-10">
        <h2 className="text-3xl font-semibold mb-6">Languages</h2>
        
      </section>


      {/* Projects Section */}
      <section className="py-10">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      </section>


      {/* Contact Section */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold mb-6">Get in contact</h2>
      </section>

    </main>
    </ChakraProvider>
  );
}
