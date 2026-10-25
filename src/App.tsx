/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { CTFEvents } from './components/CTFEvents';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0e0207] text-[#fff5f8] flex flex-col selection:bg-[#e6007a] selection:text-white">
      {/* Floating glass navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CTFEvents />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
