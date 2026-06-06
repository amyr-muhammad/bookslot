import { FaCircle } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { FaRegCopy } from "react-icons/fa6";



const LivePreview = () => {

    const btn = "w-full bg-orange-600 px-6 py-1.5 rounded-md  cursor-pointer"
    return (
        <>
            <section className="bg-[#152237] p-4 rounded-2xl w-full text-gray-300">
                <p className="flex items-center  mt-4 mb-2 text-xl"><FaCircle className="text-green-500 me-1 text-xs" />Live Preview</p>

                <div className="bg-[#11284d] rounded-2xl">
                    <div className="bg-orange-500 rounded-t-2xl p-4 text-gray-300">
                        <h3 className="font-bold text-2xl">Your Buisness Name</h3>
                        <p>Category - city</p>
                    </div>

                    <div className="p-4 text-gray-300">
                        <h4 className="text-sm sm:text-base">SERVICES</h4>
                        <ul className="p-3">
                            <li className="flex justify-between bg-gray-900 rounded-xl p-2 px-4 text-sm sm:text-base">
                                <p>Service Name</p>
                                <p className="text-green-600 ">Rs —</p>
                            </li>
                        </ul>

                        <div className="px-3">
                            <button className={`${btn} flex justify-center items-center text-sm sm:text-base`}> <FaWhatsapp className="me-1"/> Book on WhatsApp</button>
                            <span className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                                <button className={`${btn} flex justify-center items-center text-sm sm:text-base`}><FaRegCopy className="me-1"/> Copy Link</button>
                                <button className={`${btn} flex justify-center items-center text-sm sm:text-base`}><PiShareFat className="me-1"/> Share</button>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default LivePreview;