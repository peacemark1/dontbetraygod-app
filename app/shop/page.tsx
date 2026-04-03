"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = ["All", "Hoodies", "Tees", "Outerwear", "Accessories"];

const products = [
  { id: 1, name: "Holy Varsity Jacket", category: "Outerwear", image: "/images/editorial/v3_varsity_model.png", model: true },
  { id: 2, name: "REPENT AND OBEY HOODIE", category: "Hoodies", image: "/images/photo_2_2026-04-03_10-09-18.jpg" },
  { id: 3, name: "COVENANT CORE TEE", category: "Tees", image: "/images/photo_3_2026-04-03_10-09-18.jpg" },
  { id: 4, name: "APOSTOLIC LOGO CAP", category: "Accessories", image: "/images/editorial/v2_brand_cap.png" },
  { id: 5, name: "DISCIPLINE HEAVYWEIGHT", category: "Hoodies", image: "/images/photo_12_2026-04-03_10-09-18.jpg" },
  { id: 6, name: "SANDS OF FAITH HOODIE", category: "Hoodies", image: "/images/photo_1_2026-04-03_10-09-18.jpg" },
  { id: 7, name: "PROPHETIC OVERSIZED TEE", category: "Tees", image: "/images/photo_5_2026-04-03_10-09-18.jpg" },
  { id: 8, name: "CROSS-STITCH VARSITY", category: "Outerwear", image: "/images/photo_6_2026-04-03_10-09-18.jpg" },
  { id: 9, name: "GILDED GRACE HOODIE", category: "Hoodies", image: "/images/photo_7_2026-04-03_10-09-18.jpg" },
  { id: 10, name: "ESSENTIAL BELIEVER TEE", category: "Tees", image: "/images/photo_4_2026-04-03_10-09-18.jpg" },
  { id: 11, name: "OATMEAL TRINITY HOODIE", category: "Hoodies", image: "/images/photo_15_2026-04-03_10-09-18.jpg" },
  { id: 12, name: "MIDNIGHT PRAYER HOODIE", category: "Hoodies", image: "/images/photo_13_2026-04-03_10-09-18.jpg" },
  { id: 13, name: "FAITH OVER FEAR HOODIE", category: "Hoodies", image: "/images/photo_17_2026-04-03_10-09-18.jpg" },
  { id: 14, name: "ETERNAL SPIRIT HOODIE", category: "Hoodies", image: "/images/photo_10_2026-04-03_10-09-18.jpg" },
  { id: 15, name: "SACRED VISION HOODIE", category: "Hoodies", image: "/images/photo_14_2026-04-03_10-09-18.jpg" },
  { id: 16, name: "CHOSEN GENERATION PULLOVER", category: "Hoodies", image: "/images/photo_11_2026-04-03_10-09-18.jpg" },
  { id: 17, name: "HEAVENLY HEAVYWEIGHT", category: "Hoodies", image: "/images/photo_16_2026-04-03_10-09-18.jpg" }
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-[#F5F5F5] text-[#0A0A0A] font-[var(--font-inter)] selection:bg-[#FF7F11] selection:text-white">
      
      {/* 🧭 Independent Shop Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-black/5 px-6 lg:px-12 py-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-black lowercase tracking-tighter hover:opacity-70 transition-opacity">
          dontbetraygod<span className="text-[var(--brand-accent)]">.</span>
        </Link>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-black/40">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="text-black">Shop</span>
          <Link href="#" className="hover:text-black transition-colors">Account</Link>
          <div className="relative">
             <span className="hover:text-black transition-colors">Cart</span>
             <span className="absolute -top-2 -right-3 w-4 h-4 bg-[var(--brand-accent)] text-white flex items-center justify-center rounded-full text-[8px]">0</span>
          </div>
        </div>
      </nav>

      {/* 🏷️ Sticky Filter Bar */}
      <div className="pt-32 sticky top-0 z-[90] bg-[#F5F5F5] border-b border-black/5 px-6 lg:px-12 flex items-center justify-between overflow-x-auto no-scrollbar">
         <div className="flex gap-8 py-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative whitespace-nowrap ${
                  activeCategory === cat ? "text-black" : "text-black/30 hover:text-black"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div layoutId="underline" className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--brand-accent)]" />
                )}
              </button>
            ))}
         </div>
         <div className="hidden lg:flex gap-4 text-[10px] font-bold uppercase tracking-widest text-black/30">
            <span>Grid view</span>
            <span className="w-8 h-[1px] bg-black/10 self-center" />
            <span>({filteredProducts.length} items)</span>
         </div>
      </div>

      {/* 🛍️ Product Grid */}
      <section className="px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p, idx) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col"
              >
                <div className="relative aspect-[3/4] bg-white overflow-hidden mb-6 border border-black/5 group-hover:border-black/20 transition-all duration-700 shadow-sm hover:shadow-xl">
                  <Image 
                    src={p.image} 
                    alt={p.name} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {p.model && (
                    <div className="absolute top-6 left-6 bg-black text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg z-10">
                      Editorial Model
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                     <button className="w-full bg-white text-black py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                        Add to Cart
                     </button>
                  </div>
                </div>
                
                <div className="flex justify-between items-start px-2">
                   <div className="flex flex-col">
                      <h3 className="text-[11px] font-bold uppercase tracking-widest text-black/90 group-hover:text-[var(--brand-accent)] transition-colors duration-300">
                        {p.name}
                      </h3>
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/30 mt-1">
                        {p.category} // DBG021
                      </span>
                   </div>
                   <span className="text-[9px] font-bold uppercase tracking-widest text-[#FF7F11]">Lookbook &copy;</span>
                </div>
                
                {/* 1px divider accent */}
                <div className="absolute -bottom-8 left-0 w-8 h-[1px] bg-black/10 group-hover:w-full group-hover:bg-[var(--brand-accent)] transition-all duration-700" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">Coming Soon</p>
          </div>
        )}
      </section>

      {/* 🏁 Footer (Minimal) */}
      <footer className="mt-32 border-t border-black/10 py-24 px-6 lg:px-12 bg-white">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4 lg:pr-24">
             <h4 className="text-4xl font-black lowercase tracking-tighter mb-8">dontbetraygod<span className="text-[var(--brand-accent)]">.</span></h4>
             <p className="max-w-xs text-[10px] font-medium leading-relaxed text-black/40 uppercase tracking-widest">
               Luxury garments built on conviction. Replicating the essential lifestyle through unwavering faith and superior craftsmanship.
             </p>
          </div>
          <div className="col-span-6 lg:col-span-2">
             <h5 className="text-[10px] font-black uppercase tracking-widest mb-6 underline decoration-[var(--brand-accent)] decoration-2">Collections</h5>
             <ul className="flex flex-col gap-3 text-[10px] font-medium text-black/40 uppercase tracking-widest">
               <li className="hover:text-black transition-colors"><Link href="#">Essential Hoodies</Link></li>
               <li className="hover:text-black transition-colors"><Link href="#">Religious Tees</Link></li>
               <li className="hover:text-black transition-colors"><Link href="#">Outerwear</Link></li>
               <li className="hover:text-black transition-colors"><Link href="#">Accessories</Link></li>
             </ul>
          </div>
          <div className="col-span-6 lg:col-span-2">
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
