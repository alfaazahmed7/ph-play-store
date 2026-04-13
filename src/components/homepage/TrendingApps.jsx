'use client';
import { FaDownload, FaStar } from "react-icons/fa";
import { HashLoader } from "react-spinners";
import AppCard from "../ui/AppCard";
import Link from "next/link";
import useApps from "./hooks/UseApps";
// import { useLoaderData } from "react-router";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
    //   const apps = use(appsPromise);
    //   console.log(apps, "apps");

    //   const data = useLoaderData();
    //   console.log(data, "data from homepage");

    const { apps, loading } = useApps();

    return (
        <div className="w-10/12 mx-auto my-14">
            {/* Section header */}
            <div className="mb-8 text-center">
                <h2 className="font-bold text-5xl mb-3">Trending Apps</h2>
                <p className="text-gray-400 text-lg">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            {loading ? (
                <div className="flex justify-center items-center">
                    <HashLoader color="#ad46ff" />
                </div>)
                : (
                    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                        {apps.slice(0, 9).map((app, ind) => {
                            return <AppCard app={app} key={ind} />;
                        })}
                    </div>
                )}

            <div className="text-center mt-4">
                <Link href={"/apps"}>
                    <button className="btn bg-purple-500 text-white">View All</button>
                </Link>
            </div>
        </div>
    );
};

export default TrendingApps;
