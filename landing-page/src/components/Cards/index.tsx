import type React from "react";

interface CardProps{
    title: string;
    description: string;
    icon: React.ReactElement;
}

export default function Cards({title, description, icon}: CardProps) {
    return (
        <div className="flex flex-col w-[350px] max-h-[230px] bg-white p-5 rounded-2xl border-2 border-[#ccc]">
            <div className="flex block bg-[#DCEFE4] p-2 w-10
                    h-10 justify-center items-center rounded-2xl mt-3 mb-3">

                {/* <LuCalendar size={20} color="#153229" /> */}
                {icon}
            </div>

            <h3 className="font-black mt-2 mb-2 text-xl text-[#153229]">{title}</h3>
            <p className="text-[#153229]">{description}</p>
        </div>
    )
}