import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const artworks = [
  {
    title: "Traditional Portrait - Oil Painting",
    medium: "Oil on Canvas",
    size: "24 x 36 in",
    image: "/images/art1.jpg",
    description: "Colors Used: A culturally rich portrait capturing traditional attire with deep tones and expressive realism."
  },
  {
    title: "Traditional Portrait - Oil Painting",
    medium: "Oil on Canvas",
    size: "18 x 24 in",
    image: "/images/art2.jpg",
    description: "Colors Used: Burnt Sienna, Raw Umber, Yellow Ochre, Titanium White, Ivory Black, Ultramarine Blue, Sap Green, and Earth tones"
  },
  {
    title: "Forest Stream Landscape",
    medium: "Oil on Canvas",
    size: "18 x 24 in",
    image: "/images/art3.jpg",
    description: "Colors Used: Sap Green, Viridian Green, Olive Green, Yellow Ochre, Burnt Umber, Titanium White, Ivory Black, and touches of Ultramarine Blue"
  },
  {
    title: "Gandruk Gurung Village (Nepal)",
    medium: "Oil on Canvas",
    size: "24 x 36 in",
    image: "/images/art4.jpg",
    description: "Style: Landscape / Nature Painting"
  },
  {
    title: "Smiling Nepalese women ",
    medium: "charcoal on paper",
    size: "29.7× 42 cm ( A3)",
    image: "/images/art5.jpg",
    description: "Style: realistic potrait/ charcoal drawing"
  },
  {
    title: "Actress Miruna Magar ( cultural dress) ",
    medium: "oil in canvas",
    size: "18× 24 inch ",
    image: "/images/art6.jpg",
    description: "Realistic portrait / Traditional Portrait Painting"
  },
  {
    title: "Crested Serpent Eagle ",
    medium: "oil in canvas",
    size: "36 × 48 inches",
    image: "/images/art7.jpg",
    description: "Style: Realistic wildlife art Layered oil painting with fine brush detailing"
  },
  {
    title: "Aamadablam mountain journey ( Nepal)",
    medium: "Acrylic colour on Canvas",
    size: "24× 36inches",
    image: "/images/art8.jpg",
    description: "Style: Realistic / Monochrome Landscape Layered  acrylic  painting with knife detailing "
  },
  ,
  {
    title: "Aamadablam mountain journey ( Nepal)",
    medium: "oil in canvas",
    size: "18× 24inches",
    image: "/images/art9.jpg",
    description: "Style: Realistic / figurative art/ cultural and traditional life Layered oil painting with brush detailing "
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
        <div className="absolute inset-0 bg-[url('/images/art8.jpg')] bg-cover bg-center opacity-25 blur-sm scale-110" />

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
            Digital Art Gallery
          </p>

        
          {/* Commission CTA */}
          <a
            href="#contact"
            className="mt-10 inline-block px-8 py-3 bg-white text-black hover:bg-gray-200 transition duration-500 tracking-widest text-sm uppercasemt-10 inline-flex items-center px-8 py-3 bg-white text-black text-sm uppercase tracking-widest font-medium rounded-full shadow-md border border-gray-200 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-black/20mt-10 inline-flex items-center px-8 py-3 bg-white text-black font-serif text-sm uppercase tracking-widest font-medium rounded-full shadow-md border border-gray-200 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Request Custom Artwork
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

      <section className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/images/artist.png"
            alt="Jagat Tamang"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl mb-6 tracking-widest uppercase">
            The Artist
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            Based in Toronto, Jagat Tamang is a visual artist with over 20 years
            of experience working across oil, acrylic, and pencil mediums. His
            work explores realism, cultural identity, and emotional depth through
            portraits and landscapes.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            Each artwork reflects a strong connection to tradition and
            storytelling, blending technical precision with expressive detail to
            create immersive visual experiences.
          </p>

          <p className="text-gray-500 tracking-widest">— Jagat Tamang</p>
        </div>
      </section>

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
