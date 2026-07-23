/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import heroWomanOrangeBgImg from './assets/images/woman_orange_blue_jacket_1784770783697.jpg';
import eldecoPoolImg from './assets/images/eldeco_pool_accurate_1784766897768.jpg';
import bgImg from './assets/images/hero_woman_orange_bg_1784770579197.jpg';
import logoBwImg from './assets/images/ritz_logo_bw_1784770431711.jpg';
import topoMapImg from './assets/images/topo_map_pattern_1784771121131.jpg';

const servicesList = [
  "DIGITAL MARKETING",
  "CREATIVE SERVICES",
  "PRINT ADVERTISING",
  "RADIO ADVERTISING",
  "CONTENT MARKETING",
  "CELEBRITY ENDORSEMENTS"
];

const wordCloudRows = [
  [
    { text: "DIGITAL MARKETING", size: "text-2xl md:text-3xl" },
    { text: "CREATIVE SERVICE", size: "text-3xl md:text-4xl" },
    { text: "PRINT ADVERTISEMENT", size: "text-4xl md:text-5xl" },
    { text: "RADIO ADVERTISEMENT", size: "text-3xl md:text-4xl" },
  ],
  [
    { text: "CONTENT MARKETING", size: "text-3xl md:text-4xl" },
    { text: "WEB DEVELOPMENT", size: "text-2xl md:text-3xl" },
    { text: "INFLUENCER MARKETING", size: "text-3xl md:text-4xl" },
    { text: "CELEBRITY ENDORSEMENT", size: "text-3xl md:text-5xl" },
  ],
  [
    { text: "CREATIVE SERVICE", size: "text-3xl md:text-4xl" },
    { text: "PRINT ADVERTISEMENT", size: "text-2xl md:text-3xl" },
    { text: "CELEBRITY ENDORSEMENT", size: "text-4xl md:text-5xl" },
    { text: "RADIO ADVERTISEMENT", size: "text-3xl md:text-4xl" },
  ],
  [
    { text: "INFLUENCER MARKETING", size: "text-3xl md:text-5xl" },
    { text: "DIGITAL MARKETING", size: "text-2xl md:text-3xl" },
    { text: "WEB DEVELOPMENT", size: "text-3xl md:text-4xl" },
    { text: "CONTENT MARKETING", size: "text-2xl md:text-3xl" },
  ]
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const testimonialRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: testimonialScroll } = useScroll({
    target: testimonialRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax values for the testimonial section
  const textY = useTransform(testimonialScroll, [0, 1], ["10%", "-10%"]);
  const imageY = useTransform(testimonialScroll, [0, 1], ["20%", "-20%"]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-black text-white selection:bg-yellow-500/30">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 bg-[#04050f] border-b border-white/10">
        {/* Logo */}
        <div className="flex items-center text-2xl font-bold tracking-tight">
          <span className="text-[#D4A347]">RITZ MEDIA&nbsp;</span>
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #D4A347' }}>
            W
          </span>
          <span className="relative flex items-center justify-center w-5 h-5 mx-0.5 rounded-full border border-[#D4A347]">
            <svg className="w-2.5 h-2.5 ml-0.5 fill-[#D4A347]" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #D4A347' }}>
            RLD
          </span>
        </div>

        {/* Links & Hamburger */}
        <div className="flex items-center gap-12">
          <div className="hidden md:flex items-center gap-8 text-xs tracking-widest font-medium uppercase text-neutral-300">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Get in touch</a>
          </div>
          
          {/* Custom Hamburger Icon */}
          <button className="flex flex-col gap-1.5 items-end group w-8">
            <div className="w-full h-[2px] bg-white transition-all group-hover:w-full"></div>
            <div className="w-2/3 h-[2px] bg-white transition-all group-hover:w-full"></div>
            <div className="w-full h-[2px] bg-white transition-all group-hover:w-full"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section (Empty/Black for now) */}
      <main className="flex-1 bg-black min-h-[50vh]">
        {/* Intentionally left blank as per "Do not add any background for now" */}
      </main>

      {/* Bottom Section */}
      <section id="about" className="bg-[#e4e4e4] text-black px-8 py-16 md:py-24 relative overflow-hidden">
        {/* Topo map pattern background */}
        <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none" style={{
            backgroundImage: `url(${topoMapImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }} />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 uppercase">
              We create desire through
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 italic font-medium leading-relaxed">
              The world's largest independent brand agency. We drive growth, standout and fandom for the world's most desirable brands.
            </p>
          </div>
          
          <motion.button 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3 bg-white hover:bg-neutral-50 text-black px-6 py-3 rounded-full font-bold text-sm tracking-wide shadow-sm flex-shrink-0 border border-neutral-200"
          >
            About US
            <span className="bg-black text-white p-1 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </motion.button>
        </div>
      </section>

      {/* Services List Section */}
      <section id="work" className="bg-white text-black py-24 md:py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full">
            {servicesList.map((service, index) => {
              const num = String(index + 1).padStart(2, '0');
              return (
                <motion.div 
                  key={service}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-baseline justify-center gap-4 md:gap-6 cursor-pointer"
                >
                  <span className="text-sm md:text-lg font-bold text-[#b0b0b0] group-hover:text-black transition-colors duration-300 text-right">
                    {num}
                  </span>
                  <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-bold text-[#cfcfcf] group-hover:text-black group-hover:font-black group-hover:scale-105 origin-center transition-all duration-300 tracking-tight leading-none">
                    {service}
                  </h2>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Parallax Section */}
      <section className="bg-white py-12 md:py-24 flex justify-center w-full px-8">
        <div ref={containerRef} className="w-full max-w-2xl lg:max-w-4xl aspect-[4/5] md:aspect-[16/10] relative overflow-hidden">
          <motion.img 
            src={heroWomanOrangeBgImg} 
            alt="Woman in Orange and Blue Jacket" 
            style={{ y }}
            className="w-full h-[130%] object-cover absolute top-[-15%] left-0"
          />
        </div>
      </section>

      {/* Testimonial Parallax Section */}
      <section ref={testimonialRef} className="bg-[#fafafa] text-black py-24 md:py-32 px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 uppercase">
              WHAT CLIENTS SAY
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 font-medium">
              The world's largest independent brand agency. We drive growth,
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
            {/* Left Content (Text) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2 flex flex-col items-start relative z-10"
            >
              <motion.div style={{ y: textY }} className="w-full flex flex-col items-start">
                {/* Quote Mark */}
              <div className="text-[#633a2a] text-8xl md:text-[8rem] font-serif leading-none h-16 md:h-24 mb-6">
                &ldquo;
              </div>
              <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-10 text-neutral-800">
                They not only make sure that they deliver on their promises, but also educate you on what exactly is needed to be done for your brand, thereby preventing you from under or over spending your precious m...
              </p>
              <div className="mb-12">
                <h4 className="text-xl font-bold tracking-wide uppercase mb-1">ELDECO GROUP</h4>
                <p className="text-sm text-neutral-500 font-bold uppercase tracking-wider">MANAGING DIRECTOR</p>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ccc]" />
                <div className="w-12 h-2 rounded-full bg-[#e0e0e0] border border-[#ccc]" />
                <div className="w-2 h-2 rounded-full bg-[#ccc]" />
                <div className="w-2 h-2 rounded-full bg-[#ccc]" />
              </div>
              </motion.div>
            </motion.div>

            {/* Right Content (Image) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full md:w-1/2 flex justify-center md:justify-end"
            >
              <motion.div style={{ y: imageY }} className="w-full max-w-[280px] sm:max-w-sm lg:max-w-md aspect-[3/4] relative shadow-2xl">
                <img 
                  src={eldecoPoolImg} 
                  alt="Eldeco Group Pool" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 z-10 text-[#006e40] font-black tracking-widest text-xl">
                  ELDECO
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Word Cloud Section */}
      <section className="relative bg-[#9c3912] py-24 md:py-32 overflow-hidden flex flex-col gap-6 md:gap-10 justify-center text-center w-full min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <img src={bgImg} alt="Woman Typing Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#5a1a02]/60 to-[#2a0a02]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {wordCloudRows.map((row, rowIdx) => (
          <div key={rowIdx} className="relative z-10 flex whitespace-nowrap overflow-hidden w-full">
            <motion.div 
              className="flex gap-8 md:gap-16 items-center px-4 w-max"
              animate={{ x: rowIdx % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: rowIdx % 2 === 0 ? 40 : 35 }}
            >
              {[...row, ...row, ...row].map((item, idx) => (
                <span 
                  key={`${rowIdx}-${idx}`} 
                  className={`${item.size} font-black uppercase text-[#a87b6d] hover:text-white transition-colors duration-300 cursor-pointer`}
                >
                  {item.text}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0b1120] text-white pt-24 pb-8 px-8 relative overflow-hidden">
        {/* Giant Logo Background */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[800px] opacity-15 select-none pointer-events-none z-0">
          <img src={logoBwImg} alt="Ritz Media World Logo" className="w-full h-full object-contain mix-blend-screen" />
          <div className="absolute inset-0 bg-blue-600 mix-blend-color"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 text-center md:text-left">
            {/* Left Column */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="text-xs text-neutral-400 mb-2">Connect</h4>
              <a href="#" className="text-sm font-bold hover:text-amber-500 transition-colors uppercase tracking-wider">GET IN TOUCH</a>
              <a href="#" className="text-sm font-bold hover:text-amber-500 transition-colors uppercase tracking-wider">INSTAGRAM</a>
              <a href="#" className="text-sm font-bold hover:text-amber-500 transition-colors uppercase tracking-wider">LINKEDIN</a>
              <a href="#" className="text-sm font-bold hover:text-amber-500 transition-colors uppercase tracking-wider">TWITTER</a>
              <a href="#" className="text-sm font-bold hover:text-amber-500 transition-colors uppercase tracking-wider">YOUTUBE</a>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col items-center gap-4">
              <a href="#" className="text-2xl font-bold hover:text-amber-500 transition-colors uppercase tracking-widest">HOME</a>
              <a href="#work" className="text-2xl font-bold hover:text-amber-500 transition-colors uppercase tracking-widest">WORK</a>
              <a href="#about" className="text-2xl font-bold hover:text-amber-500 transition-colors uppercase tracking-widest">ABOUT</a>
              <a href="#work" className="text-2xl font-bold hover:text-amber-500 transition-colors uppercase tracking-widest">SERVICES</a>
              
              {/* Fake Logos */}
              <div className="flex items-center gap-4 mt-8 bg-white/5 p-3 rounded-sm border border-white/10">
                <div className="text-[10px] font-bold bg-white text-blue-900 px-2 py-1 tracking-tight">INS</div>
                <div className="text-[10px] font-bold text-white flex flex-col items-start leading-none"><span className="text-blue-400 flex items-center gap-1"><span className="text-lg leading-none">&infin;</span> Meta</span><span className="text-[8px] font-normal tracking-wide">Business Partner</span></div>
                <div className="text-[10px] font-bold text-white flex flex-col items-start leading-none"><span className="text-red-500 flex items-center gap-1"><span className="text-lg leading-none">G</span></span><span className="text-[8px] font-normal tracking-wide">Partner</span></div>
                <div className="text-[9px] font-black text-white border-2 border-white px-2 py-0.5 tracking-widest">MSME</div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
              <h4 className="text-xs text-neutral-400 mb-1">Email</h4>
              <a href="mailto:info@ritzmediaworld.com" className="text-sm font-bold hover:text-amber-500 transition-colors">info@ritzmediaworld.com</a>
              
              <h4 className="text-xs text-neutral-400 mt-6 mb-1">Phone No.</h4>
              <p className="text-sm font-bold">+919220516777 | +917290002168</p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
            <div className="text-6xl md:text-7xl font-black tracking-tighter">RITZ</div>
            <div className="text-center text-[9px] md:text-xs font-bold text-neutral-400 uppercase tracking-widest leading-loose max-w-2xl">
              DIGITAL MARKETING &bull; CONTENT MARKETING &bull; INFLUENCER MARKETING<br/>
              WEB DEVELOPMENT &bull; CREATIVE SERVICES &bull; PRINT ADVERTISEMENT
            </div>
            <div className="text-6xl md:text-7xl font-black tracking-tighter">MEDIA WORLD</div>
          </div>

          <div className="text-center text-xs text-neutral-600 font-medium">
            &copy; 2026 Ritz Media World. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

