import ToggleButton from "../../components/toggleBtn";

interface Props {
    observe: boolean;
}

// const Textarea = () => {
//     const [inputCount, setInputCount] = useState(0);
//     const onTextareaHandler = (e: any) => {
//         setInputCount(
//             e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2")
//                 .length
//         );
//     };

//     return (
//         <div className="flex flex-col mb-10">
//             <textarea
//                 onChange={onTextareaHandler}
//                 className="w-full h-64 border border-gray p-3"
//                 maxLength={1000}
//             ></textarea>
//             <span className="text-right">{inputCount} / 1000</span>
//         </div>
//     );
// };

export const SetCctv = ({ observe }: Props) => {
    return (
        <>
            <div className="flex flex-row justify-between mb-10">
                <span className="font-semibold">인원수 측정</span>
                <ToggleButton flag={observe} />
            </div>
            {/* <span className="font-semibold">가격 설정</span>
                <div className="flex flex-row justify-between mt-3 mb-10 items-center">
                    <span>초과인원 당</span>
                    <div>
                        <input
                            type="number"
                            className="border border-gray w-36 h-10 text-right p-3"
                        />
                        원
                    </div>
                </div> */}
            <div>
                {/* <div className="flex flex-row justify-between mb-10">
                        <span className="font-semibold">문자 발송</span>
                        <ToggleButton flag={observe} />
                    </div>
                    <Textarea /> */}
                <button className="w-56 float-right text-center border border-black p-3">
                    저장
                </button>
            </div>
        </>
    );
};
