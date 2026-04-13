import React from "react";

const Stats = () => {
    return (
        <div className="w-full py-20 px-8" style={{ background: "linear-gradient(135deg, #6B3FD4 0%, #9B5FE8 50%, #B06BE0 100%)" }}>

            {/* Heading */}
            <h2 className="text-white text-3xl font-bold text-center mb-10">
                Trusted By Millions, Built For You
            </h2>

            {/* Stats Row */}
            <div className="flex justify-around items-start text-white">

                {/* Stat 1 */}
                <div className="text-center">
                    <p className="text-sm font-light mb-2 opacity-80">Total Downloads</p>
                    <p className="text-5xl font-bold mb-2">29.6M</p>
                    <p className="text-sm opacity-80">21% More Than Last Month</p>
                </div>

                {/* Divider */}
                <div className="w-px bg-white opacity-20 self-stretch"></div>

                {/* Stat 2 */}
                <div className="text-center">
                    <p className="text-sm font-light mb-2 opacity-80">Total Reviews</p>
                    <p className="text-5xl font-bold mb-2">906K</p>
                    <p className="text-sm opacity-80">46% More Than Last Month</p>
                </div>

                {/* Divider */}
                <div className="w-px bg-white opacity-20 self-stretch"></div>

                {/* Stat 3 */}
                <div className="text-center">
                    <p className="text-sm font-light mb-2 opacity-80">Active Apps</p>
                    <p className="text-5xl font-bold mb-2">132+</p>
                    <p className="text-sm opacity-80">31 More Will Launch</p>
                </div>

            </div>
        </div>
    );
};

export default Stats;