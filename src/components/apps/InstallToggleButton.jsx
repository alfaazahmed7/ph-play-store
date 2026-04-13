'use client';
import { InstallAppsContext } from '@/context/install.context';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const InstallToggleButton = ({ app }) => {
    const { installedApps, setInstalledApps } = useContext(InstallAppsContext);

    const handleInstallNow = () => {
        setInstalledApps([...installedApps, app]);
        toast.success(`${app.title} is installed!`);
    };

    const isInstalled = installedApps.find((iApp) => iApp.id === app.id);

    return (
        <div>
            <button
                disabled={isInstalled ? true : false}
                onClick={handleInstallNow}
                className={` ${isInstalled ? 'bg-gray-500 hover:bg-gray-500' : 'bg-primary hover:bg-primary/90'} px-6 py-3 rounded-lg text-white font-semibold transition cursor-pointer`}>
                Install Now
            </button>
        </div>
    );
};

export default InstallToggleButton;