import { Link } from "@/lib/i18n/navigation";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function SocialMedia() {
  const socialMedia = [
    { icon: FaGithub, desc: "GitHub", link: "https://github.com/khaled-103", color: "text-gray-900 dark:text-white" },
    { icon: FaLinkedinIn, desc: "LinkedIn", link: "https://www.linkedin.com/in/khaled-shaikh-ali-5b9351249", color: "text-[#0077B5]" },
    // { icon: FaFacebookF, desc: "Facebook", link: "https://facebook.com", color: "text-[#1877F2]" },
    // { icon: FaInstagram, desc: "Instagram", link: "https://instagram.com", color: "text-pink-500" }, // أو متدرج (أشرح تحت 👇)
    { icon: FaWhatsapp, desc: "Whatsapp", link: "https://wa.me/972598210015", color: "text-[#25D366]" }
  ];

  return (
    <div className="flex gap-4 items-center">
      {socialMedia.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={social.desc}
          title={social.desc}
        >
          <social.icon className={`text-lg ${social.color}`} />
        </Link>
      ))}
    </div>
  );
}
