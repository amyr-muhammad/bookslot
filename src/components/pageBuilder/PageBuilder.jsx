import { useState } from "react"
import BuilderForm from "./PageForm"
import LivePreview from "./LivePreview"

const PageBuilder = () => {

    const [formData, setFormData] = useState({
        buisnessName: "",
        category: "",
        city: "",
        phone: "",
        workingHours: "",
    })

    const [services, setServices] = useState([])

    const [currentService, setCurrentService] = useState({
        serviceName: "",
        price: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleServiceChange = (e) => {
        const { name, value } = e.target
        setCurrentService({ ...currentService, [name]: value })
    }

    const handleAddService = () => {
        if (!currentService.serviceName || !currentService.price) return
        setServices([...services, currentService])
        setCurrentService({ serviceName: "", price: "" })
    }

    const handleRemoveService = (index) => {
        setServices(services.filter((_, i) => i !== index))
    }

    return (
        <section className="pb-5 px-6 sm:px-10 lg:px-20" id="page-builder" >
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-2 text-amber-50">Page Builder</h2>
            <p className="text-base sm:text-lg lg:text-xl mb-10 text-gray-300">Fill in your details — your page updates live on the right.</p>
            <span className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <BuilderForm
                    formData={formData}
                    currentService={currentService}
                    services={services}
                    handleChange={handleChange}
                    handleServiceChange={handleServiceChange}
                    handleAddService={handleAddService}
                    handleRemoveService={handleRemoveService}
                />
                <LivePreview
                    formData={formData}
                    services={services}
                />
            </span>
        </section>
    )
}

export default PageBuilder