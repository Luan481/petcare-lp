import { LuCalendar } from "react-icons/lu";

export default function Funcionalidades() {
    return (
        <section className="flex flex-col px-20 items-center mt-5">
            <div className="bg-[#DCEFE4] flex p-2 rounded-full items-center gap-2 ">
                <p className=" text-xs font-bold text-[#153229]">Funcionalidades</p>
            </div>
            <h2 className="font-black text-[#153229] text-center text-3xl m-8 max-w-[520px]">Tudo que o seu pet precisa, num só lugar</h2>
            <p className="text-[#153229] text-center max-w-[530px]">Da vacina ao passeio, o Petcare acompanha cada etapa do cuidado - pra você nunca perder nada de vista.</p>

            <div className="m-10">
                <div className="flex flex-col w-[350px] max-h-[230px] bg-white p-5 rounded-2xl border-2 border-[#ccc]">
                    <div className="flex block bg-[#DCEFE4] p-2 w-10
                    h-10 justify-center items-center rounded-2xl mt-3 mb-3">

                    <LuCalendar size={20} color="#153229" />
                    </div>

                    <h3 className="font-black mt-2 mb-2 text-xl text-[#153229]">Agendamento de consultas</h3>
                    <p className="text-[#153229]">Marque horários com críticas parceiras em poucos toques e receba lembretes automáticos.</p>
                </div>
            </div>
        </section>
    )
}