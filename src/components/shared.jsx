import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

const SharedPage = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const encoded = params.get("data")

        if (encoded) {
            try {
                const decoded = JSON.parse(decodeURIComponent(escape(atob(encoded))))
                setData(decoded)
            } catch (e) {
                console.error("Invalid link")
            }
        }
    }, [])

    if (!data) return <p className="text-white p-10">Invalid or expired link.</p>

    const { formData, services } = data

    return (
        <section className="min-h-screen bg-[#0d1b2a] flex items-center justify-center p-6">
            <div className="bg-[#11284d] rounded-2xl w-full max-w-md text-gray-300">

                <div className="bg-orange-500 rounded-t-2xl p-6">
                    <h1 className="font-bold text-3xl text-white">{formData.buisnessName}</h1>
                    <p>{formData.category} — {formData.city}</p>
                    <p className="mt-1 text-sm">{formData.workingHours}</p>
                </div>

                <div className="p-4">
                    <h4 className="text-sm uppercase text-gray-400 mb-2">Services</h4>
                    <ul className="space-y-2">
                        {services.map((s, i) => (
                            <li key={i} className="flex justify-between bg-gray-900 rounded-xl p-2 px-4">
                                <span>{s.serviceName}</span>
                                <span className="text-green-500">Rs {s.price}</span>
                            </li>
                        ))}
                    </ul>

                    <a href={`https://wa.me/${formData.phone}`}
                        target="_blank" rel="noreferrer"
                        className="mt-4 w-full bg-green-600 px-6 py-2 rounded-md flex justify-center items-center gap-2">
                        <FaWhatsapp /> Book on WhatsApp
                    </a>
                </div>

            </div>
        </section>
    )
}

export default SharedPage;