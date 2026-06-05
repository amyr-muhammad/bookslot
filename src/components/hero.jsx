import { HiOutlineBolt } from "react-icons/hi2";


const Hero = () => {
    return (
        <>
            <section className="h-screen bg-gray-950 text-amber-50 grid grid-cols-2 justify-around relative  px-20">
                <section className="flex flex-col items-start mt-30 w-150 p-10 ">
                    <p className="bg-amber-50 text-amber-600 rounded-2xl px-5 py-0.5 w-70 font-[470] text-center flex justify-between items-center mb-3"> <HiOutlineBolt /> For local businesses in Pakistan</p>
                    <h2 className="font-bold text-6xl mb-5 text-amber-50">Your shop online in <span className="text-amber-600">5 minutes</span></h2>
                    <p className=" text-xl mb-5 text-gray-300">No website. No developer. Just fill a form and get a shareable booking page your
                        customers can open on Online, Showcase your services without hustle. Fast, Easy and Secure.</p>
                    <button className="bg-amber-600 px-6 py-1 rounded-3xl  cursor-pointer" >Build your page free</button>
                </section>
                <section className="mt-20">
                    <img src="src/assets/images/proto2.png" alt="" className="w-135" />
                </section>
            </section>

        </>
    )
}

export default Hero;