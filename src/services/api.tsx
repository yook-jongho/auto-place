import { Aircon, CCTV } from "../interface/interface";

export const loadDevices = async (device: string) => {
    try {
        const response = await window.electron.loadDevices(device);
        return response.data.device;
    } catch (error) {
        console.error(error);
    }
};

export const addDevices = async (
    category: string,
    newDevice: CCTV | Aircon
) => {
    try {
        const response = await window.electron.addDevice(category, newDevice);
        console.log(response);
    } catch (error) {
        console.error("Failed to add CCTV device:", error);
    }
};

export const updateDevices = async (
    device: string,
    newDevice: CCTV | Aircon,
    id: string
) => {
    try {
        const response = await window.electron.updateDevice(
            device,
            id,
            newDevice
        );
        if (response.status === "success") return response.status;
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
