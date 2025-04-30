"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LoadingSpinner, LoadingSpinnerSmall } from "../../../components/icon";
import axios from "axios";
import slugify from "slugify";
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { Alert, Button } from "@material-tailwind/react";

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

const BlogAdminUpload = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("error");

    const router = useRouter();

    useEffect(() => {
        const initializePage = async () => {
            try {
                const token = sessionStorage.getItem("token");
                if (!token) {
                    router.push("/admin/login");
                } else {
                    setIsLoading(false);
                    setToken(token);
                }
            } catch (error) {
                console.error(error);
            }
        };
        initializePage();
    }, []);

    const handleThumbnailChange = (event) => {
        setThumbnailUrl(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleUpload = async (event) => {
        event.preventDefault();
        setIsSubmit(true);

        // Check if URL starts with http:// or https://
        if (!thumbnailUrl.match(/^https?:\/\/.+/)) {
            setAlertType("error");
            setAlertMessage("Invalid URL format. URL must start with http:// or https://");
            setShowAlert(true);
            setIsSubmit(false);
            return;
        }

        const driveRegex = /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view\?.*/;
        const match = thumbnailUrl.match(driveRegex);
        let transformedUrl = "";

        if (match) {
            const fileId = match[1];
            transformedUrl = `https://drive.google.com/uc?id=${fileId}`;
        } else {
            setAlertType("error");
            setAlertMessage("Invalid Google Drive URL format.");
            setShowAlert(true);
            setIsSubmit(false);
            return;
        }

        try {
            const slug = slugify(title, { lower: true, strict: true });
            
            const blogData = {
                thumbnail: transformedUrl,
                title: title,
                content: content,
                slug: slug
            };

            await axios.post("/api/v1/blog", blogData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            
            setAlertType("success");
            setAlertMessage("Blog uploaded successfully!");
            setShowAlert(true);
            router.push("/admin/blogs");
        } catch (error) {
            console.error("Error uploading blog:", error);
            setAlertType("error");
            setAlertMessage("Failed to upload the blog. Please try again.");
            setShowAlert(true);
        } finally {
            setIsSubmit(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex w-full h-full items-center justify-center">
                <LoadingSpinner />
            </div>
        );
    }

    const quillModules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            ['link'],
            [{ align: [] }],
            [{ color: [] }],
            ['clean'],
        ],
    };

    const handleEditorChange = (newContent) => {
        setContent(newContent);
    };

    return (
        <>
            <title>Upload Blogs - Cutting Edge Correction</title>
            <meta name="description" content="Upload blog to display on detailing guides page" />

            <div className="flex flex-col w-full min-h-screen p-6 max-w-screen-xl mx-auto space-y-6 overflow-auto mt-20">
                <form onSubmit={handleUpload} className="space-y-2">
                    {/* Thumbnail URL Input */}
                    <div className="bg-neutral-800 p-4 shadow-md rounded-lg text-foreground">
                        <label htmlFor="thumbnailUrl" className="block text-lg font-semibold">
                            Thumbnail URL (Google Drive Link)
                        </label>
                        <textarea
                            id="thumbnailUrl"
                            name="thumbnailUrl"
                            value={thumbnailUrl}
                            onChange={handleThumbnailChange}
                            className="w-full p-2 mt-1 border rounded-lg bg-neutral-800 resize-none"
                            placeholder="Insert Google Drive Image URL"
                            rows="1"
                            required
                        />
                    </div>

                    {/* Title Input */}
                    <div className="bg-neutral-800 p-4 shadow-md rounded-lg text-foreground">
                        <label htmlFor="title" className="block text-lg font-semibold">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={handleTitleChange}
                            className="w-full p-2 mt-1 border rounded-lg bg-neutral-800"
                            placeholder="Enter blog title"
                            required
                        />
                    </div>

                    {/* Quill Editor */}
                    <div className="bg-neutral-800 p-4 shadow-md rounded-lg">
                        <label
                            htmlFor="my_input"
                            className="block text-lg font-semibold text-foreground"
                        >
                            Content
                        </label>
                        <QuillEditor
                            value={content}
                            onChange={handleEditorChange}
                            modules={quillModules}
                            formats={[
                                'bold',
                                'italic',
                                'underline',
                                'strike',
                                'blockquote',
                                'link',
                                'align',
                                'color',
                            ]}
                            className="w-full h-[300px] overflow-y-auto bg-white"
                            style={{ color: "black" }}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-between">
                        <a href="/admin/blogs" className="w-12 lg:w-24 text-xs bg-foreground h-8 self-end hover:opacity-80 transition duration-200 cursor-pointer text-primary rounded-lg font-bold text-center flex items-center justify-center">
                            Back
                        </a>

                        <button
                            type="submit"
                            className="w-12 lg:w-24 text-xs bg-foreground h-8 self-end hover:opacity-80 transition duration-200 cursor-pointer text-primary rounded-lg font-bold flex items-center justify-center"
                        >
                            {isSubmit ? <LoadingSpinnerSmall /> : "Upload Blog"}
                        </button>
                    </div>
                </form>

                {showAlert && (
                    <Alert
                        open={showAlert}
                        className={`${alertType === "error" ? "bg-red-700" : "bg-green-700"} 
                            text-white fixed bottom-4 left-4 max-w-sm shadow-lg`}
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
                                className={`${alertType === "error" ? "bg-red-900" : "bg-green-900"} 
                                    hover:opacity-80 transition duration-200`}
                            >
                                Close
                            </Button>
                        </div>
                    </Alert>
                )}
            </div>
        </>
    );
};

export default BlogAdminUpload;