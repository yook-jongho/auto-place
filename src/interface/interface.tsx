export interface CCTV {
    id: String;
    observe: boolean;
    name: string;
    ip: String;
    username: String;
    password: String;
}

export interface Aircon {
    id: String;
    name: String;
    automation: boolean;
    condition: {
        temperature: Number;
        compare: String;
    };
}

//todo: 파일 분리
declare global {
    interface Window {
        electron: {
            checkAndCreateJson: () => Promise<{
                status: string;
                data?: any;
                error?: string;
            }>;
            addCctvDevice: (
                device: String,
                info: CCTV
            ) => Promise<{ status: string; data?: any; error?: string }>;
            addAirconDevice: (
                device: String,
                info: Aircon
            ) => Promise<{ status: string; data?: any; error?: string }>;
            loadDevices: (
                device: string
            ) => Promise<{ status: string; data?: any; error?: string }>;
        };
    }
}
