import React from "react";
import bannerImg from "@/assets/images/hero.png";
import Image from "next/image";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="min-h-[80vh] text-center space-y-8 pt-[50px]">
            <h2 className="font-bold text-7xl">
                We Build <br /> <span className="text-purple-500 font-extrabold">Productive</span> Apps
            </h2>
            <p className="text-[#627382] text-lg max-w-[50%] mx-auto">
                At HERO.IO , we craft innovative apps designed to make everyday life
                simpler, smarter, and more exciting.Our goal is to turn your ideas into
                digital experiences that truly make an impact.
            </p>
            <div className="flex justify-center gap-2">
                <div className="flex items-center border-2 border-[#13131320] rounded-lg justify-center gap-2 px-6 py-3">
                    <p><FaGooglePlay /></p>
                    <button className="bg-transparent text-black font-semibold">Play store</button>
                </div>
                <div className="flex items-center border-2 border-[#13131320] rounded-lg justify-center gap-2 px-6 py-3">
                    <p><FaAppStoreIos /> </p>
                    <button className="bg-transparent text-black font-semibold">App store</button>
                </div>
            </div>
            <Image src={bannerImg} className="mx-auto" alt="" />
        </div>
    );
};

export default Banner;