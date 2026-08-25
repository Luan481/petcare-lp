import Cards from "../Cards";
import { LuCalendar } from "react-icons/lu";


export default function Funcionalidades() {
    return (
        <section className="flex flex-col px-20 items-center mt-5">
            <div className="bg-[#DCEFE4] flex p-2 rounded-full items-center gap-2 ">
                <p className=" text-xs font-bold text-[#153229]">Funcionalidades</p>
            </div>
            <h2 className="font-black text-[#153229] text-center text-3xl m-8 max-w-[520px]">Tudo que o seu pet precisa, num só lugar</h2>
            <p className="text-[#153229] text-center max-w-[530px]">Da vacina ao passeio, o Petcare acompanha cada etapa do cuidado - pra você nunca perder nada de vista.</p>

            <div className="grid grid-cols-3">
               <Cards title="titulo" description="oi, salve" icon={<LuCalendar size={20} color="#153229" />}/>
               <Cards title="titulo" description="oi, salve" icon={<LuCalendar size={20} color="#153229" />}/>
               <Cards title="titulo" description="oi, salve" icon={<LuCalendar size={20} color="#153229" />}/>
               <Cards title="titulo" description="oi, salve" icon={<LuCalendar size={20} color="#153229" />}/>
               <Cards title="titulo" description="oi, salve" icon={<LuCalendar size={20} color="#153229" />}/>
               <Cards title="titulo" description="oi, salve" icon={<LuCalendar size={20} color="#153229" />}/>    
            </div>
        </section>
    )
}