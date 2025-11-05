import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ChatDemoSection } from "./components/ChatDemoSection";
import { AboutSection } from "./components/AboutSection";
import { TeamCarouselSection } from "./components/TeamCarouselSection";
import { ProblemSection } from "./components/ProblemSection";
import { ServicesSection } from "./components/ServicesSection";
import { VisualParallaxSection } from "./components/VisualParallaxSection";
import { UniversoIaSection } from "./components/UniversoIaSection";
import { Footer } from "./components/Footer";
import { ChatbotWidget } from "./components/ChatbotWidget";
import { AuthView } from "./components/AuthView";

// Matrix Rain Effect Component
function MatrixRain() {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = 'rgba(0, 0, 5, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#FF6A00';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        // Gradient effect - naranja
        const gradient = ctx.createLinearGradient(x, y - fontSize * 10, x, y);
        gradient.addColorStop(0, 'rgba(255, 106, 0, 0)');
        gradient.addColorStop(0.5, 'rgba(255, 106, 0, 0.5)');
        gradient.addColorStop(1, 'rgba(255, 106, 0, 1)');
        ctx.fillStyle = gradient;
        
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      id="matrix-canvas"
      className="fixed inset-0 pointer-events-none z-50"
      style={{ opacity: 1 }}
    />
  );
}

export default function App() {
  const [activeView, setActiveView] = useState<"nosotros" | "universo" | "auth">("nosotros");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Listen for navigation changes from Navbar
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#marketplace") {
        if (activeView !== "universo") {
          setIsTransitioning(true);
          setTimeout(() => {
            setActiveView("universo");
            // Scroll to top when entering Universo IA
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => setIsTransitioning(false), 1500);
          }, 100);
        }
      } else if (window.location.hash === "#auth") {
        if (activeView !== "auth") {
          setIsTransitioning(true);
          setTimeout(() => {
            setActiveView("auth");
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => setIsTransitioning(false), 1500);
          }, 100);
        }
      } else {
        if (activeView !== "nosotros") {
          setIsTransitioning(true);
          setTimeout(() => {
            setActiveView("nosotros");
            setTimeout(() => setIsTransitioning(false), 1500);
          }, 100);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeView]);

  // Listen for auth view open events
  useEffect(() => {
    const handleOpenAuth = () => {
      window.location.hash = "#auth";
    };

    window.addEventListener('openAuthModal', handleOpenAuth);
    return () => window.removeEventListener('openAuthModal', handleOpenAuth);
  }, []);

  const handleCloseAuth = () => {
    window.location.hash = "";
  };

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Matrix Transition Effect */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-[#000005]"
          >
            <MatrixRain />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {activeView === "auth" ? (
          <motion.div
            key="auth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50"
          >
            <AuthView onClose={handleCloseAuth} />
          </motion.div>
        ) : (
          <>
            <Navbar />
            {activeView === "nosotros" ? (
              <motion.div
                key="nosotros"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="min-h-screen bg-white">
                  <main>
                    <HeroSection />
                    <ChatDemoSection />
                    <AboutSection />
                    <TeamCarouselSection />
                    <ProblemSection />
                    <ServicesSection />
                    <VisualParallaxSection />
                  </main>
                  <Footer />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="universo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="min-h-screen bg-[#0e0e11]"
              >
                <div className="pt-20">
                  <UniversoIaSection />
                </div>
              </motion.div>
            )}
            <ChatbotWidget />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
