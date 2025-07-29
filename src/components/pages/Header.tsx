import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import ResearchrLogo from "../../assets/logo/researchr.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 font-semibold transition ${
      isActive ? "text-blue-600" : "text-gray-800 hover:text-blue-500"
    }`;

  return (
    <header className="sticky top-0 bg-white">
      <div className="">
        <Link to="https://www.grammarly.com/desktop/windows">
          <img src={ResearchrLogo} alt="Researchr" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
