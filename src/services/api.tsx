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
        console.log(response);
    } catch (error) {
        console.error("Failed to add CCTV device:", error);
    }
};

export const updateDevices = async (
    device: string,
    newDevice: CCTV,
    id: string
) => {
    try {
        const response = await window.electron.updateDevice(
            "CCTV",
            id,
            newDevice
        );
        if (response.status === "success") console.log("성공");
    } catch (error) {
        console.error("Failed to add CCTV device:", error);
    }
};

export const deleteDevice = async (device: string, id: string) => {
    try {
        const response = await window.electron.deleteDevice("CCTV", id);
        if (response.status === "success") alert("삭제되었습니다");
    } catch (error) {
        console.log(error);
    }
};
