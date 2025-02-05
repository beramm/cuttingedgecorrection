"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/card/blog-card/BlogCard";
import { useRouter } from "next/navigation";
import { NavArrowLeft, NavArrowRight } from "../components/icon";


const DetailingGuides = () => {
  const [guides, setGuides] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("error");
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const resp = await axios.get(`/api/v1/blog?page=${currentPage}`);
      setGuides(resp.data.data);
      setTotalPages(resp.data.pagination.totalPages);
      // console.log(guides);
    } catch (error) {
      console.error(error);
      setAlertType("error");
      setAlertMessage("Error fetching blogs. Please try again.");
      setShowAlert(true);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    const initializePage = async () => {
      try {

        setIsLoading(false);
        await fetchBlogs();

      } catch (error) {
        console.error(error);
      }
    };
    initializePage();
  }, [currentPage, router]);

  return (
    <>
      <title>Detailing Guides - Cutting Edge Correction</title>
      <meta name="description" content="Read our latest guides on professional vehicle detailing, expert car care tips, and industry insights. Stay informed and keep your ride in top condition with Cutting Edge Correction." />

      <div
        style={{ backgroundImage: `url(/carbon_background.png)`, backgroundPosition: 'center' }}
        className="h-full w-full px-8 md:px-12 xl:px-0 pt-28 pb-8"
      >
        <div className="relative w-full mt-12">
          <div className="text-center text-5xl lg:text-6xl font-extrabold mb-12">
            <h1>
              THE{" "}
              <span className="bg-radial-gradient bg-clip-text text-transparent">
                ULTIMATE
              </span>
              {" "}SHINE GUIDE

            </h1>
            <p className="text-sm font-light mt-8 mx-auto max-w-[566px]">
              Discover the art and science behind what we do at CEC.
              <br />
              These guides break down everything you need to know to achieve a flawless, high-gloss shine. From professional-grade products to insider techniques, we&apos;ll teach you how to keep your ride looking pristine with every detail.            </p>
          </div>

          {/* this is for each card blog */}
          <div className="max-w-screen-xl m-auto mt-20">
            {guides.length === 0 && !isLoading ? (
              <div className="overflow-y-auto h-[600px] flex items-center justify-center">
                No guides available.
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {guides.map((guide) => (
                    <BlogCard
                      blogData={guide}
                      key={guide.id}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-center gap-2 mt-14 pb-6">
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
      </div>
    </>
  )
}

export default DetailingGuides
