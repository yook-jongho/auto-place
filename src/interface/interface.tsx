export interface CCTV {
    id: string;
    observe: boolean;
    name: string;
    ip: string;
    username: string;
    password: string;
}

export interface Aircon {
    auto: boolean;
    id: string;
    name: string;
    automation: boolean;
    condition: {
        temperature: number;
        compare: string;
    };
    active: {
        before: number;
        after: number;
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
            updateDevice: (
                device: string,
                id: string,
                info: CCTV
            ) => Promise<{ status: string; data?: any; error?: string }>;
            deleteDevice: (
                device: string,
                id: string
            ) => Promise<{ status: string; data?: any; error?: string }>;
        };
    }
}
