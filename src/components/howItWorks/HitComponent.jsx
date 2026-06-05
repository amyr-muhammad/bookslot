const HitComponent = ({number, heading, para}) => {
    return (
        <>
        <section className="bg-[#152237] px-4 py-6 rounded-2xl w-full">
            <h2 className="bg-amber-50 text-orange-600 rounded-4xl px-4 py-2.5 font-medium inline ">{number}</h2>
            <h3 className="text-amber-50 mt-4 font-medium text-xl">{heading}</h3>
            <p className="text-gray-300 font-[380] ">{para}</p>
        </section>
        </>
    )
}


export default HitComponent;