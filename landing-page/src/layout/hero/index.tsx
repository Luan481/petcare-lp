import { MdOutlinePets } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import Button from "../../components/Buttons";

export default function Hero() {
    return (
        <section className="flex flex-col justify-center items-center p-15">
            <div className="bg-[#DCEFE4] flex p-2 rounded-full items-center gap-2 ">
                <MdOutlinePets size={12} color="#3F9271" />
                <p className=" text-xs font-bold text-[#153229]">Feito para tutores atentos</p>
            </div>

            <div className="text-center text-5xl m-8 max-w-[580px]">
                <h1 className="font-black text-[#153229]">Toda a rotina do seu pet, <span className=" text-[#FF6B4A]">numa coleira só</span></h1>
                {/* <h1 className="font-black "></h1> */}
            </div>

            <p className=" text-center w-lg text-[#153229]">Agende consultas. Acompanhe vacinas e fale com veterinárias sem sair do app. O PetCare organiza o que seu pet precisa, antes de você precisar lembrar.</p>

            <div className="flex gap-10 m-10 items-center">
                {/* <a href="" className="font-black bg-[#FF6B4A] py-3 px-5 text-white rounded-full shadow-md shadow-[#FF6B4A]">Ver funcionalidades</a> */}
                <Button
                    text="Ver Funcionalidades"
                    bgColor="bg-[#FF6B4A]"
                    textColor="text-white"
                />
                
                <Button
                    text="Falar com um veterinário"
                    bgColor="bg-transparent"
                    textColor="text-[#153229]"
                    fontSize="font-black"
                    isBorder
                    border="border-2 border-[#ccc]"
                />

                {/* <a href="" className=" border-2 border-[#ccc] py-3 px-5 rounded-full font-black text-[#153229]">Falar com um veterinário</a> */}
            </div>

            <div >
                <ul className="flex gap-10 items-center text-center text-[#153229]">
                    <li>
                        <h2 className="font-black">12 mil+</h2>
                        <p className="text-xs">pets cadastrados</p>
                    </li>

                    <li>
                        <h2 className="flex items-center justify-center font-black text-center gap-1">4,9 <IoMdStar size={24} /></h2>
                        <p className="text-xs">avaliação média</p>
                    </li>

                    <li>
                        <h2 className="font-black">24/7</h2>
                        <p className="text-xs">suporte via chat</p>
                    </li>
                </ul>
            </div>

        </section>
    )
}