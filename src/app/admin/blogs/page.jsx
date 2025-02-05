"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCardAdmin from "../../components/card/blog-card/BlogCardAdmin";
import { useRouter } from "next/navigation";
import { LoadingSpinner, NavArrowLeft, NavArrowRight } from "../../components/icon";
import { Alert, Button } from "@material-tailwind/react";

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("error");
  const router = useRouter();

  const fetchBlogs = useCallback(async () => {
    try {
      const resp = await axios.get(`/api/v1/blog?page=${currentPage}`);
      setBlogs(resp.data.data);
      setTotalPages(resp.data.pagination.totalPages);
    } catch (error) {
      console.error(error);
      setAlertType("error");
      setAlertMessage("Error fetching blogs. Please try again.");
      setShowAlert(true);
    }
  }, [currentPage]);
  
  useEffect(() => {
    const initializePage = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) {
          router.push("/admin/login");
        } else {
          setIsLoading(false);
          setToken(token);
          await fetchBlogs();
        }
      } catch (error) {
        console.error(error);
      }
    };
    initializePage();
  }, [currentPage, fetchBlogs, router]);

  if (isLoading) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };


  const handleDelete = async (blogData) => {
    try {
      await axios.delete(`/api/v1/blog/${blogData.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      setAlertType("success");
      setAlertMessage("Blog deleted successfully!");
      setShowAlert(true);
      // Refetch blogs after successful deletion
      await fetchBlogs();
    } catch (error) {
      console.log(error);
      setAlertType("error");
      setAlertMessage("Error deleting blog. Please try again.");
      setShowAlert(true);
    }
  }

  return (
    <>
      <title>Blogs Page - Cutting Edge Correction</title>
      <meta name="description" content="Blogs Page" />

      <div className="max-w-screen-xl m-auto px-8 md:px-12 xl:px-0 pt-28 pb-8">
        {blogs.length === 0 && !isLoading ? (
          <div className="overflow-y-auto h-[600px] flex items-center justify-center">
            No blogs available.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 overflow-y-auto h-[600px] items-center justify-center">
            {blogs.map((blog) => (
              <BlogCardAdmin
                blogData={blog}
                key={blog.id}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        )}

        <div className="flex w-full items-center justify-around lg:justify-between mt-2">
          <div>
            <a href="/admin">
              <button className="w-12 lg:w-24 text-xs bg-foreground h-8 self-end hover:opacity-80 transition duration-200 cursor-pointer text-primary rounded-lg font-bold">Back</button>
            </a>
          </div>
          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-2 mt-6 pb-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center justify-center w-20 px-3 py-1 border border-highlight text-highlight rounded-lg hover:bg-gray-800 disabled:border-gray-400 disabled:bg-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed cursor-pointer"
            >
              <div className="-ms-2">
                <NavArrowLeft size={24} hexColor={currentPage === 1 ? "#D1D5DB" : "#00A2FF"} />
              </div>
              <p>Prev</p>
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 border rounded ${currentPage === index + 1
                  ? "bg-highlight border-highlight text-white"
                  : "hover:bg-accent hover:text-highlight"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center w-20 px-3 py-1 border border-highlight text-highlight rounded-lg hover:bg-gray-800 disabled:border-gray-400 disabled:bg-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed cursor-pointer"
            >
              <p>Next</p>
              <div className="-me-2">
                <NavArrowRight size={24} hexColor={currentPage === totalPages ? "#D1D5DB" : "#00A2FF"} />
              </div>
            </button>
          </div>
          <div>
            <a href="/admin/blogs/upload">
              <button className="w-12 lg:w-24 text-xs bg-foreground h-8 self-end hover:opacity-80 transition duration-200 cursor-pointer text-primary rounded-lg font-bold">Upload</button>
            </a>
          </div>
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
    </>

  );
};

export default BlogAdmin;