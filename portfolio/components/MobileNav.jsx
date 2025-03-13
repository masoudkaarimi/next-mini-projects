"use client"

import {useState} from "react";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {CiMenuFries} from "react-icons/ci";

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";


const links = [
    {name: 'home', path: "/"},
    {name: 'services', path: "/services"},
    {name: 'resume', path: "/resume"},
    {name: 'work', path: "/work"},
    {name: 'contact', path: "/contact"},
]

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname()

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center" onClick={() => setIsOpen(true)}>
                <CiMenuFries className="size-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className={"text-4xl font-semibold"}>Masoud<span className={"text-accent "}>.</span></h1>
                    </Link>
                </div>

                {/* Nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return <Link
                            key={index}
                            href={link.path}
                            className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""} text-xl capitalize font-medium hover:text-accent transition-all`}
                            onClick={handleLinkClick}
                        >
                            {link.name}
                        </Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;