import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

// Import your logo assets (replace paths if different)
import logoo from "../assets/logoo.png";

/**
 * Footer link column reusable mini-component
 */
const FooterColumn = ({ title, links }) => (
  <div className="space-y-2 text-sm">
    <h4 className="font-semibold text-white mb-2">{title}</h4>
    <ul className="space-y-1">
      {links.map((l) => (
        <li key={l.label}>
          {/* If you wire up routing, swap <a> for <Link> */}
          <a
            href={l.href}
            className="text-gray-300 hover:text-white transition-colors"
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Main Footer
 */
const Footer = () => {
  // Data arrays keep JSX clean & easy to update
  const codingNinjasLinks = [
    { label: "Careers", href: "#" },
    { label: "Privacy policy", href: "#" },
    { label: "Terms & conditions", href: "#" },
    { label: "Pricing & refund policy", href: "#" },
    { label: "Bug bounty", href: "#" },
    { label: "Review", href: "#" },
    { label: "Press release", href: "#" },
  ];

  const productLinks = [
    { label: "Job Bootcamp", href: "#" },
    { label: "Code 360", href: "#" },
    { label: "Professional Certifications", href: "#" },
    { label: "Student Certifications", href: "#" },
  ];

  const communityLinks = [
    { label: "10X Club", href: "#" },
    { label: "Student Chapters", href: "#" },
    { label: "Hire from us", href: "#" },
  ];

  return (
    <footer className="bg-[#2B1C14] text-gray-300 pt-16 pb-10 px-4 md:px-8 lg:px-20">
      {/* Top grid: Contact + Columns */}
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">
        {/* Contact + Offerings */}
        <div className="space-y-8">
          {/* Main logo */}
          <div className="flex items-center gap-2">
              {logoo && (
                   <img
                       src={logoo}
                       alt="Coding Ninjas"
                       className="h-8 w-auto object-contain"
                   />
               )}
              <span className="text-xl font-bold text-white">codingninjas</span>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-sm">
            <h4 className="font-semibold text-white">Contact us</h4>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-400" />
              <a
                href="tel:18001233598"
                className="hover:text-white transition-colors"
              >
                1800-123-3598
              </a>
            </p>
            <p className="flex items-center gap-2 break-all">
              <FaEnvelope className="text-orange-400" />
              <a
                href="mailto:contact@codingninjas.com"
                className="hover:text-white transition-colors"
              >
                contact@codingninjas.com
              </a>
            </p>
          </div>

          {/* Offerings */}
          <div className="space-y-4 text-sm">
            <h4 className="font-semibold text-white">Our offerings</h4>

            {/* Job Bootcamp */}
            <a href="#" className="flex items-center gap-2 group">
              {logoo ? (
                <img
                  src={logoo}
                  alt="Job Bootcamp"
                  className="h-6 w-auto object-contain"
                />
              ) : (
                <span className="text-white group-hover:text-orange-400">
                  Job Bootcamp
                </span>
              )}
              <span className="text-lg text-gray-400 group-hover:text-white">
                job-bootcamp
              </span>
            </a>

            {/* Code 360 */}
            <a href="#" className="flex items-center gap-2 group">
              {logoo ? (
                <img
                  src={logoo}
                  alt="Code 360"
                  className="h-6 w-auto object-contain"
                />
              ) : (
                <span className="text-white group-hover:text-orange-400">
                  Code 360
                </span>
              )}
              <span className=" text-gray-400 text-lg font-bold group-hover:text-white">
                <span className="text-amber-600 " >Code</span> 360
              </span>
            </a>
          </div>
        </div>

        {/* Link Columns */}
        <FooterColumn title="Coding Ninjas" links={codingNinjasLinks} />
        <FooterColumn title="Products" links={productLinks} />
        <FooterColumn title="Community" links={communityLinks} />
      </div>

      {/* Divider */}
      <hr className="border-gray-700 mt-16 mb-8" />

      {/* Bottom row: Copyright + Social */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <p className="text-gray-400 text-center md:text-left">
          Copyright © Sunrise Mentors Pvt. Ltd.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-xl">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-white transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-white transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-white transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-white transition-colors"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;