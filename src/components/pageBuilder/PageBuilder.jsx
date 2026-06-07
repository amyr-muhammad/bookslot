import BuilderForm from "./PageForm";
import LivePreview from "./LivePreview";

const PageBuilder = () => {
    return (
        <>
            <section className="pb-5 px-6 sm:px-10 lg:px-20" >
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-2 text-amber-50">Page Builder</h2>
                <p className="text-base sm:text-lg lg:text-xl mb-10 text-gray-300">Fill in your details — your page updates live on the right.</p>
                <span className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <BuilderForm />
                    <LivePreview />
                </span>

            </section>
        </>
    )
}

export default PageBuilder;