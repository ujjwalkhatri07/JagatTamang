import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const artworks = [
  {
    title: "Traditional Portrait",
    medium: "Oil on Canvas",
    size: "24 x 36 in",
    image: "/images/art1.jpg",
    description: "A culturally rich portrait capturing traditional attire with deep tones and expressive realism."
  },
  {
    title: "Forest Stream",
    medium: "Oil on Canvas",
    size: "18 x 24 in",
    image: "/images/art2.jpg",
    description: "A tranquil landscape where light and water blend to create a peaceful natural atmosphere."
  },
  {
    title: "Gurung Village",
    medium: "Oil on Canvas",
    size: "24 x 36 in",
    image: "/images/art3.jpg",
    description: "A scenic depiction of rural Nepal, highlighting culture and mountain life."
  }
];

export default function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden font-serif">

      {/* Cursor Glow */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white opacity-10 blur-lg pointer-events-none z-50"
        style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
      />

      {/* Hero (Refined) */}
      <section className="h-[90vh] flex flex-col justify-center items-center text-center px-6 relative">
        <div className="absolute inset-0 bg-[url('/images/art1.jpg')] bg-cover bg-center opacity-25 blur-sm scale-110" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-[0.25em] uppercase leading-tight">
            Jagat Tamang
          </h1>

          <p className="mt-6 text-gray-400 tracking-[0.3em] text-sm uppercase">
            Digital Art Exhibition
          </p>

          <a
            href="#gallery"
            className="mt-12 inline-block px-8 py-3 border border-white hover:bg-white hover:text-black transition duration-500 tracking-widest text-sm"
          >
            Enter Exhibition
          </a>

          <div className="mt-16 text-gray-500 text-xs tracking-widest animate-bounce">
            ↓ Scroll to Explore
          </div>
        </motion.div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl text-center mb-16 tracking-[0.3em] uppercase text-gray-300">
          Collection
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {artworks.map((art, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="mt-3 opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-sm tracking-wide">{art.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center p-6 z-50"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-5xl w-full text-center"
            >
              <img
                src={artworks[selectedIndex].image}
                className="w-full max-h-[75vh] object-contain rounded-lg"
              />

              <div className="mt-6">
                <h3 className="text-2xl tracking-wide">
                  {artworks[selectedIndex].title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {artworks[selectedIndex].medium}
                </p>
                <p className="text-gray-500 text-sm">
                  {artworks[selectedIndex].size}
                </p>
                <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                  {artworks[selectedIndex].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-xs text-gray-400">
          <div>
            <h3 className="text-white mb-3 tracking-widest text-sm">Jagat Tamang</h3>
            <p>Visual artist exploring realism, culture, and emotion.</p>
          </div>

          <div>
            <h3 className="text-white mb-3 tracking-widest text-sm">Contact</h3>
            <p>Email: tamangjagar509@gmail.com</p>
            <p>Phone: +1 416-834-7097</p>
          </div>

          <div>
            <h3 className="text-white mb-3 tracking-widest text-sm">Social</h3>
            <p>Instagram: @jagat6923</p>
            <p>TikTok: Jagat Tamang</p>
          </div>
        </div>

        <div className="text-center text-gray-600 pb-6 text-xs tracking-wide">
          © {new Date().getFullYear()} Jagat Tamang — Exhibition
        </div>
      </footer>
    </div>
  );
}
