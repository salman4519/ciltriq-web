import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { Phone, Mail } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services", label: "Operational Diagnostics" },
    { href: "/services", label: "Process Redesign" },
    { href: "/services", label: "Automation" },
  ],
};

const socialLinks = [
  { href: "https://www.linkedin.com/company/ciltriq/", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://www.instagram.com/ciltriq_technologies/", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.facebook.com/share/1CPSmzGhvx/", icon: FaFacebookF, label: "Facebook" },
  { href: "https://x.com/ciltriq", icon: FaXTwitter, label: "X" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-semibold tracking-tight">
              Ciltriq Technologies
            </Link>
            <p className="mt-4 body-md max-w-sm">
              Engineering business systems that eliminate chaos and unlock sustainable growth.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <a
                href="tel:+919562019132"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone size={16} /> +91 9562019132
              </a>
              <a
                href="mailto:ciltriq@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={16} /> ciltriq@gmail.com
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <span className="label-text">Company</span>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <span className="label-text">Services</span>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Ciltriq Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
