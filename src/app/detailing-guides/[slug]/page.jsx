"use client";

import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useIsVisible } from "../../hooks/useIsVisible";


const SingleBlog = ({ params }) => {
    const [guide, setGuide] = useState([])
    const slug = params.slug
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("error");

    const ref = useRef();
    const isVisible = useIsVisible(ref);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await axios.get(`/api/v1/blog/${slug}`)
                setGuide(response.data.blog)
            } catch (error) {
                console.error(error);
                setAlertType("error");
                setAlertMessage("Error fetching blog. Please try again.");
                setShowAlert(true);
            }
        }
        fetchResults()
    }, [])

    console.log(guide.content)
    return (
        <>
            <title>{`${guide.title} - Cutting Edge Correction`}</title>
            <meta name="description"
                content={guide?.content
                    ? guide.content.replace(/<[^>]+>/g, "").slice(0, 160) + "..."
                    : "Discover expert detailing guides from Cutting Edge Correction."}
            />
            <div
                className="h-full w-full px-8 md:px-12 xl:px-0 pt-28 pb-8"
            >
                <div ref={ref} className="relative w-full mt-12">
                    <div className={`max-w-6xl mx-auto transition-all ease-in-out duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        {/* Thumbnail */}
                        {guide?.thumbnail && (
                            <img
                                src={guide.thumbnail}
                                alt={guide.title}
                                className="w-full max-h-[400px] object-cover rounded-lg mb-6"
                            />
                        )}

                        <p className="text-white-500 text-base mt-2 mb-8">
                            {guide?.created_at
                                ? new Date(guide.created_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short" }) + " . Written By "
                                : ""}
                            <span className="text-[#00A2FF]">Cutting Edge Correction</span>
                        </p>
                        <h1 className="text-5xl font-bold mb-8">{guide ? guide.title : "Loading..."}</h1>


                        <p className="text-lg text-white-700" dangerouslySetInnerHTML={{ __html: guide.content }} />
                    </div>



                    {showAlert && (
                        <Alert
                            open={showAlert}
                            className={`${alertType === "error" ? "bg-red-700" : "bg-green-700"
                                } text-white fixed bottom-4 left-4 max-w-sm shadow-lg`}
                            animate={{
                                mount: { opacity: 1 },
                                unmount: { opacity: 0 },
                            }}
                        >
                            <div className="flex justify-between items-center gap-5">
                                <span className="flex-grow">{alertMessage}</span>
                                <Button
                                    variant="text"
                                    color="white"
                                    size="sm"
                                    onClick={() => setShowAlert(false)}
                                    className={`${alertType === "error" ? "bg-red-900" : "bg-green-900"
                                        } hover:opacity-80 transition duration-200`}
                                >
                                    Close
                                </Button>
                            </div>
                        </Alert>
                    )}
                </div>
            </div>
        </>


    );
}

export default SingleBlog