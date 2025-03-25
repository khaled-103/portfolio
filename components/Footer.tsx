import { LanguagesKeysType } from "@/lib/types";

export default function Footer({ lang }: { lang: LanguagesKeysType }) {
  const socialMedia = [
    { name: "Facebook", link: "https://facebook.com" },
    { name: "Twitter", link: "https://twitter.com" },
    { name: "LinkedIn", link: "https://linkedin.com" },
  ];

  return (
    <footer className="mt-8 py-4 border-t dark:border-gray-700">
      <div className="flex justify-center space-x-4">
        {socialMedia.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
          >
            {social.name}
          </a>
        ))}
      </div>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} {lang === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}.
      </p>
    </footer>
  );
}
