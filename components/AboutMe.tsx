import SectionContainer from "./SectionContainer";
import BaseCard from "./BaseCard";
import { IoSchoolOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { MdWorkspacePremium } from "react-icons/md";
const aboutMe = [
    {
        title: "education",
        desc: "computer engineer (IUG)",
        icon: <IoSchoolOutline/>
    },
    {
        title: "experince",
        desc: "+2 years",
        icon: <LuShoppingBag/>
    },
    {
        title: "projects",
        desc: "+10 completed",
        icon: <MdWorkspacePremium/>
    },

    {
        title: "opportunities",
        desc: "open to work",
        icon: <FiPhoneCall/>
    }

];

export default function AboutMe() {
    return (
        <SectionContainer title="about me">
            <p className="text-gray-600 text-base text-justify dark:text-gray-200 mb-5">Front-end developer turning ideas into seamless, interactive web experiences. I blend design and code to craft user-friendly interfaces. My passion for coding drives me to create dynamic and engaging digital experiences.</p>
            <div className="grid grid-cols-12 gap-2 ">
                {aboutMe.map((item, index) => {
                    return (
                        <BaseCard className="px-4 col-span-4 md:col-span-2 " key={index}>
                            {item.icon}
                            <h4 className="capitalize  mt-3 mb-1 dark:text-white text-gray-700">{item.title}</h4>
                            <span className="capitalize text-center text-[.72rem] font-extralight dark:text-gray-200 text-gray-500">{item.desc}</span>
                        </BaseCard>
                    );
                })}
            </div>
        </SectionContainer>
    );
}