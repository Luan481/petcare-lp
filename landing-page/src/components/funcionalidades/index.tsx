import Cards from "../Cards";
import { LuCalendar } from "react-icons/lu";
import { PiSyringeBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";
import cards from "./cards";




export default function Funcionalidades() {
    return (
        <section className="flex flex-col px-20 items-center mt-5">
            <div className="bg-[#DCEFE4] flex p-2 rounded-full items-center gap-2 ">
                <p className=" text-xs font-bold text-[#153229]">Funcionalidades</p>
            </div>
            <h2 className="font-black text-[#153229] text-center text-3xl m-8 max-w-[520px]">Tudo que o seu pet precisa, num só lugar</h2>
            <p className="text-[#153229] text-center max-w-[530px]">Da vacina ao passeio, o Petcare acompanha cada etapa do cuidado - pra você nunca perder nada de vista.</p>

            <div className="grid grid-cols-3 gap-5 m-10">
                {cards.map((card) => (
                    <Cards
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                        background={card.background}
                    />
                ))}
                {/* <Cards 
                title="Agendamento de consultas" 
                description="marque horários com clínicas parceiras em poucos toques e receba lembretes automáticos." 
                icon={<LuCalendar size={20} color="#153229"  />}
                backround="bg-[#DCEFE4]"
                />   
               <Cards 
                title="Carteira de vacinação" 
                description="Histórico completo de vacinas e vermifungos, com alerta antes de cada dose vencer." 
                icon={<PiSyringeBold size={20} color="#FF6B4A"  />}
                backround="bg-[#f3e0db]"
                />   
               <Cards 
                title="Histórico de saúde" 
                description="Peso, exames e diagnósticos organizados por pet, prontos pra mostrar ao veterinário." 
                icon={<FaRegHeart size={20} color="#F5B942"  />}
                backround="bg-[#f3eddb]"
                />   
               <Cards 
                title="Chat com veterinários" 
                description="Tire dúvidas rápidas por mensagem, sem precisar sair de casa nem esperar em fila." 
                icon={<IoChatboxOutline size={20} color="#153229"  />}
                backround="bg-[#DCEFE4]"
                />   
               <Cards 
                title="Lembretes inteligentes" 
                description="Notificação de banho, remédio e retorno, ajustadas à rotina de cada pet." 
                icon={<FaRegClock size={20} color="#FF6B4A"  />}
                backround="bg-[#f3e0db]"
                />   
               <Cards 
                title="Loja de produtos" 
                description="Ração, medicamentos e acessórios recomendados, com entrega direto na sua casa." 
                icon={<BsBasket size={20} color="#F5B942"  />}
                backround="bg-[#f3eddb]"
                />    */}
            </div>
        </section>
    )
}