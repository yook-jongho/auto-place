import { useNavigate } from "react-router-dom";

interface HeaderName {
    name: string;
}

export const Header = ({ name }: HeaderName) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <header className="w-5/6 text-center">
            <span className="float-left cursor-pointer" onClick={goBack}>
                ←
            </span>
            <span className="text-2xl font-semibold">{name}</span>
        </header>
    );
};
