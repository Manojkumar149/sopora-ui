
import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-6">
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div>
          <span>© 2024 SOPora. All rights reserved.</span>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="#" className="hover:text-[#36CFC9] transition-colors">
            Docs
          </Link>
          <Link to="#" className="hover:text-[#36CFC9] transition-colors">
            GitHub
          </Link>
          <Link to="#" className="hover:text-[#36CFC9] transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
