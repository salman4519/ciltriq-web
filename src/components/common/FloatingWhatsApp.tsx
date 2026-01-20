import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export const FloatingWhatsApp = () => {
    const [isHovered, setIsHovered] = useState(false);
    const phoneNumber = "9562019132";
    const message = "Hello! I'm interested in your services.";

    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999]">
            {/* Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium"
                    >
                        Chat with us
                        <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white"></span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* WhatsApp Button */}
            <motion.a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20b858] transition-colors cursor-pointer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label="Chat on WhatsApp"
            >
                {/* Subtle pulse ring */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-[ping_2s_ease-in-out_infinite] opacity-30"></span>

                {/* Icon */}
                <FaWhatsapp className="relative z-10 text-2xl md:text-3xl" />
            </motion.a>
        </div>
    );
};
