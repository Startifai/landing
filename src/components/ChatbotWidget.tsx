import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { MessageCircle, X, Send, Minimize2 } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! 👋 Soy tu asistente virtual de Startifai. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleOpenChatbot = () => {
      setIsOpen(true);
      setIsMinimized(false);
    };

    window.addEventListener('openChatbot', handleOpenChatbot);
    return () => window.removeEventListener('openChatbot', handleOpenChatbot);
  }, []);

  const suggestedQuestions = [
    "¿Cómo funciona Startifai?",
    "¿Cuánto cuesta?",
    "¿Puedo probarlo gratis?",
    "¿Qué integraciones tienen?"
  ];

  const botResponses: { [key: string]: string } = {
    "default": "Gracias por tu mensaje. Un asistente está revisando tu consulta. También puedes explorar nuestros planes o contactarnos directamente.",
    "funciona": "Startifai te permite crear asistentes de IA personalizados en minutos. Solo necesitas configurar la personalidad, conocimiento y canales. ¡Sin código! ¿Quieres ver una demo?",
    "costo": "Tenemos planes desde $0 (prueba gratis 30 días) hasta $249/mes con todas las funciones. ¿Te gustaría ver los detalles de cada plan?",
    "gratis": "¡Sí! Ofrecemos 30 días de prueba gratuita sin necesidad de tarjeta de crédito. Puedes explorar todas las funciones y decidir después.",
    "integraciones": "Nos integramos con WhatsApp, Google Calendar, Calendly, y más. También ofrecemos API para integraciones personalizadas. ¿Necesitas alguna integración específica?"
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("funciona") || lowerMessage.includes("cómo")) {
      return botResponses.funciona;
    }
    if (lowerMessage.includes("costo") || lowerMessage.includes("precio") || lowerMessage.includes("cuánto")) {
      return botResponses.costo;
    }
    if (lowerMessage.includes("gratis") || lowerMessage.includes("prueba") || lowerMessage.includes("free")) {
      return botResponses.gratis;
    }
    if (lowerMessage.includes("integra") || lowerMessage.includes("conecta") || lowerMessage.includes("whatsapp")) {
      return botResponses.integraciones;
    }
    
    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#000005] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 group border-2 border-[#FF6A00]"
      >
        <MessageCircle className="w-8 h-8 text-[#FF6A00]" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6A00] rounded-full border-2 border-white animate-pulse"></span>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿Necesitas ayuda? Chatea con nosotros
        </div>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden transition-all duration-300 ${
      isMinimized ? 'h-16' : 'h-[600px]'
    }`}>
      {/* Header */}
      <div className="bg-[#000005] p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 border-2 border-[#FF6A00]">
            <AvatarFallback className="bg-[#FF6A00] text-white">SA</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-white">Asistente Startifai</h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF6A00] rounded-full animate-pulse"></span>
              <span className="text-xs text-gray-300">En línea</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-[#FF6A00] text-white"
                      : "bg-white text-gray-900 shadow-sm border border-gray-200"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className={`text-xs mt-1 block ${
                    message.sender === "user" ? "text-white/80" : "text-gray-500"
                  }`}>
                    {message.timestamp.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-900 shadow-sm border border-gray-200 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t border-gray-200 bg-white">
              <p className="text-xs text-gray-500 mb-2">Preguntas sugeridas:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full hover:bg-[#FF6A00] hover:text-white transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#FF6A00] text-sm"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by Startifai AI
            </p>
          </div>
        </>
      )}
    </div>
  );
}
