import { HiOutlineBolt } from "react-icons/hi2";



const Hero = () => {
     const handleScroll = () => {
        document.getElementById("page-builder").scrollIntoView({ behavior: "smooth" })
    }
    return (
        <>
            <section className="min-h-screen text-amber-50 grid grid-cols-1 lg:grid-cols-2 items-center gap-6 relative px-6 md:px-12 lg:px-20 py-10 lg:py-0">
                <section className="flex flex-col items-start justify-center w-full p-5 md:p-10">
                    <p className="bg-amber-50 text-orange-600 rounded-2xl px-5 py-0.5 w-fit font-[470] text-center flex justify-between items-center mb-3"> <HiOutlineBolt /> For local businesses in Pakistan</p>
                    <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-5 text-amber-50">Your shop online in <span className="text-orange-600">5 minutes</span></h2>
                    <p className="text-base md:text-lg lg:text-xl mb-5 text-gray-300">No website. No developer. Just fill a form and get a shareable booking page your
                        customers can open Online, Showcase your services without hustle. Fast, Easy and Secure.</p>
                    <button className="bg-orange-600 px-6 py-2 rounded-3xl cursor-pointer hover:bg-orange-700 transition-colors" onClick={handleScroll}>Build your page free</button>
                </section>
                <section className="flex justify-center items-center w-full">
                    <img src="src/assets/images/proto2.png" alt="Booking Page Preview" className="w-full max-w-xs md:max-w-sm lg:max-w-none object-contain" />
                </section>
            </section>

        </>
    )
}

export default Hero;