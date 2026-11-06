// All copy comes from "ARTHASS Full Website Copy-Paste Content Pack" (v1.0).
// Keep every string editable here (or later move to a CMS / API).

export const site = {
  name: "ARTHASS",
  descriptor: "Digital Growth & Creative",
  tagline: "Strategy. Production. Performance.",
  footerLine: "For a smarter, stronger digital presence.",
  primaryCta: { label: "Book a Growth Consultation", href: "#contact" },
  social: {
    facebook: "https://www.facebook.com/share/1VNBVPMx3A/",
    instagram: "https://www.instagram.com/arthass.digital?exln=aHp3YmV4MXdjaHpn",
    linkedin: "https://www.linkedin.com/company/arthass/",
    youtube: "#", // [OFFICIAL YOUTUBE URL]
  },
  contact: {
    phone: "+91 9149104660",
    email: "contact@arthass.com",
    whatsapp: "", // [WHATSAPP LINK]
    serviceArea: "Mathura and Agra; remote projects considered where suitable.",
    hours: "", // [CONFIRMED BUSINESS HOURS]
  },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#approach" },
  { label: "Our Clients", href: "#clients" },
  { label: "Services", href: "#services" },
  { label: "Industries We Support", href: "#work" },
  { label: "Resources", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "SCHOOLS & COLLEGES • STRATEGY • CREATIVE • GROWTH",
  titleLead: "Digital growth for",
  titleLine2: "schools &",
  titleAccent: "colleges.",
  body: "ARTHASS connects strategy, creative production and performance marketing to help educational institutions strengthen their digital presence, communicate their value and attract relevant audiences. We build connected marketing systems around your goals not disconnected activities.",
  primaryCta: "Book a Growth Consultation",
  secondaryCta: "Explore Our Work",
  badges: ["Build Visibility", "Generate Demand", "Drive Growth"],
};

export const approach = {
  eyebrow: "The ARTHASS approach",
  heading: "One connected system. Three growth engines.",
  items: [
    {
      icon: "lightbulb",
      tone: "violet",
      title: "Strategy",
      text: "We start by understanding your business, audience, offer and growth challenge. The result is a clearer direction, focused priorities and a plan tied to meaningful business objectives.",
    },
    {
      icon: "play",
      tone: "red",
      title: "Production",
      text: "We turn strategy into communication people can see, understand and remember—from photography and video to social content, campaign creative and digital experiences.",
    },
    {
      icon: "chart",
      tone: "green",
      title: "Performance",
      text: "We help distribute the right message through suitable channels, measure what happens next and use the evidence to improve the work over time.",
    },
  ],
};

export const services = {
  heading: "Everything you need to grow digitally",
  sub: "Explore our complete range of strategy, development, advertising and creative services. Choose what you need, or let us connect the right mix around your goals.",
  items: [
    { icon: "compass", tone: "violet", title: "Growth Strategy", text: "Build a clearer plan for your marketing: audience, message, channel priorities and measurable objectives.", href: "#contact" },
    { icon: "camera", tone: "red", title: "Creative Production", text: "Photography, video, reels, campaign assets and brand content that tell your story.", href: "#contact" },
    { icon: "megaphone", tone: "green", title: "Performance Marketing", text: "Plan, launch and improve paid campaigns with clear objectives and appropriate tracking.", href: "#contact" },
    { icon: "search", tone: "red", title: "SEO & Local Search", text: "Help relevant audiences find your business through technical foundations and useful content.", href: "#contact" },
    { icon: "globe", tone: "violet", title: "Websites & Landing Pages", text: "A clear digital destination that explains your offer and guides visitors to a useful next step.", href: "#contact" },
    { icon: "share", tone: "green", title: "Social Content Systems", text: "Move from random posting to a purposeful content system with audience-led themes.", href: "#contact" },
    { icon: "funnel", tone: "violet", title: "Lead Generation", text: "Make enquiries easier to capture, route and review through forms, tracking and follow-up.", href: "#contact" },
    { icon: "globe", tone: "green", title: "App Development", text: "Build mobile applications that make your services easier to access and use.", href: "#contact" },
    { icon: "megaphone", tone: "red", title: "Google Ads", text: "Reach people actively searching for your products or services with targeted Google campaigns.", href: "#contact" },
    { icon: "share", tone: "violet", title: "Meta Ads", text: "Run audience-focused campaigns across Facebook and Instagram to build awareness and generate enquiries.", href: "#contact" },
    { icon: "play", tone: "green", title: "Video Production", text: "Create polished videos, reels and campaign content that bring your brand story to life.", href: "#contact" },
    { icon: "camera", tone: "red", title: "AI Image Creation", text: "Generate original AI-assisted visuals for your brand, campaigns and social content.", href: "#contact" },
  ],
};

// The content pack says: do NOT invent client names, case studies or results.
// So this section shows the industries ARTHASS serves. When approved projects exist,
// pass them to <Work projects={...} /> in the same shape (title, tags, image).
export const industries = {
  heading: "Industries We Support",
  sub: "Education is our primary focus, especially schools and colleges. We also support selected organisations in hospitality, tourism and real estate with relevant strategy, creative and digital capabilities.",
  cta: "Discuss a project",
  items: [
    { title: "Education Growth Marketing", tags: "Strategy | Creative | Digital", image: "/industries/education.png", scene: "education", tone: "violet" },
    { title: "Hospitality & Tourism", tags: "Strategy | Creative | Marketing", image: "/industries/hospitality.png", scene: "hospitality", tone: "green" },
    { title: "Real Estate Marketing", tags: "Design | Development | Marketing", image: "/industries/real-estate.png", scene: "real-estate", tone: "red" },
  ],
};

// Empty on purpose: the pack forbids invented testimonials.
// Add approved ones like: { name, role, quote, photo }
export const testimonials = [];

export const process = {
  heading: "How we work",
  sub: "A clear, collaborative process keeps the work focused—from understanding your goals to learning what to improve next.",
  steps: [
    { icon: "search", title: "Discover", text: "We learn about your organisation, audience, goals and current challenges." },
    { icon: "compass", title: "Plan", text: "Together, we agree priorities, messaging, channels, deliverables and success measures." },
    { icon: "camera", title: "Create", text: "We produce the content and digital assets shaped by the agreed plan." },
    { icon: "megaphone", title: "Launch", text: "We publish or activate approved work across the selected channels." },
    { icon: "chart", title: "Measure", text: "We review relevant performance signals and the quality of enquiries." },
    { icon: "trend", title: "Improve", text: "We use what we learn to refine the creative, targeting and next cycle." },
  ],
};

export const faqs = {
  heading: "Common questions",
  items: [
    { q: "What does ARTHASS do?", a: "ARTHASS connects marketing strategy, creative production and performance-led digital marketing. Depending on the agreed scope, this can include content, photo/video production, social media, SEO, paid campaigns, websites and enquiry workflows." },
    { q: "Can I combine multiple services?", a: "Yes. We can combine strategy, development, advertising and creative production into a connected plan, or work on a specific service based on your goals." },
    { q: "Does ARTHASS guarantee leads or admissions?", a: "No responsible marketing partner can guarantee admissions or sales independently of market conditions, institutional reputation, pricing, offer quality, follow-up and other factors. We focus on clear strategy, agreed deliverables, tracking and continuous improvement." },
    { q: "Where does ARTHASS operate?", a: "Our initial focus is Mathura and Agra, with expansion towards NCR when appropriate. Remote collaboration may be possible depending on the project scope." },
    { q: "How can we start?", a: "Use the enquiry form to share your organisation, location, objective and current challenge. We can then determine whether a consultation is the right next step." },
  ],
};

export const cta = {
  heading: "Ready to Take Your Digital Growth to the Next Level?",
  body: "Tell us what growth needs to look like for your business. Share your current challenge and the outcome you want to improve.",
  button: "Book a Growth Consultation",
};

export const contactForm = {
  heading: "Tell us what you want your marketing to achieve.",
  intro: "Share a little about your organisation, your current challenge and the outcome you want to improve. We will review the context and determine whether there is a sensible next step.",
  sectors: ["Education", "Hospitality & Tourism", "Real Estate", "Other"],
  submit: "Send Enquiry",
  privacy: "Please share only information needed to understand your enquiry. Do not submit sensitive personal information or confidential records through this form.",
  draft: "Your email app should open with your enquiry. Review it and press Send there; the enquiry has not been sent yet.",
  error: "This form cannot send enquiries yet because a receiving email address has not been configured. No information was sent.",
};

export const footer = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#approach" },
    { label: "Industries We Support", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  services: ["Growth Strategy", "Creative Production", "Performance Marketing", "SEO & Local Search", "Websites & Landing Pages", "Social Content Systems", "Lead Generation", "App Development", "Google Ads", "Meta Ads", "Video Production", "AI Image Creation"],
  education: {
    eyebrow: "For schools & colleges",
    heading: "Digital growth for educational institutions.",
    text: "Help families discover what makes your school or college special. From admissions campaigns and campus storytelling to websites and local visibility, we connect the right marketing work to your institution's goals.",
    links: ["Admissions campaigns", "School & college branding", "Campus photo & video", "Websites & local search"],
    cta: "Discuss your institution",
  },
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
};
