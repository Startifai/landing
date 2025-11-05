import { useState, useEffect, useRef } from "react";
import { Send, Plus, Mic } from "lucide-react";
import { motion } from "motion/react";
import robotGif from "figma:asset/43491f30901c6d1cdf29226bfc496769983d6598.png";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  isTyping?: boolean;
}

export function ChatDemoSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const chatMessagesRef = useRef<HTMLDivElement>(null);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const botResponse1 = "Hola, soy Starti. En Startifai somos especialistas en estrategias de automatización para empresas.";
  const botResponse2 = "¿Quieres conocer lo que te podemos ofrecer?";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (!hasAnimated) {
              setHasAnimated(true);
              // Start the bot response after animation completes
              setTimeout(() => {
                startBotResponse();
              }, 1000);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startBotResponse = () => {
    // Add initial typing indicator
    setMessages([{ id: "typing", text: "", isBot: true, isTyping: true }]);
    
    // Scroll to bottom when messages appear
    setTimeout(() => {
      chatMessagesRef.current?.scrollTo({
        top: chatMessagesRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }, 100);
    
    // After typing delay, show the first message
    setTimeout(() => {
      setMessages([
        { id: "1", text: botResponse1, isBot: true }
      ]);
      
      // Scroll to show new message
      setTimeout(() => {
        chatMessagesRef.current?.scrollTo({
          top: chatMessagesRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
      
      // Add typing indicator for second message
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { id: "typing2", text: "", isBot: true, isTyping: true }
        ]);
        
        // Scroll to show typing indicator
        setTimeout(() => {
          chatMessagesRef.current?.scrollTo({
            top: chatMessagesRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }, 100);
        
        // Show second message
        setTimeout(() => {
          setMessages(prev => [
            prev[0], // Keep first message
            { id: "2", text: botResponse2, isBot: true }
          ]);
          
          // Scroll to show final message
          setTimeout(() => {
            chatMessagesRef.current?.scrollTo({
              top: chatMessagesRef.current.scrollHeight,
              behavior: 'smooth'
            });
          }, 100);
        }, 1500);
      }, 800);
    }, 2000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white pb-20 lg:pb-32 overflow-hidden"
    >
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #a0a0a0 1.5px, transparent 1.5px),
            linear-gradient(to bottom, #a0a0a0 1.5px, transparent 1.5px)
          `,
          backgroundSize: '150px 150px',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Robot GIF */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[566px]">
              <img 
                src={robotGif}
                alt="Starti AI Robot"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Chat Interface */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              {/* Chat Messages */}
              <div 
                ref={chatMessagesRef}
                className="px-6 py-8 min-h-[450px] max-h-[550px] overflow-y-auto"
              >
                {/* Spinning Orange Orb - Initially centered */}
                {messages.length === 0 && (
                  <div className="flex items-center justify-center min-h-[400px]">
                    <div className="relative w-64 h-64 flex items-center justify-center">
                      <motion.div
                        className="absolute w-32 h-32 rounded-full"
                        style={{
                          background: "radial-gradient(circle at 40% 40%, rgba(255,106,0,0.9), rgba(255,140,0,0.6), rgba(255,180,0,0.3))",
                          filter: "blur(20px)",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <motion.div
                        className="absolute w-24 h-24 rounded-full"
                        style={{
                          background: "radial-gradient(circle at 30% 30%, rgba(255,106,0,1), rgba(255,140,0,0.8))",
                          filter: "blur(8px)",
                        }}
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <motion.div
                        className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#ff6a00] to-[#ff8c33]"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                  </div>
                )}
                
                {/* Messages appear below the orb */}
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-5 py-3 ${
                          message.isBot
                            ? "bg-gray-50 border border-gray-100"
                            : "bg-gradient-to-br from-[#ff6a00] to-[#ff8533]"
                        }`}
                      >
                        {message.isTyping ? (
                          <div className="flex gap-1.5 py-2">
                            <div className="w-2 h-2 bg-[#ff6a00] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                            <div className="w-2 h-2 bg-[#ff6a00] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                            <div className="w-2 h-2 bg-[#ff6a00] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                          </div>
                        ) : (
                          <p className={`text-sm ${message.isBot ? "text-gray-700" : "text-white"} font-['Poppins',_sans-serif]`}>
                            {message.text}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Input */}
              <div className="px-6 py-5 border-t border-gray-100 bg-white">
                <div 
                  className="relative rounded-full px-5 py-3 flex items-center gap-3 bg-gray-50 border border-gray-200"
                >
                  <button className="text-gray-400 hover:text-gray-700 transition-colors">
                    <Plus className="w-5 h-5" />
                  </button>
                  
                  <div className="flex-1 flex items-center gap-3">
                    <span className="text-gray-400 text-sm font-['Poppins',_sans-serif]">Respuesta</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-gray-700 transition-colors">
                      <Mic className="w-5 h-5" />
                    </button>
                    <button className="bg-[#000005] rounded-full p-2.5 hover:bg-gray-800 transition-colors">
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
