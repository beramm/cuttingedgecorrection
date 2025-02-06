"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "../../../components/icon";
import axios from "axios";
import Image from "next/image";
import slugify from "slugify";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const QuillEditor = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading editor...</p>,
});

const BlogAdminEdit = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [token, setToken] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [blog, setBlog] = useState({});
    const params = useParams();
    const router = useRouter();
    const slug = params.slug;

    const quillModules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            ['link'],
            [{ 'align': [] }],
            [{ 'color': [] }],
            ['clean'],
        ],
    };

    const quillFormats = [
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'link', 'align', 'color',
    ];

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`/api/v1/blog/${slug}`);
                const blogData = response.data.blog;
                setBlog(blogData);
                setTitle(blogData.title);
                setContent(blogData.content);
            } catch (error) {
                setError(error.response?.data?.message || "Error fetching blog");
                console.error("Fetch error:", error);
                router.push("/admin/blogs");
            } finally {
                setIsLoading(false);
            }
        };
        fetchBlog();
    }, [slug, router]);

    useEffect(() => {
        const initializePage = async () => {
            try {
                const token = sessionStorage.getItem("token");
                if (!token) {
                    router.push("/admin/login");
                } else {
                    setToken(token);
                }
            } catch (error) {
                console.error("Auth error:", error);
                router.push("/admin/login");
            }
        };
        initializePage();
    }, [router]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setError(null);
    };

    const handleEditorChange = (newContent) => {
        setContent(newContent);
    };

    const handleSave = async (event) => {
        event.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const updatedData = {};

            if (title !== blog.title) {
                updatedData.title = title;
                const slug = slugify(title, { lower: true, strict: true });
                updatedData.slug = slug;
            }
            if (content !== blog.content) {
                updatedData.content = content;
            }

            if (Object.keys(updatedData).length > 0) {
                const response = await axios.patch(
                    `/api/v1/blog/${blog.id}`,
                    updatedData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (response.status === 200) {
                    router.push("/admin/blogs");
                } else {
                    throw new Error(response.data.message || "Failed to update blog");
                }
            }
        } catch (error) {
            setError(error.response?.data?.message || "Error updating blog");
            console.error("Update error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex w-full h-full items-center justify-center">
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <>
            <title>Edit Blog - Cutting Edge Correction</title>
            <meta name="description" content="Edit blog to display on detailing guides page" />

            <div className="flex flex-col w-full min-h-screen p-6 max-w-screen-xl mx-auto space-y-6 overflow-auto mt-16">
                {blog.thumbnail && (
                    <Image
                        width={300}
                        height={300}
                        src={blog.thumbnail}
                        alt="Current Thumbnail"
                        className="w-32 h-32 object-cover rounded-lg self-center"
                    />
                )}
                <form onSubmit={handleSave} className="space-y-6">
                    <div className="bg-primary p-4 shadow-md rounded-lg text-foreground">
                        <label htmlFor="title" className="block text-lg font-semibold">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={handleTitleChange}
                            className="w-full p-2 mt-1 border rounded-lg bg-primary"
                            placeholder="Enter blog title"
                            required
                        />
                    </div>

                    <div className="bg-primary p-4 shadow-md rounded-lg">
                        <label className="block text-lg font-semibold text-foreground mb-2">
                            Content
                        </label>
                        <div className="bg-white rounded-lg">
                            <QuillEditor
                                theme="snow"
                                value={content}
                                onChange={handleEditorChange}
                                modules={quillModules}
                                formats={quillFormats}
                                className="w-full h-[300px] overflow-y-auto mt-10 bg-white"
                                style={{ color: "black" }}

                            />
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <a
                            href="/admin/blogs"
                            className="w-12 lg:w-24 text-xs bg-foreground h-8 hover:opacity-80 transition duration-200 cursor-pointer text-primary rounded-lg font-bold text-center flex items-center justify-center"
                        >
                            Back
                        </a>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-12 lg:w-24 text-xs bg-foreground h-8 hover:opacity-80 transition duration-200 cursor-pointer text-primary rounded-lg font-bold disabled:opacity-50"
                        >
                            {isLoading ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>

                {error && (
                    <div
                        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-100 border border-red-400 text-red-700 px-6 py-3 rounded-lg shadow-lg"
                        role="alert"
                    >
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}
            </div>
        </>
    );
};

export default BlogAdminEdit;