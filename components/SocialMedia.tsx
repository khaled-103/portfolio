import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function SocialMedia() {
    const socialMedia = [
        { icon: FaFacebookF, link: "https://facebook.com", className: "hover:text-blue-500" },
        { icon: FaGithub, link: "https://github.com", className: "hover:text-gray-500" },
        { icon: FaLinkedinIn, link: "https://linkedin.com", className: "hover:text-blue-500" },
        { icon: FaInstagram, link: "https://instagram.com", className: "hover:text-red-500" },
    ];
    return (
        <>
            {socialMedia.map((social, index) => (
                <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-600 dark:text-gray-300"
                >
                    {<social.icon className={social.className} />}
                </a>
            ))}
        </>
    );
}