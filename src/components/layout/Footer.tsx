import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-semibold tracking-tight">
              Ciltriq
            </Link>
            <p className="mt-4 body-md max-w-sm">
              Engineering business systems that eliminate chaos and unlock sustainable growth.
            </p>
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
