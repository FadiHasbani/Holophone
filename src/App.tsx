import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, Play, ChevronDown, Battery, Cpu, Maximize, Sparkles, Layers } from 'lucide-react';
import HolophoneViewer from './components/HolophoneViewer';

function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-xs font-medium text-gray-300">
        <div className="flex items-center gap-8">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-blue-600 to-purple-400" />
          </a>
          <div className="hidden md:flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Pro</a>
            <a href="#" className="hover:text-white transition-colors">Ultra</a>
            <a href="#" className="hover:text-white transition-colors">Specs</a>
            <a href="#" className="hover:text-white transition-colors">Compare</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a href="#" className="bg-white text-black px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors">Buy</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-14">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.15)_0%,rgba(0,0,0,1)_100%)]" />
      
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-gray-400 mb-4 tracking-wide"
        >
          Meet Holophone.
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 leading-[0.9]"
        >
          See them.<br/>Like they're here.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light"
        >
          The first smartphone with live holographic projection.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button className="px-8 py-3 bg-white text-black rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300">
            Pre-Order
          </button>
          <button className="px-8 py-3 bg-transparent border border-gray-600 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2">
            Watch the Reveal <Play size={18} fill="currentColor" />
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Phone Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-[280px] h-[580px] md:w-[360px] md:h-[740px]"
      >
        <div className="w-full h-full rounded-[3rem] border-[12px] border-gray-800 bg-black relative overflow-hidden shadow-[0_0_100px_rgba(0,100,255,0.2)]">
          {/* Screen content placeholder */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
          
          {/* Hologram emitter glow */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500/40 blur-[60px] rounded-full" />
          
          {/* Beam effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-400/20 via-transparent to-transparent opacity-60" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }} />
          
          {/* Dynamic Island placeholder */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full border border-gray-800" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}

function FeatureA() {
  return (
    <section className="relative py-32 px-6 md:px-12 min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Background: Soft pulsing light */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 leading-[1.1]">
            Presence.<br/>Reinvented.
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Experience conversations like never before. The Holophone uses an advanced micro-photonic array to project a real-time, high-fidelity 3D hologram of the person you're calling. It's not just a call; it's a visit.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="relative h-[500px] md:h-[600px] rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 overflow-hidden flex items-center justify-center"
        >
          {/* Abstract representation of a hologram */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,150,255,0.15)_0%,transparent_70%)]" />
          <motion.div 
            animate={{ 
              boxShadow: ["0px 0px 40px rgba(0,150,255,0.2)", "0px 0px 80px rgba(0,150,255,0.6)", "0px 0px 40px rgba(0,150,255,0.2)"],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-48 h-64 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md flex items-center justify-center"
          >
            <div className="w-32 h-48 rounded-full border border-blue-400/40 bg-blue-400/20 blur-sm" />
          </motion.div>
          {/* Base emitter */}
          <div className="absolute bottom-20 w-32 h-2 bg-blue-500 rounded-full blur-[2px] shadow-[0_0_20px_rgba(0,150,255,1)]" />
        </motion.div>
      </div>
    </section>
  );
}

function FeatureB() {
  return (
    <section className="relative py-32 px-6 md:px-12 min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="relative h-[500px] md:h-[600px] rounded-3xl bg-gradient-to-bl from-gray-900 to-black border border-gray-800 overflow-hidden flex items-center justify-center order-2 md:order-1"
        >
          {/* Abstract presentation hologram */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,150,0.1)_0%,transparent_70%)]" />
          <div className="grid grid-cols-3 gap-4 perspective-[1000px]">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                animate={{ 
                  y: [0, -20, 0],
                  rotateX: [20, 30, 20]
                }}
                transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-40 bg-gradient-to-t from-emerald-500/40 to-transparent rounded-t-lg border-b-4 border-emerald-400 shadow-[0_0_30px_rgba(0,255,150,0.5)]"
              />
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2"
        >
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 leading-[1.1]">
            Present.<br/>Without being there.
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Step into the boardroom from halfway across the world. HoloCast technology captures your movements and expressions in real-time, projecting a life-sized, interactive version of you into any meeting space.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Performance() {
  return (
    <section className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(100,0,255,0.15)_0%,transparent_50%)]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6">Ultra Performance.</h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">Powering the impossible requires a new kind of architecture.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-10 rounded-3xl flex flex-col items-center text-center hover:bg-gray-900 transition-colors"
          >
            <Cpu size={48} className="text-blue-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Custom Holocore Chip</h3>
            <p className="text-gray-400 font-light">The first mobile processor designed specifically for real-time 3D spatial rendering and photonic emission.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-10 rounded-3xl flex flex-col items-center text-center hover:bg-gray-900 transition-colors"
          >
            <Battery size={48} className="text-emerald-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">All-Day Battery</h3>
            <p className="text-gray-400 font-light">A revolutionary high-density graphene battery ensures your holograms don't leave you in the dark.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-10 rounded-3xl flex flex-col items-center text-center hover:bg-gray-900 transition-colors"
          >
            <Sparkles size={48} className="text-purple-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Spatial AI Processor</h3>
            <p className="text-gray-400 font-light">Understands your environment instantly to anchor holograms perfectly to tables, floors, and surfaces.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Design() {
  return (
    <section className="relative py-32 px-6 md:px-12 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        animate={{ 
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.1)_0%,transparent_60%)] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6">Designed to disappear.</h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">The technology is invisible. The experience is undeniable.</p>
        </motion.div>

        <div className="mb-12">
          <HolophoneViewer />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-gray-800 to-black border border-gray-800 rounded-3xl p-12 h-[400px] md:h-[500px] flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="relative z-10">
              <Layers size={32} className="text-gray-300 mb-4" />
              <h3 className="text-3xl font-semibold mb-2">Aerospace-grade aluminum.</h3>
              <p className="text-gray-400">Forged from a single block of custom alloy for unprecedented strength and lightness.</p>
            </div>
            {/* Abstract metal texture */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />
          </motion.div>

          <div className="grid grid-rows-2 gap-6 h-[400px] md:h-[500px]">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
            >
              <Maximize size={28} className="text-gray-300 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Edge-to-edge display.</h3>
              <p className="text-gray-400 text-sm">A seamless expanse of glass that melts into the frame.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,100,255,0.3)]">
                <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(255,255,255,1)]" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Invisible projection lens.</h3>
              <p className="text-gray-400 text-sm max-w-[60%]">Hidden beneath the display, waiting to illuminate your world.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6">Choose your Holophone.</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 border border-gray-800 rounded-3xl p-10 flex flex-col"
        >
          <h3 className="text-3xl font-semibold mb-2">Holophone Pro</h3>
          <p className="text-gray-400 mb-8">The ultimate holographic experience.</p>
          <div className="mb-8">
            <span className="text-5xl font-semibold">$1,499</span>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-gray-300"><ChevronRight size={18} className="text-blue-500"/> 6.1" Edge-to-edge display</li>
            <li className="flex items-center gap-3 text-gray-300"><ChevronRight size={18} className="text-blue-500"/> Holocore Chip</li>
            <li className="flex items-center gap-3 text-gray-300"><ChevronRight size={18} className="text-blue-500"/> Standard Holographic Projection</li>
            <li className="flex items-center gap-3 text-gray-300"><ChevronRight size={18} className="text-blue-500"/> 24-hour battery life</li>
          </ul>
          <button className="w-full py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-200 transition-colors">
            Buy
          </button>
          <p className="text-center text-sm text-gray-500 mt-4">From $62.45/mo. for 24 mo.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-black border border-blue-500/30 rounded-3xl p-10 flex flex-col relative overflow-hidden shadow-[0_0_50px_rgba(0,100,255,0.1)]"
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600" />
          <h3 className="text-3xl font-semibold mb-2">Holophone Ultra</h3>
          <p className="text-gray-400 mb-8">For those who demand the impossible.</p>
          <div className="mb-8">
            <span className="text-5xl font-semibold">$1,999</span>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-gray-300"><ChevronRight size={18} className="text-blue-500"/> 6.7" Edge-to-edge display</li>
            <li className="flex items-center gap-3 text-gray-300"><ChevronRight size={18} className="text-blue-500"/> Holocore Pro Chip</li>
            <li className="flex items-center gap-3 text-gray-300"><ChevronRight size={18} className="text-blue-500"/> Cinema-grade Holographic Projection</li>
            <li className="flex items-center gap-3 text-gray-300"><ChevronRight size={18} className="text-blue-500"/> 36-hour battery life</li>
          </ul>
          <button className="w-full py-4 bg-blue-600 text-white rounded-full font-medium text-lg hover:bg-blue-700 transition-colors">
            Buy
          </button>
          <p className="text-center text-sm text-gray-500 mt-4">From $83.29/mo. for 24 mo.</p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm">
          <div>
            <h4 className="text-white font-medium mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Holophone Pro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Holophone Ultra</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">HoloCloud</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HoloCare+</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Environment</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-900 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © 2026 Holophone Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <FeatureA />
        <FeatureB />
        <Performance />
        <Design />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
