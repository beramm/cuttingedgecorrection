import BookNowButton from "../components/button/BookNowButton"

const ContactUsForm = () => {
    return (
        <div className="min-h-[900px] flex flex-col items-center justify-start gap-24 w-full bg-custom-gradient px-8 md:px-4 xl:px-0 py-28">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-[40px] text-center text-foreground">
                    LOCK IN 
                    <span className="bg-radial-gradient bg-clip-text text-transparent">
                        &nbsp;YOUR DETAIL
                    </span>
                </h1>
            </div>
            <form className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Full name *"
                    className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] border border-gray-500 rounded-lg p-3 text-white bg-transparent focus:outline-none focus:ring focus:ring-gray-700"
                />
                <input
                    type="email"
                    placeholder="Email *"
                    className="w-full sm:w-[400px] md:w-[400px] lg:w-[600px] border border-gray-500 rounded-lg p-3 text-white bg-transparent focus:outline-none focus:ring focus:ring-gray-700"
                />
                <input
                    type="tel"
                    placeholder="Phone number *"
                    className="w-full sm:w-[400px] md:w-[400px] lg:w-[600px] border border-gray-500 rounded-lg p-3 text-white bg-transparent focus:outline-none focus:ring focus:ring-gray-700"
                />
                <input
                    type="text"
                    placeholder="Type of service required"
                    className="w-full sm:w-[400px] md:w-[400px] lg:w-[600px] border border-gray-500 rounded-lg p-3 text-white bg-transparent focus:outline-none focus:ring focus:ring-gray-700"
                />
                <textarea
                    placeholder="Please provide us any further information you think is important"
                    className="w-full sm:w-[400px] md:w-[400px] lg:w-[600px] border border-gray-500 rounded-lg p-3 text-white bg-transparent focus:outline-none focus:ring focus:ring-gray-700"
                    rows="5"
                ></textarea>
                <div className="w-full flex justify-end">
                    <BookNowButton />
                </div>
            </form>
        </div>

    )
}

export default ContactUsForm