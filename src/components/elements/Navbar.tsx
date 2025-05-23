import { Container } from "../shared/Container";
import logo from "../../assets/logo.svg";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import { useTheme } from "../../utils/hooks/useTheme";

export const navItems = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#about", text: "About" },
  { href: "#pricing", text: "Pricing" },
];
export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="absolute t-o inset-x-2 z-40 py-6">
      <Container>
        <nav className="w-full flex justify-between gap-6 relative">
          {/* logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <img src={logo} alt="EdgeAI Logo" className="w-8 h-8" />
              <div className="inline-flex text-lg font-semibold text-heading-1">
                AetheroAI
              </div>
            </a>
          </div>

          <div
            className="flex flex-col lg:flex-row w-full lg:justify-between 
          absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent border-x 
          border-x-border lg:border-x-0 lg:h-auto h-0 overflow-hidden"
          >
            <ul
              className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 
                           pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 
                           text-lg text-heading-2 w-full lg:justify-center lg:items-center"
            >
              {navItems.map((item, key) => (
                <NavItem key={key} href={item.href} text={item.text} />
              ))}
            </ul>

            <div
              className="lg:min-w-max flex items-center sm:w-max w-full pb-6 
                            lg:pb-0 border-b border-box-border lg:border-0
                            px-6 lg:px-0"
            >
              <BtnLink
                text="Get Started"
                href="#cta"
                className="hover:bg-violet-800"
              />
            </div>
          </div>

          <div className="min-w-max flex items-center gap-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 w-10 h-10 flex items-center justify-center border rounded-full text-heading-2 cursor-pointer"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
