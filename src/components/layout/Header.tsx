import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/ciltriq/", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://www.instagram.com/ciltriq_technologies/", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.facebook.com/share/1CPSmzGhvx/?mibextid=wwXIfr", icon: FaFacebookF, label: "Facebook" },
  { href: "https://x.com/ciltriq", icon: FaXTwitter, label: "X" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md" style={{ zIndex: 100 }}>
        <nav className="container-wide">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/cq_white.png"
                  alt="Ciltriq Technologies"
                  className="h-8 w-auto"
                />
                <span className="text-xl font-semibold tracking-tight">
                  Ciltriq Technologies
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className={`text-sm font-medium transition-colors hover:text-foreground ${location.pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative p-2 text-white"
              style={{ zIndex: 10000 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Moved outside header */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop - covers entire screen with blur */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 md:hidden"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                zIndex: 9998
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar Drawer */}
            <motion.div
              key="sidebar"
              className="fixed top-0 left-0 bottom-0 w-[75vw] max-w-[320px] md:hidden p-6 shadow-2xl border-r border-white/10"
              style={{
                backgroundColor: "rgba(10, 10, 15, 0.85)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                zIndex: 9999
              }}
              variants={{
                closed: { x: "-100%" },
                open: { x: 0 }
              }}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Logo */}
                <div className="mb-12 pl-2">
                  <span className="text-2xl font-bold text-white tracking-tight">

                  </span>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-8 pl-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                    >
                      <Link
                        to={link.href}
                        className="text-xl font-medium text-white/90 hover:text-white transition-colors block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Social Media Icons - Bottom of Sidebar */}
                <div className="mt-auto pt-8 pl-2">
                  <div className="flex items-center gap-4">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all duration-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <social.icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};