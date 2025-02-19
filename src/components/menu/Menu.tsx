import { Link } from "react-router-dom";

interface MenuProps {
  onClose: () => void;
}

const Menu = ({ onClose }: MenuProps) => {
  return (
    <div className="flex flex-col space-y-4 p-6">
      <Link to="/features" onClick={onClose} className="text-white hover:text-purple-400">
        Features
      </Link>
      <Link to="/how-it-works" onClick={onClose} className="text-white hover:text-purple-400">
        How it Works
      </Link>
      <Link to="/examples" onClick={onClose} className="text-white hover:text-purple-400">
        Examples
      </Link>
      <Link to="/pricing" onClick={onClose} className="text-white hover:text-purple-400">
        Pricing
      </Link>
    </div>
  );
};

export default Menu;
