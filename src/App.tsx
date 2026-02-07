/** 
 * @copyright 2025 priyankaPortfolio
 * @license Apache-2.0
 */



/**
 * Node Modules
 */
import { useEffect } from "react";

/** Components
 */
import { Hero } from "@/components/ui/hero";
import { Stats } from "@/components/ui/Stats";  
import {Projects} from "@/components/ui/Projects";
import { About } from '@/components/ui/About';
import { Services } from '@/components/ui/Services';
import { Resume } from '@/components/ui/Resume';
import { Contact } from '@/components/ui/Contact';
import Lenis from 'lenis';

export const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  return (
  <main className='flex flex-col max-w-full-2xl mx-auto p-10 lg:px-15 space-y-20'>
    <Hero />
    <Stats />
    <Projects />
    <About />
    <Services />
    <Resume/>
    <Contact />
  </main>);
};