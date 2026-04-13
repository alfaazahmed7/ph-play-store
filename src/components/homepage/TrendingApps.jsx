import AppCard from "../ui/AppCard";
import Link from "next/link";

const appsPromisse = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    return data;
}

const TrendingApps = async ({ from }) => {
    const apps = await appsPromisse();
    console.log("from", from);

    return (
        <div className="w-10/12 mx-auto my-14">
            <div className="mb-8 text-center">
                <h2 className="font-bold text-5xl mb-3">
                    {from === "homepage" ? "Trending Apps" : "All Apps"}
                </h2>
                <p className="text-gray-400 text-lg">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                {apps.slice(0, from === "homepage" ? 8 : apps.length).map((app, ind) => {
                    return <AppCard app={app} key={ind} />;
                })}
            </div>

            {
                from === "homepage" && (
                    <div className="flex justify-center mt-10">
                        <Link href="/apps" className="btn bg-purple-500 text-white">
                            View All Apps
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default TrendingApps;