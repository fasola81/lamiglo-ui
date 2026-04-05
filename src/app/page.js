'use client';

import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Process from './components/Process';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedMesh from './components/AnimatedMesh';

export default function Home() {
  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AnimatedMesh />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Showcase />
        <Testimonials />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
