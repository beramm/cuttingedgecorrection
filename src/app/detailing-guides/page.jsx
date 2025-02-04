"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/card/blog-card/BlogCard";
import { useRouter } from "next/navigation";


const detailingGuides = () => {
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
          <div className="max-w-screen-xl m-auto mt-32">
            {guides.length === 0 && !isLoading ? (
              <div className="overflow-y-auto h-[600px] flex items-center justify-center">
                No guides available.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 overflow-y-auto h-[600px] items-center justify-center">
                {guides.map((guide) => (
                  <BlogCard
                    blogData={guide}
                    key={guide.id}
                  />
                ))}
              </div>
            )}
            
            <div className="flex w-full items-center justify-around lg:justify-between">
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
            </div>
          </div>



        </div>
      </div>
    </>

  )
}

export default detailingGuides
