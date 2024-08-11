const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
    checkAndCreateJson: () => ipcRenderer.invoke("check-and-create-json"),
    addDevice: (device, info) =>
        ipcRenderer.invoke("add-cctv-device", device, info),
    loadDevices: (device) => ipcRenderer.invoke("load-devices", device),
    updateDevice: (device, id, info) =>
        ipcRenderer.invoke("update-device", device, id, info),
    deleteDevice: (device, id) =>
        ipcRenderer.invoke("delete-device", device, id),
});
