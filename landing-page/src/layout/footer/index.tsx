import { MdOutlinePets } from "react-icons/md";
import SocialMedia from "../../components/SocialMedia";
import { FaInstagram } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";



export default function Footer() {
    return (
        <footer className="flex flex-col px-20 pt-30 pb-20 bg-[#153229] max-h-110 justify-center ">

            <div className="flex gap-10 mb-30">

                <div className="flex flex-col">

                    <div className="flex mb-3 gap-2">
                        <MdOutlinePets size={22} color="white" />
                        <h2 className="font-bold text-2xl text-white text-center">pet <span className="text-[#EB6A4C]">care</span></h2>
                    </div>
                    <p className="max-w-80 text-[#8a8989]">Uma plataforma para cuidar de quem não pode pedir por cuidado, Feito por tutores, para tutores.</p>

                </div>

                <div className="grid grid-cols-3 gap-10 justify-end  ml-20 w-[50vw] text-[#8a8989]">

                    <div>
                        <h2 className="text-xl text-white mb-4">PRODUTO</h2>
                        <ul >
                            <li className="py-2"><a href="#inicio">Início</a></li>
                            <li className="py-2"><a href="#funcionalidades">Funcionalidades</a></li>
                            <li className="py-2"><a href="#planos">Planos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl text-white mb-4">EMPRESA</h2>
                        <ul>
                            <li className="py-2"><a href="">Sobre nós</a></li>
                            <li className="py-2"><a href="">Clínicas parceiras</a></li>
                            <li className="py-2"><a href="">Trabalhe conosco</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl text-white mb-4">CONTATO</h2>
                        <ul>
                            <li className="py-2"><a href="#contato">contato@petcare.app</a></li>
                            <li className="py-2"><a href="">(48)99999-0000</a></li>
                            <li className="py-2"><a href="">Florianópolis, SC</a></li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="flex justify-between">
                <p className="text-[#8a8989]">©2026 PetCare. Todos os direitos reservados</p>


                <div className="pr-20 flex gap-5">
                    <SocialMedia icon={<LuMessageCircle color='#ccc' size={25}/>} />
                    <SocialMedia icon={<FaInstagram color='#ccc' size={25}/>} />
                </div>
            </div>
        </footer>
    )
}