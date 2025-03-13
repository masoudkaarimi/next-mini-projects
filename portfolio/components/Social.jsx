import Link from "next/link";

import {FaGithub, FaLinkedin, FaTelegram, FaTwitter} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/masoudkaarimi/"},
    {icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/masoudkaarimi/"},
    {icon: <FaTelegram/>, path: "https://t.me/masoudkaarimi/"},
    {icon: <FaTwitter/>, path: "https://x.com/MasoudKaarimi/"},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    );
};

export default Social;