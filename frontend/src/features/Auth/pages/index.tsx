import { MdOutlinePets } from "react-icons/md";


export default function login() {
    return (<>
        <div className="flex flex-col justify-center items-center">

            <div className="flex gap-3 items-center mt-25">
                <MdOutlinePets size={20} />
                <h2 className="font-bold text-xl">pet <span className="font-bold text-[#FF6B4A]">care</span></h2>
            </div>

            <div className="flex flex-col p-5 w-sm">

                <div className="flex flex-col items-center my-10">

                    <h1 className="font-bold text-2xl">Entrar na sua conta</h1>

                    <p className="font-bold text-sm text-[#999898]">Acompanhe a rotina do seu pet</p>

                </div>

                <label htmlFor="" className="font-bold my-2">E-mail</label>

                <input type="text" placeholder="voce@gmail.com" className="border-b-2 border-[#ccc] w-full pb-2" />

                <label htmlFor="" className="font-bold my-2 ">Senha</label>

                <input type="text" placeholder="Sua senha" className="border-b-2 border-[#ccc] w-full pb-2" />

                <a href="" className="font-bold text-end text-sm py-4 text-[#999898]">Esqueci minha senha</a>

                <button className="my-5 bg-black text-white p-3 w-full rounded-full">Entrar</button>

                <div className="flex justify-center">
                    <p className="font-bold text-[#999898] text-sm">Ainda não tem conta?</p><a href="" className="font-bold text-black text-sm mx-0.5">Cadastre seu pet</a>
                </div>

            </div>

        </div>
    </>)
}