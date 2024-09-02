import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with ❤️ by Atharva Chauhan
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/ImAtharva4907"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-white hover:text-gray-400" size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/imatharva"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-white hover:text-gray-400" size={30} />
          </a>
          <a
            href="https://www.instagram.com/real_atharvaa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-white hover:text-gray-400" size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
