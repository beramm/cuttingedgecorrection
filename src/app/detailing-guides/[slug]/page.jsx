"use client";

import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Image from 'next/image'

const SingleBlog = ({ params }) => {
    const [guide, setGuide] = useState([])
    const slug = params.slug
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("error");

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

    return (
        <div className="h-dvh w-full flex items-center justify-end overflow-hidden 2xl:overflow-visible">
            <Image
                src={guide.thumbnail}
                alt={`thumbnail ${guide.title}`}
                fill
                sizes='auto'
            />
            <div>
                <h1>{guide ? guide.title : "Loading..."}</h1>
                <p className="line-clamp-3 text-smc" dangerouslySetInnerHTML={{ __html: guide.content }} />
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


    );
}

export default SingleBlog