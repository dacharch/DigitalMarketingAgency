import React from "react";
import "./Services.css";
import {
  Video,
  Edit3,
  Search,
  Brush,
  Megaphone,
  Globe,
  Smartphone,
  MessageSquare,
  TrendingUp,
  Funnel,
  PlayCircle,
  User,
} from "lucide-react";

const services = [
  { icon: <Video />, text: "Content Creation", desc: "We create engaging content that builds brand presence and connects with your audience." },
  { icon: <PlayCircle />, text: "Video Editing", desc: "Professional video editing that makes your reels, ads, and promos look premium and impactful." },
  { icon: <Edit3 />, text: "Content Writing", desc: "High-quality content writing for websites, blogs, ads, and social media to boost engagement." },
  { icon: <Search />, text: "Content Research", desc: "In-depth research to ensure your content is accurate, trending, and valuable to your audience." },
  { icon: <Brush />, text: "Graphic Designing", desc: "Creative designs for social media, branding, ads, and marketing materials that stand out." },
  { icon: <Megaphone />, text: "Meta Ads", desc: "High-converting Facebook & Instagram ad campaigns to generate leads and sales." },
  { icon: <Globe />, text: "Web Development", desc: "We build fast, modern, and responsive websites that convert visitors into customers." },
  { icon: <Smartphone />, text: "App Development", desc: "Custom Android and iOS app development to bring your business directly into users’ hands." },
  { icon: <MessageSquare />, text: "Bulk SMS", desc: "Reach thousands of customers instantly with targeted and reliable bulk SMS campaigns." },
  { icon: <TrendingUp />, text: "SEO Optimization", desc: "Rank higher on Google and drive organic traffic with our expert SEO strategies." },
  { icon: <Funnel />, text: "Sales Funnels", desc: "We create high-converting funnels that turn visitors into leads and leads into customers." },
  { icon: <User />, text: "UGC Videos", desc: "Authentic user-generated style videos that build trust and improve ad performance." },
];

const Services = () => {
  return (
    <section id="services" className="service-container">
      <div className="service-header">
        <h2>Our Best Services</h2>
        <p>What we offer to grow your business</p>
      </div>

      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.text}</h3>
            <p>{service.desc}</p>

            <button className="read-more-btn">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;