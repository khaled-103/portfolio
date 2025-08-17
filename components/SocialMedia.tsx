import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function SocialMedia() {
    const socialMedia = [
        { icon: FaFacebookF,desc:"facebook social link", link: "https://facebook.com", className: "hover:text-blue-500" },
        { icon: FaGithub,desc:"github link", link: "https://github.com", className: "hover:text-gray-500" },
        { icon: FaLinkedinIn,desc:"LinkedinIn link", link: "https://linkedin.com", className: "hover:text-blue-500" },
        { icon: FaInstagram,desc:"Instagram social link", link: "https://instagram.com", className: "hover:text-red-500" },
    ];
    return (
        <>
            {socialMedia.map((social, index) => (
                <a
                    title={social.desc}
                    about={social.desc}
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