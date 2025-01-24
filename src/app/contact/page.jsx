"use client"
import { useState } from "react"
import BookNowButton from "../components/button/BookNowButton"
import axios from "axios"
import { Alert, Button } from "@material-tailwind/react"

const ContactUsForm = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [service, setService] = useState("")
    const [notes, setNotes] = useState("")
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    const [alertType, setAlertType] = useState("success")

    const handleSubmit = async (e) => {
        e.preventDefault()
     
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setAlertType("error");
          setAlertMessage("Please enter a valid email address.");
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 3000);
          return;
        }
     
        try { 
            const requestBody = { 
                fullName, 
                email, 
                phone, 
                service 
            }
        
            if (notes.trim() !== "") {
                requestBody.notes = notes
            }
        
            const resp = await axios.post('api/v1/send-email', requestBody)
            
            setAlertType("success")
            setAlertMessage("Form submitted successfully!")
            setShowAlert(true)
     
            setFullName("")
            setEmail("")
            setPhone("")
            setService("")
            setNotes("")
     
            // Automatically hide the alert after 3 seconds
            setTimeout(() => setShowAlert(false), 3000)
        } catch(error) { 
            setAlertType("error")
            setAlertMessage(error.response?.data?.error || "Failed to submit. Please try again.")
            setShowAlert(true)
     
            // Automatically hide the alert after 3 seconds
            setTimeout(() => setShowAlert(false), 3000)
        }
     }
    return (
        <>
        <Alert
                open={showAlert}
                onClose={() => setShowAlert(false)}
                className={`${
                    alertType === "error" ? "bg-red-700" : "bg-green-700"
                } text-white fixed bottom-4 left-4 z-50 shadow-lg max-w-sm`}
                animate={{
                    mount: { opacity: 1, transform: "translateY(0)" },
                    unmount: { opacity: 0, transform: "translateY(-100%)" },
                }}
            >
                <div className="flex justify-between items-center gap-5">
                    <span className="flex-grow text-sm">{alertMessage}</span>
                    <Button
                        variant="text"
                        color="white"
                        size="sm"
                        onClick={() => setShowAlert(false)}
                        className={`${
                            alertType === "error" ? "bg-red-900" : "bg-green-900"
                        } hover:opacity-80 transition duration-200`}
                    >
                        Close
                    </Button>
                </div>
            </Alert>

            <div className="min-h-[900px] flex flex-col items-center justify-start gap-24 w-full gap-y-10 bg-custom-gradient px-8 md:px-4 xl:px-0 py-28">
            <div className="flex flex-col items-center mt-8">
                <h1 className="font-black text-[40px] text-center text-foreground">
                    LOCK IN 
                    <span className="bg-radial-gradient bg-clip-text text-transparent">
                        &nbsp;YOUR DETAIL
                    </span>
                </h1>
            </div>
            <form className="flex flex-col gap-4 w-full max-w-xl" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Full name *"
                    onChange={(e)=>setFullName(e.target.value)}
                    value={fullName}
                    className="w-full border border-gray-500 rounded-lg p-3 text-white bg-transparent focus:outline-none focus:ring focus:ring-gray-700"
                />
                <input
                    type="email"
                    placeholder="Email *"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    className="w-full border border-gray-500 rounded-lg p-3 text-white bg-transparent focus:outline-none focus:ring focus:ring-gray-700"
                />
                <input
                    type="tel"
                    placeholder="Phone number *"
                    onChange={(e)=>setPhone(e.target.value)}
                    value={phone}
                    className="w-full border border-gray-500 rounded-lg p-3 text-white bg-transparent focus:outline-none focus:ring focus:ring-gray-700"
                />
                <input
                    type="text"
                    placeholder="Type of service required"
                    onChange={(e)=>setService(e.target.value)}
                    value={service}
                    className="w-full border border-gray-500 rounded-lg p-3 text-white bg-transparent focus:outline-none focus:ring focus:ring-gray-700"
                />
                <textarea
                    placeholder="Please provide us any further information you think is important"
                    onChange={(e)=>setNotes(e.target.value)}
                    value={notes}
                    className="w-full border border-gray-500 rounded-lg p-3 text-white bg-transparent focus:outline-none focus:ring focus:ring-gray-700"
                    rows="5"
                ></textarea>
                <div className="w-full flex justify-end">
                    <BookNowButton />
                </div>
            </form>
        </div>

        </>
       
    )
}

export default ContactUsForm