
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Minimize2, Maximize2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar } from '@/components/ui/avatar';
import { Sparkles } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI shopping assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      let botResponse: string;
      
      if (message.toLowerCase().includes('size') || message.toLowerCase().includes('fit')) {
        botResponse = "Based on your previous purchases, I recommend a size M for tops and 32 for pants. Would you like me to show you items in these sizes?";
      } else if (message.toLowerCase().includes('recommend') || message.toLowerCase().includes('suggestion')) {
        botResponse = "I see you've been browsing casual wear! I'd recommend our new AI-Enhanced Smart Casual Shirt paired with Sustainable Denim Jeans. They would go perfectly with your recent shoe purchase!";
      } else if (message.toLowerCase().includes('discount') || message.toLowerCase().includes('sale')) {
        botResponse = "We currently have a 15% discount on our Sustainable Denim collection! Would you like to see the items on sale?";
      } else if (message.toLowerCase().includes('shipping') || message.toLowerCase().includes('delivery')) {
        botResponse = "We offer free shipping on orders over $50. Standard delivery takes 3-5 business days, and express delivery is available for an additional $10.";
      } else {
        botResponse = "I'd be happy to help with that! Our AI-powered recommendations are personalized based on your style preferences. Would you like me to suggest some products for you?";
      }
      
      const botMessageObj: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessageObj]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-brand-purple hover:bg-brand-purple-dark shadow-lg flex items-center justify-center"
        aria-label="Open chat assistant"
      >
        <Bot className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div
      className={`fixed right-6 ${
        isMinimized ? 'bottom-6 h-14' : 'bottom-6 h-[500px]'
      } w-[350px] bg-background rounded-xl shadow-xl border flex flex-col transition-all duration-300 overflow-hidden z-50`}
    >
      {/* Chat header */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-brand-purple text-white">
        <div className="flex items-center">
          <Avatar className="h-8 w-8 border border-white/20 bg-brand-purple-dark">
            <Bot className="h-4 w-4" />
          </Avatar>
          <div className="ml-3">
            <h3 className="font-medium text-sm flex items-center">
              Shopping Assistant
              <Sparkles className="ml-1 h-3 w-3" />
            </h3>
            <span className="text-xs opacity-75">Online</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-white hover:bg-white/10 hover:text-white"
            onClick={() => setIsMinimized(!isMinimized)}
            aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-white hover:bg-white/10 hover:text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-4 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto' : 'mr-auto'
                }`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-brand-purple text-white'
                      : 'bg-muted'
                  }`}
                >
                  {msg.content}
                </div>
                <div
                  className={`text-xs mt-1 text-muted-foreground ${
                    msg.sender === 'user' ? 'text-right' : ''
                  }`}
                >
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t">
            <div className="flex">
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="rounded-r-none"
              />
              <Button className="rounded-l-none bg-brand-purple hover:bg-brand-purple-dark" type="submit">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex mt-2 px-1">
              <Button type="button" variant="ghost" size="sm" className="text-xs h-7 flex-1 text-muted-foreground">
                <ShoppingBag className="h-3 w-3 mr-1" /> View Cart
              </Button>
              <Button type="button" variant="ghost" size="sm" className="text-xs h-7 flex-1 text-muted-foreground">
                <Sparkles className="h-3 w-3 mr-1" /> Get Recommendations
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ChatAssistant;
