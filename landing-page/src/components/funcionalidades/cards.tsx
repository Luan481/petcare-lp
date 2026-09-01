import { createElement, type ReactNode } from "react";
import { LuCalendar } from "react-icons/lu";
import { PiSyringeBold } from "react-icons/pi";
import { FaRegHeart, FaRegClock } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";

interface Card {
    id: number
    title: string;
    description: string;
    icon: ReactNode;
    background: string;
}

const cards: Card[] = [
    {
        id: 1,
        title: "Agendamento de consultas",
        description:
            "Marque horários com clínicas parceiras em poucos toques e receba lembretes automáticos.",
        icon: createElement(LuCalendar, { size: 20, color: "#153229" }),
        background: "bg-[#DCEFE4]",
    },
    {
        id: 2,
        title: "Carteira de vacinação",
        description:
            "Histórico completo de vacinas e vermífugos, com alerta antes de cada dose vencer.",
        icon: createElement(PiSyringeBold, { size: 20, color: "#FF6B4A" }),
        background: "bg-[#f3e0db]",
    },
    {
        id: 3,
        title: "Histórico de saúde",
        description:
            "Peso, exames e diagnósticos organizados por pet, prontos pra mostrar ao veterinário.",
        icon: createElement(FaRegHeart, { size: 20, color: "#F5B942" }),
        background: "bg-[#f3eddb]",
    },
    {
        id: 4,
        title: "Chat com veterinários",
        description:
            "Tire dúvidas rápidas por mensagem, sem precisar sair de casa nem esperar em fila.",
        icon: createElement(IoChatboxOutline, { size: 20, color: "#153229" }),
        background: "bg-[#DCEFE4]",
    },
    {
        id: 5,
        title: "Lembretes inteligentes",
        description:
            "Notificação de banho, remédio e retorno, ajustadas à rotina de cada pet.",
        icon: createElement(FaRegClock, { size: 20, color: "#FF6B4A" }),
        background: "bg-[#f3e0db]",
    },
    {
        id: 6,
        title: "Loja de produtos",
        description:
            "Ração, medicamentos e acessórios recomendados, com entrega direto na sua casa.",
        icon: createElement(BsBasket, { size: 20, color: "#F5B942" }),
        background: "bg-[#f3eddb]",
    }
];

export default cards;
