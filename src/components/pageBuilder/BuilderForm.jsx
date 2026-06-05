

const BuilderForm = () => {

            const commonStyle = "border border-gray-400 rounded-md bg-gray-600 ps-2 h-10 text-gray-300"
            const commonStyle2 = "block mt-4 mb-1"
    return (

        <>
            <section className="bg-[#152237] p-4 rounded-2xl w-full text-gray-300">
                <form action="">
                    <label htmlFor="businessName" className={commonStyle2}>Shop / business name</label>
                    <input type="text" id="businessName" placeholder="Hassan Salon" className={`w-full ${commonStyle}`} />

                    <label htmlFor="category" className={commonStyle2}>Category</label>
                    <input type="text" id="category" placeholder="Beauty" className={`w-full ${commonStyle}`} />

                    <label htmlFor="city" className={commonStyle2}>City / Area</label>
                    <input type="text" id="city" placeholder="Lahore" className={`w-full ${commonStyle}`} />

                    <label htmlFor="phone" className={commonStyle2}>WhatsApp Number</label>
                    <input type="tel" id="phone" placeholder="0300-12356789" className={`w-full ${commonStyle}`} />

                    <label htmlFor="timing" className={commonStyle2}>working Hours</label>
                    <input type="text" id="timing" placeholder="9-5" className={`w-full ${commonStyle}`} />

                    <label htmlFor="service" className={commonStyle2}>Add a service</label>
                    <span className="grid grid-cols-3 gap-3">
                        <input type="text" id="service" placeholder="Hair Cut" className={commonStyle} />
                        <input type="number" id="service" placeholder="RS-500" className={commonStyle} />
                        <button className="bg-orange-600 px-6 py-1.5 rounded-md  cursor-pointer" >Add service</button>
                    </span>
                </form>
            </section>
        </>
    )
}

export default BuilderForm;