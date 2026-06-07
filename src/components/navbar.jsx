import { BrowserRouter, Routes, Route } from 'react-router-dom'


const Navbar = () => {

    const handleScroll = () => {
        document.getElementById("page-builder").scrollIntoView({ behavior: "smooth" })
    }

    return (
        <>
            <nav className="w-full bg-[#152237] text-white flex items-center justify-between py-5 px-6 sm:px-10 lg:px-20">
                <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl">Book<span className="text-orange-600">Slot</span></h1>
                <button href="" className="bg-orange-600 px-3 sm:px-4 py-1 border rounded-xl text-sm sm:text-base" onClick={handleScroll}>Create Your Page</button>
            </nav>

        </>
    )
}

export default Navbar; 