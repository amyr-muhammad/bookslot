const BuilderForm = ({
    formData,
    currentService,
    services,
    handleChange,
    handleServiceChange,
    handleAddService,
    handleRemoveService
}) => {

    const commonStyle = "border border-gray-400 rounded-md bg-gray-600 ps-2 h-10 text-gray-300"
    const commonStyle2 = "block mt-4 mb-1"

    return (
        <section className="bg-[#152237] p-4 rounded-2xl w-full text-gray-300">
            <form onSubmit={(e) => e.preventDefault()}>

                <label htmlFor="businessName" className={commonStyle2}>Shop / business name</label>
                <input type="text" id="businessName" name="buisnessName"
                    placeholder="Hassan Salon"
                    className={`w-full ${commonStyle}`}
                    value={formData.buisnessName}
                    onChange={handleChange} />

                <label htmlFor="category" className={commonStyle2}>Category</label>
                <input type="text" id="category" name="category"
                    placeholder="Beauty"
                    className={`w-full ${commonStyle}`}
                    value={formData.category}
                    onChange={handleChange} />

                <label htmlFor="city" className={commonStyle2}>City / Area</label>
                <input type="text" id="city" name="city"
                    placeholder="Lahore"
                    className={`w-full ${commonStyle}`}
                    value={formData.city}
                    onChange={handleChange} />

                <label htmlFor="phone" className={commonStyle2}>WhatsApp Number</label>
                <input type="tel" id="phone" name="phone"
                    placeholder="0300-12356789"
                    className={`w-full ${commonStyle}`}
                    value={formData.phone}
                    onChange={handleChange} />

                <label htmlFor="timing" className={commonStyle2}>Working Hours</label>
                <input type="text" id="timing" name="workingHours"
                    placeholder="9-5"
                    className={`w-full ${commonStyle}`}
                    value={formData.workingHours}
                    onChange={handleChange} />

                <label className={commonStyle2}>Add a service</label>
                <span className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input type="text" name="serviceName"
                        placeholder="Hair Cut"
                        className={commonStyle}
                        value={currentService.serviceName}
                        onChange={handleServiceChange} />

                    <input type="number" name="price"
                        placeholder="RS-500"
                        className={commonStyle}
                        value={currentService.price}
                        onChange={handleServiceChange} />

                    <button type="button" onClick={handleAddService}
                        className="bg-orange-600 px-6 py-1.5 rounded-md cursor-pointer w-full sm:w-auto">
                        Add service
                    </button>
                </span>

                {/* Added services list */}
                {services.length > 0 && (
                    <ul className="mt-3 space-y-2">
                        {services.map((s, index) => (
                            <li key={index} className="flex justify-between items-center bg-gray-700 px-3 py-2 rounded-md">
                                <span>{s.serviceName}</span>
                                <span>RS-{s.price}</span>
                                <button type="button" onClick={() => handleRemoveService(index)}
                                    className="text-red-400 text-sm hover:text-red-300">
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </form>
        </section>
    )
}

export default BuilderForm;