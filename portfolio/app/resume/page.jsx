"use client"

import { motion } from "framer-motion";
import { SiCss3, SiDjango, SiFigma, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiPhp, SiPython, SiReact, SiTailwindcss, SiWordpress } from "react-icons/si";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const data = {
    about: {
        title: "About me",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque blanditiis, deleniti eaque et excepturi exercitationem, expedita hic labore laboriosam magnam nam!",
        items: [
            {key: "Name", value: "Masoud Karimi"},
            {key: "Phone", value: "(+1) 444 444 4444"},
            {key: "Experience", value: "12+ Years"},
            {key: "Skype", value: "masoud.01"},
            {key: "Nationality", value: "USA"},
            {key: "Email", value: "masoud.01@gmail.com"},
            {key: "Freelance", value: "Available"},
            {key: "Languages", value: "English, Germany"},
        ],
    },
    experience: {
        title: "My experience",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque blanditiis, deleniti eaque et excepturi exercitationem, expedita hic labore laboriosam magnam nam!",
        items: [
            {
                company: "Tech Solutions Inc.",
                position: "Full Stack Developer",
                duration: "2022 - Present",
            },
            {
                company: "Web Design Studio",
                position: "Front-End Developer Intern",
                duration: "Summer 2021"
            },
            {
                company: "E-commerce Startup",
                position: "Freelance Web Developer",
                duration: "2020 - 2021",
            },
            {
                company: "Teach Academy",
                position: "Teaching Assistant",
                duration: "2019 - 2020",
            },
            {
                company: "Digital Agency",
                position: "UI/UX Designer",
                duration: "2018 - 2019",
            },
            {
                company: "Software Development Firm",
                position: "Junior Developer",
                duration: "2017 - 2018",
            },
        ]
    },
    education: {
        title: "My education",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque blanditiis, deleniti eaque et excepturi exercitationem, expedita hic labore laboriosam magnam nam!",
        items: [
            {
                institution: "Online Course Platform",
                degree: "Full Stack Web Development Bootcamp",
                duration: "2023",
            },
            {
                institution: "Codecademy",
                degree: "Front-End Track",
                duration: "2022",
            },
            {
                institution: "Online Course",
                degree: "Programming Course",
                duration: "2020 - 2021",
            },
            {
                institution: "Teach Institute",
                degree: "Certificated Web Developer",
                duration: "2019",
            },
            {
                institution: "Design School",
                degree: "Diploma in Graphic Design",
                duration: "2016 - 2018",
            },
            {
                institution: "Community College",
                degree: "Associate Degree in Computer Science",
                duration: "2014 - 2016",
            },
        ]
    },
    skills: {
        title: "My skills",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque blanditiis, deleniti eaque et excepturi exercitationem, expedita hic labore laboriosam magnam nam!",
        items: [
            {icon: <SiHtml5/>, name: "HTML 5"},
            {icon: <SiCss3/>, name: "CSS 3"},
            {icon: <SiJavascript/>, name: "Javascript"},
            {icon: <SiReact/>, name: "React.js"},
            {icon: <SiNextdotjs/>, name: "Next.js"},
            {icon: <SiNodedotjs/>, name: "Node.js"},
            {icon: <SiTailwindcss/>, name: "Tailwind CSS"},
            {icon: <SiPhp/>, name: "PHP"},
            {icon: <SiWordpress/>, name: "Wordpress"},
            {icon: <SiPython/>, name: "Python"},
            {icon: <SiDjango/>, name: "Django"},
            {icon: <SiFigma/>, name: "Figma"},
        ],
    },
}

const Resume = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* Content */}
                    <div className="min-h-[70vh] w-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{data.experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{data.experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {data.experience.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* Dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{data.education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{data.education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {data.education.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* Dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px] ">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{data.skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{data.skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                    {data.skills.items.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{item.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{data.about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{data.about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {data.about.items.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.key}</span>
                                                <span className="text-xl">{item.value}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;