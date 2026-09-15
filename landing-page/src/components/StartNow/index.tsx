import Button from "../Buttons";

export default function StartNow() {
    return (
        <section className="flex justify-center mt-50 mb-30 ">
            <div className="flex bg-[#182420] p-10  justify-between w-4xl h-50 rounded-3xl items-center">
                <div className="flex flex-col max-w-90">
                    <h2 className=" text-2xl font-bold text-white mb-3">Seu pet merece cuidado sem correria</h2>
                    <p className="text-[#4B5A54]">Baixe o PetCare e organize toda a rotina em menos de 2 minutos</p>
                </div>
                <Button text="Começar agora" bgColor="bg-[#FF6B4A]" textColor="text-white" fontSize="text-[15px]" />
            </div>
        </section>
    )
}