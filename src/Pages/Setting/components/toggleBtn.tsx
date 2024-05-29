import React, { useState, useEffect } from "react";
interface Props {
    flag: boolean;
}

const ToggleButton = ({ flag }: Props) => {
    const [isActive, setIsActive] = useState(flag);

    useEffect(() => {
        setIsActive(flag);
    }, [flag]);
    const toggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            onClick={toggle}
            className={`w-16 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
                isActive ? "bg-[#00A3FF]" : "bg-zinc-300"
            }`}
        >
            <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                    isActive ? "translate-x-8" : ""
                }`}
            ></div>
        </div>
    );
};

export default ToggleButton;
