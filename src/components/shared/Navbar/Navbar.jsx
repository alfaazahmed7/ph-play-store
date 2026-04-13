import React from "react";
import logoImg from "@/assets/images/logo.png";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import MyLink from "./MyLink";

const Navbar = () => {
    const navItems = [
        {
            path: "/",
            text: "Home",
        },
        {
            path: "/apps",
            text: "Apps",
        },
        {
            path: "/installation",
            text: "Installation",
        },
        {
            path: "/dashboard",
            text: "Dashboard",
        },
    ];

    return (
        <nav className=" shadow">
            <div className="flex justify-between gap-4 items-center py-2 w-10/12 mx-auto">
                <Image src={logoImg}
                    alt="Logo Image"
                    width={50}
                    height={50} />

                <ul className="hidden md:flex justify-between gap-5 items-center">
                    {navItems.map((item, index) => (
                        <MyLink key={index} href={item.path}>
                            {item.text}
                        </MyLink>
                    ))}

                </ul>
                <button className="btn bg-purple-500 text-white">
                    <FaGithub />
                    Contribute
                </button>
            </div>
        </nav>
    );
};

export default Navbar;