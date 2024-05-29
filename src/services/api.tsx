import { CCTV } from "../interface/interface";

export const loadDevices = async () => {
    try {
        const response = await window.electron.loadDevices("CCTV");
        return response.data.device;
    } catch (error) {
        console.error(error);
    }
};

export const addDevices = async (newDevice: CCTV) => {
    try {
        const response = await window.electron.addCctvDevice("CCTV", newDevice);
        if (response.status === "success") console.log("성공");
    } catch (error) {
        console.error("Failed to add CCTV device:", error);
    }
};
