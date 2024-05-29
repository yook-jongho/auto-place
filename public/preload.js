const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
    checkAndCreateJson: () => ipcRenderer.invoke("check-and-create-json"),
    addCctvDevice: (device, info) =>
        ipcRenderer.invoke("add-cctv-device", device, info),
    loadDevices: (device) => ipcRenderer.invoke("load-devices", device),
});
