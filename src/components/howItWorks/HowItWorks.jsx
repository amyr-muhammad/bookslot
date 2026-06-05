import HitComponent from "./HitComponent";

const HowItWorks = () => {
    return (
        <>
            <div className="bg-gray-950 py-5 px-20">
                
                <hr className=" text-gray-600 mb-10" />

                <h2 className="font-bold text-4xl mb-2 text-amber-50">How it works</h2>
                <p className=" text-xl mb-10 text-gray-300">Just Three steps! No technical knowledge needed.</p>
                <div className="grid md:grid-cols-3 gap-4">
                    <HitComponent number={"1"} heading={"Fill your details"} para={"Shop name, category, city, working hours, WhatsApp number."} />
                    <HitComponent number={"2"} heading={"Add your services"} para={"List each service with a price. Add as many as you want."} />
                    <HitComponent number={"3"} heading={"Share your link"} para={"Copy your page link and send it on WhatsApp, Instagram, or anywhere."} />
                </div>

                <hr className=" text-gray-600 my-10" />

            </div>
        </>
    )
}


export default HowItWorks;