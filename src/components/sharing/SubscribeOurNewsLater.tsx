import Email from "../forms/Email"
import Heading from "../sub-components/Heading"

const SubscribeOurNewsLater = () => {
    return (
        <div className="py-10 lg:py-20">
            <div className="sm:text-center">
                <Heading title="Subscribe Our News Later" />
            </div>

            <div className="max-w-4xl mx-auto mt-5 sm:mt-10">
                <Email />
            </div>
        </div>
    )
}

export default SubscribeOurNewsLater