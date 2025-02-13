import { useState, useEffect, useRef } from "react";
import { Element, Link } from "react-scroll";
import { Home } from "./Home";
import { MyWork } from "./MyWork";
import { ProfessionalExperience } from "./ProfessionalExperience";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  // Create refs for each section
  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    home: useRef(null!),
    mywork: useRef(null!),
    exp: useRef(null!),
  };

  const navbarItems = [
    { name: "Home", target: "home" },
    { name: "My Work", target: "mywork" }, // Ensure this matches the <Element name="mywork">
    { name: "Experience", target: "exp" },
  ];

  const handleScroll = () => {
    navbarItems.forEach((section) => {
      const element = sectionRefs[section.target]?.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          setActiveLink(section.target);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar fixed top-0 w-full text-white shadow-md p-4 z-50">
        <div className="flex justify-between space-x-4">
          <div>MONIKA</div>
          <div>
          {navbarItems.map((nav) => (
            <Link
              key={nav.name}
              to={nav.target}
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
              className={`cursor-pointer px-4 py-2 rounded-md ${
                activeLink === nav.target ? " text-slate-400" : ""
              }`}
            >
              {nav.name}
            </Link>
          ))}
          </div>
        </div>
      </nav>

      <div> {/* Add padding to prevent content from hiding under navbar */}
        <Element name="home">
          <div ref={sectionRefs.home}>
            <Home />
          </div>
        </Element>

        <Element name="mywork"  className='myapp'>
          <div ref={sectionRefs.mywork}>
            <MyWork />
          </div>
        </Element>
        <Element name="exp"  className='myapp'>
          <div ref={sectionRefs.exp}>
            <ProfessionalExperience />
          </div>
        </Element>
      </div>
    </>
  );
};

export default Navbar;
