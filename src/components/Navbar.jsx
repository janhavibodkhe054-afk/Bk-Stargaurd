import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        setHideTopBar(true);
        return;
      }

      setHideTopBar(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenu(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Training", path: "/train" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div
        className={`
          hidden lg:block
          fixed top-0 left-0 right-0
          z-[60]
          bg-black/90
          text-white
          overflow-hidden
          transition-all
          duration-500
          ${
            hideTopBar
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
          {/* Contact */}
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#D4A017]" />
              <span>+91 86683 17591</span>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#D4A017]" />
              <span>info@bkstarguard.com</span>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <span className="font-semibold text-[#D4A017]">
              Follow Us
            </span>

            <a
              href="#"
              className="hover:text-[#D4A017] transition-colors duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="hover:text-[#D4A017] transition-colors duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="hover:text-[#D4A017] transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/918668317591"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4A017] transition-colors duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav
        className={`
          fixed
          left-0
          right-0
          z-50
          bg-white
          shadow-md
          transition-all
          duration-500

          top-0
          ${hideTopBar ? "lg:top-0" : "lg:top-[48px]"}
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            flex
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-8
            py-3
            sm:py-4
          "
        >
          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
          >
            <img
              src="/logo.png"
              alt="BK Star Guard Logo"
              className="
                w-14
                sm:w-16
                lg:w-20
                object-contain
              "
            />

            <div>
              <h2
                className="
                  text-base
                  sm:text-lg
                  md:text-2xl
                  lg:text-2xl
                  font-bold
                  text-[#08172F]
                  leading-tight
                "
              >
                BK STAR GUARD
              </h2>

              <p
                className="
                  text-[8px]
                  sm:text-[10px]
                  md:text-xs
                  lg:text-sm
                  text-gray-500
                  leading-tight
                "
              >
                Security & Manpower Services
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <ul
            className="
              hidden
              lg:flex
              items-center
              gap-7
              xl:gap-9
              text-[15px]
              xl:text-[16px]
              font-semibold
              text-[#08172F]
            "
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`
                    relative
                    py-2
                    transition-colors
                    duration-300

                    ${
                      isActive(link.path)
                        ? "text-[#D4A017]"
                        : "text-[#08172F] hover:text-[#D4A017]"
                    }

                    after:absolute
                    after:left-0
                    after:bottom-0
                    after:h-[2px]
                    after:bg-[#D4A017]
                    after:transition-all
                    after:duration-300

                    ${
                      isActive(link.path)
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* ================= DESKTOP QUOTE ================= */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/918668317591?text=Hello%20BK%20STAR%20GUARD%20SECURITY%20%26%20MANPOWER%20SERVICES,%20I%20would%20like%20to%20get%20a%20free%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-[#D4A017]
                hover:bg-[#08172F]
                hover:text-white
                text-black
                px-5
                xl:px-6
                py-3
                rounded-full
                font-semibold
                text-sm
                xl:text-base
                transition-all
                duration-300
                inline-flex
                items-center
                justify-center
                hover:shadow-lg
                hover:shadow-[#08172F]/20
              "
            >
              Get Free Quote
            </a>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setMenu(!menu)}
            aria-label="Toggle Menu"
            className="
              lg:hidden
              w-11
              h-11
              flex
              items-center
              justify-center
              rounded-full
              text-[#08172F]
              bg-gray-100
              hover:bg-[#D4A017]
              transition-all
              duration-300
              active:scale-90
            "
          >
            <span
              className={`
                text-xl
                transition-all
                duration-300
                ${menu ? "rotate-90" : "rotate-0"}
              `}
            >
              {menu ? <FaTimes /> : <FaBars />}
            </span>
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-500
            ease-in-out

            ${
              menu
                ? "max-h-[700px] opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            }
          `}
        >
          <div
            className="
              bg-white
              border-t
              border-gray-100
              shadow-xl
            "
          >
            {/* Mobile Contact Header */}
            <div
              className="
                bg-[#08172F]
                text-white
                px-5
                sm:px-6
                py-5
              "
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[#D4A017] text-xs uppercase tracking-widest font-semibold">
                    Get In Touch
                  </p>

                  <h3 className="text-lg font-bold mt-1">
                    Contact Information
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#D4A017]/10 flex items-center justify-center">
                  <FaPhoneAlt className="text-[#D4A017]" />
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <a
                  href="tel:+918668317591"
                  className="
                    flex
                    items-center
                    gap-3
                    hover:text-[#D4A017]
                    transition-colors
                  "
                >
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <FaPhoneAlt className="text-[#D4A017] text-xs" />
                  </span>

                  <span>+91 86683 17591</span>
                </a>

                <a
                  href="mailto:info@bkstarguard.com"
                  className="
                    flex
                    items-center
                    gap-3
                    hover:text-[#D4A017]
                    transition-colors
                  "
                >
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <FaEnvelope className="text-[#D4A017] text-xs" />
                  </span>

                  <span>info@bkstarguard.com</span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-5">
                <a
                  href="#"
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[#D4A017]
                    hover:text-black
                    transition-all
                    duration-300
                  "
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[#D4A017]
                    hover:text-black
                    transition-all
                    duration-300
                  "
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[#D4A017]
                    hover:text-black
                    transition-all
                    duration-300
                  "
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://wa.me/918668317591"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[#D4A017]
                    hover:text-black
                    transition-all
                    duration-300
                  "
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="py-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenu(false)}
                  className={`
                    group
                    flex
                    items-center
                    justify-between
                    px-5
                    sm:px-6
                    py-4

                    border-b
                    border-gray-100

                    font-semibold
                    text-sm
                    sm:text-base

                    transition-all
                    duration-300

                    ${
                      isActive(link.path)
                        ? "bg-[#D4A017]/10 text-[#D4A017] pl-7"
                        : "text-[#08172F] hover:bg-gray-50 hover:text-[#D4A017] hover:pl-7"
                    }
                  `}
                  style={{
                    transitionDelay: menu ? `${index * 40}ms` : "0ms",
                  }}
                >
                  <div className="flex items-center gap-3">
                    {/* Active Indicator */}
                    <span
                      className={`
                        w-1
                        rounded-full
                        bg-[#D4A017]
                        transition-all
                        duration-300
                        ${
                          isActive(link.path)
                            ? "h-6 opacity-100"
                            : "h-0 opacity-0"
                        }
                      `}
                    ></span>

                    <span>{link.name}</span>
                  </div>

                  <span
                    className={`
                      text-xs
                      transition-all
                      duration-300
                      ${
                        isActive(link.path)
                          ? "text-[#D4A017] translate-x-0"
                          : "text-gray-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }
                    `}
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile Quote */}
            <div className="p-5 sm:p-6 bg-gray-50">
              <a
                href="https://wa.me/918668317591?text=Hello%20BK%20STAR%20GUARD%20SECURITY%20%26%20MANPOWER%20SERVICES,%20I%20would%20like%20to%20get%20a%20free%20quote."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenu(false)}
                className="
                  w-full
                  bg-[#D4A017]
                  hover:bg-[#08172F]
                  hover:text-white
                  text-black
                  py-3.5
                  rounded-full
                  font-semibold
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:shadow-lg
                "
              >
                <FaWhatsapp />
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;