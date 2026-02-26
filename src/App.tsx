/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
