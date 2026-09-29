import { CiChat1 } from "react-icons/ci";


export default function Chat() {
    return (
        <div className="bg-[#EB6A4C] p-5 rounded-full">
            <a href="https://wa.me">{<CiChat1 color='white' size={25}/>}</a>
        </div>
    )
}