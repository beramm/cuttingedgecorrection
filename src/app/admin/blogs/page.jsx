"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCardAdmin from "../../components/card/blog-card/BlogCardAdmin";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "../../components/icon";
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

  const fetchBlogs = async () => {
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
  };

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
  }, [currentPage, router]);

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

  const handleEdit = (blogData) => {
    console.log('Edit blog:', blogData.id);
  }

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
    <div className="max-w-screen-xl m-auto mt-32">
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
              handleEdit={handleEdit}
            />
          ))}
        </div>
      )}

      <div className="flex w-full items-center justify-around lg:justify-between">
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
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 border rounded ${currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
                }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
          >
            Next
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
  );
};

export default BlogAdmin;