import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X, User, Loader2, Stethoscope } from "lucide-react";
import axios from "axios";

const ChatSupport = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message to chat history
    const newMessages = [...messages, { text: inputMessage, role: "user" }];
    setMessages(newMessages);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://dr-atrivizi-personal-chat-bot.vercel.app/chat",
        { message: inputMessage }
      );

      const botResponse =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm here to help!";

      // Add bot response to chat history
      setMessages([...newMessages, { text: botResponse, role: "bot" }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { text: "Error fetching response. Please try again.", role: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Support Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors"
        >
          {isChatOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </motion.div>

      {/* Chat Support Window */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isChatOpen ? 1 : 0, y: isChatOpen ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl z-40 ${
          isChatOpen ? "block" : "hidden"
        }`}
      >
        <div className="p-4 border-b border-emerald-100 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-emerald-900">
            Chat Support
          </h3>
          <Stethoscope className="w-6 h-6 text-emerald-700" />
        </div>

        {/* Chat Messages */}
        <div className="h-96 p-4 overflow-y-auto bg-emerald-50 space-y-3">
          {messages.length === 0 ? (
            <p className="text-center text-emerald-700">
              Start a conversation with us!
            </p>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "bot" && (
                  <Stethoscope className="w-5 h-5 text-emerald-700 mr-2" />
                )}
                <div
                  className={`p-3 rounded-lg max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-emerald-500 text-white ml-auto"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.role === "user" && (
                  <User className="w-5 h-5 text-gray-500 ml-2" />
                )}
              </div>
            ))
          )}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-600">
              <Stethoscope className="w-5 h-5 text-emerald-700" />
              <Loader2 className="w-5 h-5 animate-spin" />
              <p>Typing...</p>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-emerald-100 flex">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="ml-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
          >
            Send
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ChatSupport;
