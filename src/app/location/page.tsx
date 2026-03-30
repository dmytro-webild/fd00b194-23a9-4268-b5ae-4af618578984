"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function LocationPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="aurora"
        cardStyle="outline"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Home", id: "/" },
              { name: "Services", id: "/#features" },
              { name: "About", id: "/#about" },
              { name: "Location", id: "/location" },
              { name: "Contact", id: "/#contact" },
            ]}
            brandName="MPE Services"
          />
        </div>

        <div id="location-content" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-8">Our Location</h1>
          <p className="mb-10 text-lg">Visit our office in Doha for any maintenance inquiries or to speak with our team directly.</p>
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.565152200388!2d51.5295!3d25.2867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c50c05986873%3A0x673c090333d45672!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sqa!4v1700000000000!5m2!1sen!2sqa"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="MPE Services"
            columns={[
              { title: "Company", items: [{ label: "About", href: "/#about" }, { label: "Services", href: "/#features" }, { label: "Location", href: "/location" }] },
              { title: "Support", items: [{ label: "Call: 7210 8374", href: "tel:72108374" }, { label: "Contact", href: "/#contact" }] },
            ]}
            copyrightText="© 2025 MPE Services | Professional Maintenance"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}