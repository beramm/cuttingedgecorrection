"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "../../../components/icon";
import axios from "axios";
import slugify from "slugify";
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import dynamic from 'next/dynamic';

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });




const BlogAdminUpload = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

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
        const file = event.target.files[0];
        setThumbnail(file);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleUpload = async (event) => {
        event.preventDefault();
        try {
            const slug = slugify(title, { lower: true, strict: true });
            const formData = new FormData();
            formData.append('thumbnail', thumbnail);
            formData.append('title', title);
            formData.append('content', content);
            formData.append('slug', slug);

            const response = await axios.post("/api/v1/blog", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            });
            router.push("/admin/blogs");
        } catch (error) {
            console.error("Error uploading blog:", error);
            alert(error)
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
    // const quillFormats = [
    //     'header',
    //     'bold',
    //     'italic',
    //     'underline',
    //     'strike',
    //     'blockquote',
    //     'list',
    //     'bullet',
    //     'link',
    //     'align',
    //     'color',
    // ];

    const handleEditorChange = (newContent) => {
        setContent(newContent);
    };

    return (
        <>
            <title>Upload Blogs - Cutting Edge Correction</title>
            <meta name="description" content="Upload blog to display on detailing guides page" />

            <div className="flex flex-col w-full min-h-screen p-6 max-w-screen-xl mx-auto space-y-6 overflow-auto mt-16">
            

                <form onSubmit={handleUpload} className="space-y-2">
                    {/* Thumbnail */}
                    <div className="bg-neutral-800 p-4 shadow-md rounded-lg text-foreground">
                        <label htmlFor="image" className="block text-lg font-semibold">
                            Thumbnail
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleThumbnailChange}
                            className="w-full p-2 mt-1 border rounded-lg bg-neutral-800"
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

                    {/* Trix Editor */}
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
                            className="w-full h-[300px] overflow-y-auto mt-10 bg-white"
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
                            className="w-12 lg:w-24 text-xs bg-foreground h-8 self-end hover:opacity-80 transition duration-200 cursor-pointer text-primary rounded-lg font-bold"
                        >
                            Upload Blog
                        </button>
                    </div>

                </form>
            </div>
        </>

    );
};

export default BlogAdminUpload;