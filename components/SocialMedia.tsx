import { Link } from "@/lib/i18n/navigation";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function SocialMedia() {
    const socialMedia = [
    { icon: FaGithub, desc: "GitHub", link: "https://github.com" },
    { icon: FaLinkedinIn, desc: "LinkedIn", link: "https://linkedin.com" },
    { icon: FaFacebookF, desc: "Twitter", link: "https://FaFacebookF.com" },
    { icon: FaInstagram, desc: "Instagram", link: "https://instagram.com" },
  ];
  
  return (
    <div className="flex gap-4 items-center">
      {socialMedia.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={social.desc}
          title={social.desc}
        >
          <social.icon className="text-lg" />
        </Link>
      ))}
    </div>
  );
}