"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  
  const products = [
    { id: 1, name: "Covenant Core Hoodie", collection: "Ed/01", image: "/images/editorial/v2_brand_core.png" },
    { id: 2, name: "Discipline Heavyweight", collection: "Ed/02", image: "/images/editorial/v2_brand_discipline.png" },
    { id: 3, name: "Quiet Strength Heavy", collection: "Ed/03", image: "/images/editorial/v2_brand_quiet.png" },
    { id: 4, name: "Apostolic Structured Cap", collection: "Ed/04", image: "/images/editorial/v2_brand_cap.png" },
  ];

  const partners = ["RotaShow", "waves", "RotaShow", "travelers.", "goldlines", "velocity 9"];

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#F5F5F5] text-[#0A0A0A] font-[var(--font-inter)] selection:bg-[#FF7F11] selection:text-white">
      
      {/* 🧭 Top Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] grid grid-cols-12 items-center px-6 py-6 border-b border-black/5 backdrop-blur-md">
        <div className="col-span-4 flex gap-4 text-[10px] font-bold uppercase tracking-widest text-black/40">
          <Link href="mailto:dontbetraygod1@gmail.com" className="hover:text-black transition-colors">dontbetraygod1@gmail.com</Link>
          <Link href="tel:+233209088648" className="hover:text-black transition-colors">+233209088648</Link>
        </div>
        <div className="col-span-4 text-center">
          <Link href="/" className="text-xl font-black lowercase tracking-tighter">
            dontbetraygod<span className="text-[var(--brand-accent)]">.</span>
          </Link>
        </div>
        <div className="col-span-4 flex justify-end gap-6 text-[10px] font-bold uppercase tracking-widest">
          <Link href="/shop" className="hover:text-[var(--brand-accent)] transition-colors">Shop</Link>
          <div className="flex gap-2">
            <Link href="https://instagram.com/dontbetraygod" className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center text-[8px] hover:bg-black hover:text-white transition-all">IG</Link>
            <Link href="https://twitter.com/dontbetraygod1" className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center text-[8px] hover:bg-black hover:text-white transition-all">X</Link>
            <Link href="https://wa.me/233209088648" className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center text-[8px] hover:bg-black hover:text-white transition-all">WA</Link>
          </div>
        </div>
      </nav>

      {/* 🖼️ 1. Hero Section (3-Column Asymmetric) */}
      <section className="relative min-h-screen pt-32 px-6 lg:px-12 grid grid-cols-12 gap-0 border-b border-black/5">
        
        {/* LEFT: "where" Typography */}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-center pb-20">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 mb-8 block asterisk">
              [SCROLL DOWN]
            </span>
            <h1 className="text-[10rem] md:text-[14rem] font-[var(--font-bodoni)] italic leading-[0.7] tracking-tightest mt-4">
              where
            </h1>
            <div className="flex items-center gap-4 mt-8 translate-x-12">
              <div className="flex -space-x-2">
                {[1, 2].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F5F5F5] bg-black/10 overflow-hidden">
                    <Image src={`/images/sharp/black_hoodie.png`} alt="User" width={40} height={40} className="object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#F5F5F5] bg-[var(--brand-accent)] flex items-center justify-center text-[10px] text-white font-bold">+</div>
              </div>
            </div>
            <p className="mt-16 max-w-xs text-xs leading-relaxed text-black/60 font-medium tracking-tight">
              From everyday essentials to conviction pieces, our curated collection is designed to celebrate your faith, wherever life takes you.
            </p>
          </motion.div>
        </div>

        {/* CENTER: Main Model Portrait */}
        <div className="col-span-12 lg:col-span-4 relative flex items-center justify-center px-4">
          <Link href="/shop" className="block w-full">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full aspect-[3/4] relative overflow-hidden rounded-[2rem] md:rounded-[4rem] group"
            >
              <Image 
                src="/images/editorial/v2_brand_discipline.png" 
                alt="Don't Betray God Model"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              {/* Corner arrow button */}
              <div className="absolute bottom-10 right-10 w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                <span className="rotate-45 block">↑</span>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* RIGHT: "- a style dontbetraygod" typography */}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-center lg:pl-16">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[8rem] md:text-[11rem] font-bold leading-[0.8] tracking-tightest uppercase mb-4">
              - a style <br/> 
              <span className="gothic-text text-[var(--brand-green)] text-8xl md:text-9xl block py-4">dbgod</span>
            </h2>
            <div className="mt-8 flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/30">// FASHION</span>
              <div className="flex items-baseline gap-4">
                <span className="text-6xl font-bold tracking-tightest">320K</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Influenced <br/> People</span>
              </div>
            </div>
            <div className="mt-20 text-[10px] font-bold uppercase tracking-[0.4em] text-black/80 max-w-xs leading-relaxed">
              Step into effortless <br/> conviction with dbg
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🤝 2. Partner Strip */}
      <section className="border-b border-black/5 px-6 lg:px-12 grid grid-cols-6 items-center divide-x divide-black/10 overflow-x-auto no-scrollbar">
        {partners.map((p, i) => (
          <div key={i} className="py-12 flex items-center justify-center gap-2 group cursor-pointer hover:bg-black/5 transition-colors min-w-[150px]">
             <div className="w-2 h-2 rounded-full border border-black group-hover:bg-[var(--brand-accent)] transition-colors" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/60 group-hover:text-black">{p}</span>
          </div>
        ))}
      </section>

      {/* 🧾 3. Moments Gallery (Asymmetric) */}
      <section className="py-32 px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 pt-32">
             <h3 className="text-8xl md:text-9xl font-bold tracking-tightest uppercase leading-none asterisk">
               It's - about <br/> moments &copy;24
             </h3>
             <p className="mt-12 max-w-xs text-xl font-bold uppercase tracking-widest text-[#FF7F11]">
               (45%)
             </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -20 }}
              className="mt-24 relative aspect-square rounded-[3rem] bg-black/5 overflow-hidden border border-black/5 p-4"
            >
              <Image src="/images/editorial/v2_brand_core.png" alt="Moment 01" fill className="object-cover" />
              <div className="absolute top-8 left-8 text-[10px] font-bold uppercase tracking-widest text-black/40">@international - going distance [2024]</div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-xl rotate-45">↑</div>
            </motion.div>
            
            <motion.div 
               whileHover={{ y: -20 }}
               className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-black/5"
            >
              <Image src="/images/editorial/v2_brand_quiet.png" alt="Moment 02" fill className="object-cover" />
              <div className="absolute top-8 left-8 text-[10px] font-bold uppercase tracking-widest text-white/60">@international - just do it [2024]</div>
              <div className="absolute top-8 right-8 text-[var(--brand-accent)] text-xl font-bold asterisk" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🗣️ 4. Testimonial Header Section */}
      <section className="py-32 bg-white px-6 lg:px-24 grid grid-cols-12 gap-12 items-center">
        <div className="col-span-12 lg:col-span-4 relative aspect-square">
           <div className="absolute inset-0 bg-[var(--brand-accent)] rounded-full translate-x-4 translate-y-4" />
           <div className="relative w-full h-full rounded-full border-[1.5rem] border-white overflow-hidden shadow-2xl">
              <Image src="/images/sharp/black_hoodie.png" alt="Testimonial" fill className="object-cover" />
           </div>
           <div className="absolute top-10 right-0 bg-white px-6 py-2 rounded-full border border-black/5 text-[10px] font-black tracking-widest text-[var(--brand-accent)]">JOIN SHOW</div>
        </div>
        
        <div className="col-span-12 lg:col-span-7 lg:offset-1">
           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 asterisk">[TESTIMONIAL]</span>
           <h4 className="text-5xl md:text-7xl font-bold tracking-tightest leading-[1.1] mt-8">
             Finally, a brand that understands modern elegance! The quality is amazing & I always get when I wear my dbGod.
           </h4>
           <div className="mt-12 flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">GOLDLINES</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">VELOCITY 9</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">"</span>
           </div>
        </div>
      </section>

      {/* 🧾 5. Bottom Collection Strip */}
      <section id="shop" className="py-32 px-6 lg:px-12 border-t border-black/5">
        <div className="flex justify-between items-end mb-16">
          <h5 className="text-[8rem] font-bold tracking-tightest uppercase asterisk">Collection</h5>
          <div className="flex gap-4 mb-4">
            <span className="w-8 h-[1px] bg-black/10" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Discover dbGod [2025]</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p) => (
             <Link href="/shop" key={p.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-black/5 rounded-[2rem] overflow-hidden mb-6 group-hover:rounded-[3rem] transition-all duration-500">
                   <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute bottom-6 left-6 text-white text-[10px] font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">
                      Shop &rarr;
                   </div>
                </div>
                <div className="flex justify-between items-center px-4">
                   <div className="flex flex-col">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">({p.collection})</span>
                     <span className="text-xs font-bold uppercase tracking-widest mt-1">{p.name}</span>
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF7F11]">Lookbook &copy;</span>
                </div>
                <div className="w-full h-[1px] bg-black/5 mt-4 group-hover:bg-[var(--brand-accent)] transition-colors" />
             </Link>
           ))}
        </div>
      </section>

      {/* 📜 Manifesto Section (The conviction) */}
      <section className="py-40 px-6 lg:px-24 bg-white border-y border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[var(--brand-accent)]">Manifesto // Ed/01</span>
            <h2 className="text-5xl md:text-8xl font-black lowercase tracking-tighter leading-[0.85] max-w-4xl">
              Faith is not <span className="text-outline">fashion</span>. It is identity. Conviction is not <span className="text-outline">quiet</span>. It is worn.
            </h2>
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-black/40 uppercase tracking-widest">
              Don't Betray God is a declaration. A rejection of the lukewarm. We build garments for those who stand in the gap between the sacred and the street. Every thread is a testimony. Every silhouette is a fortress.
            </p>
            <div className="flex gap-12 mt-12">
               <div className="flex flex-col gap-2">
                  <span className="text-3xl font-black">2024</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">Established in Faith</span>
               </div>
               <div className="flex flex-col gap-2">
                  <span className="text-3xl font-black">∞</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">Unwavering Commitment</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✉️ Newsletter (Join the Conviction) */}
      <section className="py-48 px-6 text-center bg-[#F5F5F5] relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-black/10" />
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto flex flex-col items-center gap-8"
         >
            <h3 className="text-4xl font-black lowercase tracking-tighter">Join the Conviction<span className="text-[var(--brand-accent)]">.</span></h3>
            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 leading-relaxed">
              Sign up for early access to the next drop and exclusive editorial content from the DBG collective.
            </p>
            <div className="w-full flex gap-2 border-b border-black/20 pb-4 mt-8 focus-within:border-[var(--brand-accent)] transition-colors">
               <input 
                 type="email" 
                 placeholder="ENTER YOUR EMAIL" 
                 className="bg-transparent w-full text-center text-[10px] font-black tracking-[0.4em] outline-none placeholder:text-black/20"
               />
               <button className="text-[10px] font-black uppercase tracking-widest hover:text-[var(--brand-accent)] transition-colors">Join</button>
            </div>
         </motion.div>
      </section>


      {/* 🏁 Footer (Standardized) */}
      <footer className="mt-32 border-t border-black/10 py-24 px-6 lg:px-12 bg-white">
        <div className="grid grid-cols-12 gap-12 text-left">
          <div className="col-span-12 lg:col-span-4 lg:pr-24">
             <h4 className="text-4xl font-black lowercase tracking-tighter mb-8">dontbetraygod<span className="text-[var(--brand-accent)]">.</span></h4>
             <p className="max-w-xs text-[10px] font-medium leading-relaxed text-black/40 uppercase tracking-widest">
               Luxury garments built on conviction. Replicating the essential lifestyle through unwavering faith and superior craftsmanship.
             </p>
          </div>
          <div className="col-span-6 lg:col-span-3">
             <h5 className="text-[10px] font-black uppercase tracking-widest mb-6 underline decoration-[var(--brand-accent)] decoration-2">Collections</h5>
             <ul className="flex flex-col gap-3 text-[10px] font-medium text-black/40 uppercase tracking-widest">
               <li className="hover:text-black transition-colors"><Link href="/shop">Essential Hoodies</Link></li>
               <li className="hover:text-black transition-colors"><Link href="/shop">Religious Tees</Link></li>
               <li className="hover:text-black transition-colors"><Link href="/shop">Outerwear</Link></li>
               <li className="hover:text-black transition-colors"><Link href="/shop">Accessories</Link></li>
             </ul>
          </div>
          <div className="col-span-6 lg:col-span-3">
             <h5 className="text-[10px] font-black uppercase tracking-widest mb-6 underline decoration-[var(--brand-accent)] decoration-2">Connect</h5>
             <ul className="flex flex-col gap-3 text-[10px] font-medium text-black/40 uppercase tracking-widest">
               <li className="hover:text-black transition-colors"><Link href="https://instagram.com/dontbetraygod">Instagram (@dontbetraygod)</Link></li>
               <li className="hover:text-black transition-colors"><Link href="https://tiktok.com/@dont.betray.god7">TikTok (dont.betray.god7)</Link></li>
               <li className="hover:text-black transition-colors"><Link href="https://twitter.com/dontbetraygod1">X (@dontbetraygod1)</Link></li>
               <li className="hover:text-black transition-colors"><Link href="https://wa.me/233209088648">WhatsApp (+233209088648)</Link></li>
               <li className="hover:text-black transition-colors lowercase mt-2"><Link href="mailto:dontbetraygod1@gmail.com">dontbetraygod1@gmail.com</Link></li>
             </ul>
          </div>
          <div className="col-span-12 lg:col-span-2 flex justify-end items-end">
             <p className="text-[8rem] md:text-[10rem] font-black text-black/5 leading-none lowercase select-none">dbg.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}