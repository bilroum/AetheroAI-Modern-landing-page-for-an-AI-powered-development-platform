import { Container } from "../shared/Container";
import { NavItem } from "../shared/NavItem";
import logo from "../../assets/logo.svg";
import { navItems } from "./Navbar";

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-10  bg-box-bg">
      <Container className="pb-2">
        <div className="flex flex-col md:flex-row justify-between items-center">          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} className="w-7 h-7" alt="EdgeAI Logo" />
            <span className="text-lg font-semibold text-heading-1">EdgeAI</span>
            <span className="text-sm  text-heading-3">All rights reseved 2025</span>
          </div>

          <ul className="flex gap-6 text-heading-1">
            {navItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={item.text} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
