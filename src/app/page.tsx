"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Award, Droplet, Droplets, Zap } from "lucide-react";

export default function LandingPage() {
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
        { name: "Home", id: "hero" },
        { name: "Services", id: "features" },
        { name: "About", id: "about" },
        { name: "Location", id: "/location" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="MPE Services"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{ variant: "gradient-bars" }}
      title="Excellence in Maintenance, 24/7"
      description="MPE Services delivers professional plumbing and electrical maintenance across Qatar. Luxury care, 5-star reliability."
      buttons={[{ text: "Call Now", href: "tel:72108374" }]}
      mediaItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgPWZ0BZZJN7WGA5KukUvigqPy/uploaded-1774910755537-dxv11c7n.jpg?_wi=1", imageAlt: "Plumbing Maintenance" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgPWZ0BZZJN7WGA5KukUvigqPy/uploaded-1774910755537-0aitgmbo.jpg?_wi=1", imageAlt: "Electrical Panel Maintenance" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgPWZ0BZZJN7WGA5KukUvigqPy/uploaded-1774910755537-n16pzxk2.jpg?_wi=1", imageAlt: "Plumbing Sink Installation" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgPWZ0BZZJN7WGA5KukUvigqPy/uploaded-1774910755538-kau9bufo.jpg?_wi=1", imageAlt: "Wall-hung Toilet Installation" },
        { imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721526.jpg?_wi=1", imageAlt: "Water Pump Services" },
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="MPE Services: Qatar's Maintenance Experts"
      description="We are committed to providing premium electrical and plumbing maintenance for residential and commercial properties. Our team offers 24/7 support with gold-standard workmanship."
      subdescription="With 5-star reviews and expert technicians, we ensure your facilities operate smoothly."
      icon={Award}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgPWZ0BZZJN7WGA5KukUvigqPy/uploaded-1774910755537-0aitgmbo.jpg?_wi=2"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="depth-3d"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        { title: "Plumbing & Drains", description: "Reliable plumbing repair and professional drain cleaning to keep your systems flowing.", icon: Droplets, mediaItems: [{ imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgPWZ0BZZJN7WGA5KukUvigqPy/uploaded-1774910755537-dxv11c7n.jpg?_wi=2" }, { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgPWZ0BZZJN7WGA5KukUvigqPy/uploaded-1774910755537-n16pzxk2.jpg?_wi=2" }] },
        { title: "Electrical Systems", description: "Expert electrical maintenance, troubleshooting, and safety inspections for all property types.", icon: Zap, mediaItems: [{ imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgPWZ0BZZJN7WGA5KukUvigqPy/uploaded-1774910755537-0aitgmbo.jpg?_wi=3" }, { imageSrc: "http://img.b2bpic.net/free-photo/assembly-electrical-panel-electrician-job-robot-with-wires-circuit-breakers_169016-2106.jpg" }] },
        { title: "Water Pumps & Heaters", description: "Precision installation and repair for water heaters and high-performance pumping systems.", icon: Droplet, mediaItems: [{ imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgPWZ0BZZJN7WGA5KukUvigqPy/uploaded-1774910755538-kau9bufo.jpg?_wi=2" }, { imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721526.jpg?_wi=2" }] },
      ]}
      title="Our Professional Services"
      description="Comprehensive maintenance solutions for your property."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "emergency", badge: "24/7 Urgent", price: "Call Us", subtitle: "Immediate response for critical maintenance.", features: ["Priority 24/7 Support", "Rapid Deployment", "Expert Diagnostic"], buttons: [{ text: "Contact Now", href: "tel:72108374" }] },
        { id: "regular", badge: "Routine", price: "Custom Quote", subtitle: "Scheduled maintenance for peace of mind.", features: ["Monthly Inspection", "Preventative Care", "Report Documentation"], buttons: [{ text: "Get Quote", href: "#contact" }] },
      ]}
      title="Maintenance Plans"
      description="Select the plan that keeps your facility worry-free."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="blur-reveal"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Ahmed K.", role: "Property Manager", testimonial: "Excellent service and very prompt response. Highly recommended!", imageSrc: "http://img.b2bpic.net/free-photo/smiley-colleagues-work-break-time_23-2149308456.jpg" },
        { id: "2", name: "Sarah J.", role: "Homeowner", testimonial: "Professional electrical work. They resolved the issue quickly and cleaned up perfectly.", imageSrc: "http://img.b2bpic.net/free-photo/male-suit-showing-thumb-up_23-2148112210.jpg" },
        { id: "3", name: "Omar F.", role: "Business Owner", testimonial: "Very knowledgeable team. Our water heaters were fixed the same day.", imageSrc: "http://img.b2bpic.net/free-photo/real-estate-office-desk_23-2147653308.jpg" },
        { id: "4", name: "Khalid M.", role: "Tenant", testimonial: "Best plumbing service in Qatar. Polite, fast, and reliable.", imageSrc: "http://img.b2bpic.net/free-photo/woman-working-office-computer_1303-31490.jpg" },
        { id: "5", name: "Fatima A.", role: "Villa Owner", testimonial: "Exceptional care and attention to detail. True maintenance experts.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgPWZ0BZZJN7WGA5KukUvigqPy/uploaded-1774910755538-dolkwt4f.jpg" },
      ]}
      title="5-Star Client Feedback"
      description="Hear why our clients trust MPE Services for their maintenance needs."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "Do you offer 24/7 service?", content: "Yes, our team is available 24/7 for all plumbing and electrical emergencies." },
        { id: "2", title: "What areas do you serve?", content: "We proudly serve clients across Qatar with professional maintenance." },
        { id: "3", title: "How can I book a service?", content: "Simply call us at 7210 8374 or contact us through our website." },
      ]}
      title="Frequently Asked Questions"
      description="Answers to common questions about our maintenance services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="MPE Services"
      columns={[
        { title: "Company", items: [{ label: "About", href: "#about" }, { label: "Services", href: "#features" }, { label: "Location", href: "/location" }] },
        { title: "Support", items: [{ label: "Call: 7210 8374", href: "tel:72108374" }, { label: "Contact", href: "#contact" }] },
      ]}
      copyrightText="© 2025 MPE Services | Professional Maintenance"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
