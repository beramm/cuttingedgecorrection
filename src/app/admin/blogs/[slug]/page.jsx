"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "trix";
import "trix/dist/trix.css";
import { LoadingSpinner } from "../../../components/icon";
import axios from "axios";
import Image from "next/image";
import slugify from "slugify";

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
        
        const trixEditor = document.querySelector("trix-editor");
        if (trixEditor) {
          trixEditor.editor.loadHTML(blogData.content);
        }
      } catch (error) {
        setError(error.response?.data?.message || "Error fetching blog");
        console.error("Fetch error:", error);
        router.push("/admin/blogs")
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  useEffect(() => {
    const handleTrixInitialize = (event) => {
      const trixEditor = event.target;
      if (content && trixEditor) {
        trixEditor.editor.loadHTML(content);
      }
    };

    const handleTrixFileAccept = (event) => {
      event.preventDefault();
    };

    const handleTrixChange = (event) => {
      setContent(event.target.innerHTML);
    };

    document.addEventListener("trix-initialize", handleTrixInitialize);
    document.addEventListener("trix-file-accept", handleTrixFileAccept);
    document.addEventListener("trix-change", handleTrixChange);

    return () => {
      document.removeEventListener("trix-initialize", handleTrixInitialize);
      document.removeEventListener("trix-file-accept", handleTrixFileAccept);
      document.removeEventListener("trix-change", handleTrixChange);
    };
  }, [content]);

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
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setError(null);
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
        updatedData.slug = slug ; 
      }
      if (content !== blog.content) {
        updatedData.content = content;
      }
  
      // Only send request if there's something to update
      if (Object.keys(updatedData).length > 0) {
        const response = await axios.patch(
          `/api/v1/blog/${blog.id}`,
          updatedData, // Send JSON object
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
      <meta name="description" content="Edit Blog Page" />
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
        <form onSubmit={handleSave}>
          {/* Title Input */}
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

          {/* Trix Editor */}
          <div className="p-4 shadow-md rounded-lg">
            <label
              htmlFor="my_input"
              className="block text-lg font-semibold text-foreground"
            >
              Content
            </label>
            <trix-toolbar id="my_toolbar" style={{ backgroundColor: "white" }}></trix-toolbar>
            <trix-editor
              id="my_input"
              toolbar="my_toolbar"
              style={{
                height: "300px",
                overflowY: "auto",
                backgroundColor: "#141416",
                color: "white",
                fontSize: "20px",
              }}
              required
            ></trix-editor>
          </div>

          {/* Navigation Buttons */}
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

        {/* Error Alert */}
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