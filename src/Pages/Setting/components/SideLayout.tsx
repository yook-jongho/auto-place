import { ReactNode } from "react";

interface SideLayoutProps {
    isVisible: boolean;
    children: ReactNode;
}

export const SideLayout = ({ isVisible, children }: SideLayoutProps) => {
    return (
        <>
            <hr
                className={`w-hr h-600 bg-gray ${
                    isVisible ? "block" : "invisible"
                }`}
            />
            <section className={`w-600 ${isVisible ? "block" : "invisible "} `}>
                {children}
            </section>
        </>
    );
};
