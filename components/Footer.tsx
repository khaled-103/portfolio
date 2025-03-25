import { LanguagesKeysType } from "@/lib/types";
import { FaFacebookF,FaGithub,FaInstagram,FaLinkedinIn } from "react-icons/fa";
export default function Footer({ lang }: { lang: LanguagesKeysType }) {
  const socialMedia = [
    { icon: FaFacebookF, link: "https://facebook.com",className:"hover:text-blue-600" },
    { icon: FaGithub, link: "https://github.com" ,className:"hover:text-gray-500"},
    { icon: FaLinkedinIn, link: "https://linkedin.com",className:"hover:text-blue-600" },
    { icon: FaInstagram, link: "https://instagram.com",className:"hover:text-red-600" },
  ];

  return (
    <footer className="py-3 border-t border-gray-600">
      <div className="flex justify-center space-x-4">
        {socialMedia.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400"
          >
            {<social.icon className={social.className}/>}
          </a>
        ))}
      </div>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} {lang === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}.
      </p>
    </footer>
  );
}
