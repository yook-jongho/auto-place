const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const url = require("url");
const fs = require("fs");

function createWindow() {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            preload: path.join(__dirname, "../public/preload.js"),
        },
    });

    const startUrl =
        process.env.ELECTRON_START_URL ||
        url.format({
            pathname: path.join(__dirname, "/../build/index.html"),
            protocol: "file:",
            slashes: true,
        });

    win.loadURL(startUrl);
    win.webContents.openDevTools();
}

app.on("ready", createWindow);

ipcMain.handle("check-and-create-json", async () => {
    // todo: 통신 로직 분리 및 ipcMain handle 추가 등록 처리
    // const apiRequest = async () => {
    //     const data = {
    //         reserveId: "03cada13-09bb-431e-80d4-eb2e306cb64",
    //         reserveStart: "2024-05-27 16:17:00",
    //         reserveEnd: "2024-05-28 16:20:00",
    //         headCount: 0,
    //         optionList: [],
    //         taskList: [],
    //         violationCount: {
    //             headCount: 0,
    //         },
    //         completeTaskList: [],
    //     };
    //     try {
    //         const response = await fetch(
    //             "https://api.autospace.openiot.support/spaceHero/628cd4fe-6ba7-420c-bc04-fd7c52bbc63d/reservation",
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "x-api-key": "",
    //                 },
    //                 body: JSON.stringify(data),
    //             }
    //         );
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }

    //         const responseData = await response.json();
    //         console.log("Server response:", responseData);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // apiRequest();

    const userDataPath = app.getPath("appData");
    const filePath = path.join(userDataPath, "settings.json");

    const initialData = {
        general: {
            name: "",
            address: "",
        },
        HA: {
            domain: "",
            token: "",
        },
        CCTV: {
            device: [],
        },
        doorlock: {
            sendURL: false,
            passwordValidation: {
                before: 0,
                after: 0,
            },
            device: [],
        },
        airConditioner: {
            device: [],
        },
    };

    try {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify(initialData, null, 2));
            return { status: "created", data: initialData };
        } else {
            const data = fs.readFileSync(filePath, "utf-8");
            return { status: "exists", data: JSON.parse(data) };
        }
    } catch (error) {
        return { status: "error", error: error.message };
    }
});

// todo: 추가할 디바이스, 그에 대한 정보 파라미터로 받아와서 json 수정 처리
ipcMain.handle("add-cctv-device", async (event, device, info) => {
    const userDataPath = app.getPath("appData");
    const filePath = path.join(userDataPath, "settings.json");
    // console.log(device, info);
    try {
        const data = fs.readFileSync(filePath, "utf-8");
        const jsonData = JSON.parse(data);

        if (!jsonData[device]) {
            jsonData[device] = { device: [] };
        }

        jsonData[device].device.push(info);

        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
        return { status: "success", data: jsonData, filePath };
    } catch (error) {
        console.error("Error adding CCTV device:", error);
        return { status: "error", error: error.message };
    }
});

ipcMain.handle("load-devices", async (event, device) => {
    const userDataPath = app.getPath("appData");
    const filePath = path.join(userDataPath, "settings.json");
    try {
        const data = fs.readFileSync(filePath, "utf-8");
        const jsonData = JSON.parse(data);

        return { status: "success", data: jsonData[device], filePath };
    } catch (error) {
        console.log(error);
    }
});

ipcMain.handle("update-device", async (event, device, id, info) => {
    const userDataPath = app.getPath("appData");
    const filePath = path.join(userDataPath, "settings.json");

    try {
        const data = fs.readFileSync(filePath, "utf-8");
        const jsonData = JSON.parse(data);

        const updatedDevices = jsonData[device].device.map((device) =>
            device.id === id ? info : device
        );
        jsonData[device].device = updatedDevices;
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

        return { status: "success", data: jsonData, filePath };
    } catch (error) {
        console.log(error);
    }
});

ipcMain.handle("delete-device", async (event, device, id) => {
    const userDataPath = app.getPath("appData");
    const filePath = path.join(userDataPath, "settings.json");

    try {
        const data = fs.readFileSync(filePath, "utf-8");
        const jsonData = JSON.parse(data);

        const deleteData = jsonData[device].device.filter(
            (device) => device.id !== id
        );
        jsonData[device].device = deleteData;
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

        return { status: "success", data: jsonData, filePath };
    } catch (error) {
        console.log(error);
    }
});
