"use client";
import React, { useEffect, useState } from "react";
import { LoadingSpinner, TrashSolidIcon } from "../../components/icon";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  Alert,
  Button,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const AdminReview = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("error");
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    } else {
      setIsLoading(false);
      setToken(token);
    }
  }, [router]);

  const toUpload = () => {
    router.push("/admin/reviews/upload");
  };
  
  const toBack = () => {
    router.push("/admin");
  };

  const fetchReviews = async () => {
    try {
      setIsFetching(true);
      const reviewData = await axios.get("/api/v1/reviews");
      console.log("Fetched reviews:", reviewData.data.data); // Debug log
      setReviews(reviewData.data.data);
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        "Internal Server Error. Please try again.";
      console.error("Error fetching in:", errorMessage);
      setAlertType("error");
      setAlertMessage(errorMessage);
      setShowAlert(true);
    } finally {
      setIsFetching(false);
    }
  };

  const handleDelete = async (reviewId) => {
    try {
      const response = await axios.delete(`/api/v1/reviews/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { id: reviewId }
      });
      
      console.log("Delete response:", response);
      
      // Show success alert
      setAlertType("success");
      setAlertMessage("Review deleted successfully!");
      setShowAlert(true);
      
      // Refresh the reviews list
      fetchReviews();
    } catch (error) {
      console.error("Delete error:", error);
      const errorMessage =
        error.response?.data?.error ||
        "Error deleting review. Please try again.";
      setAlertType("error");
      setAlertMessage(errorMessage);
      setShowAlert(true);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  if (isLoading) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center p-6 max-w-screen-xl m-auto">
      <Typography variant="h1" className="font-bold">
        USER{" "}
        <span className="bg-radial-gradient bg-clip-text text-transparent">
          REVIEWS
        </span>
      </Typography>
      <div className="overflow-y-auto my-16 max-w-screen-lg h-[400px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-200">
        <Card className="w-full text-foreground">
          <CardBody>
            <div className="mb-4 flex items-center justify-between"></div>
            <div className="divide-y divide-gray-200">
              {isFetching ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between pb-3 pt-3 last:pb-0 animate-pulse max-h-96"
                  >
                    <div className="flex items-center gap-x-3">
                      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                      <div>
                        <div className="h-5 bg-gray-300 rounded w-36 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-48"></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : reviews.length === 0 ? (
                <div className="flex items-center justify-center py-8">
                  <Typography className="text-gray-500 text-lg">
                    No reviews available. Add a review to get started.
                  </Typography>
                </div>
              ) : (
                reviews.map((review, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between pb-3 pt-3 last:pb-0"
                  >
                    <div className="flex items-center gap-x-3">
                      <div>
                        <Typography
                          variant="h4"
                          className="bg-radial-gradient bg-clip-text text-transparent"
                        >
                          {review.user}
                        </Typography>
                        <Typography
                          variant="small"
                          className="font-extralight text-xs lg:mt-2 pr-10 lg:pr-20"
                        >
                          {review.content}
                        </Typography>
                      </div>
                    </div>
                    <div 
                      className="flex items-center"
                      onClick={() => {
                        console.log("Clicked review:", review);
                        handleDelete(review._id || review.id);
                      }}
                    >
                      <TrashSolidIcon
                        size={20}
                        hexColor="#FFFFFF"
                        className="min-w-[32px] min-h-[32px] cursor-pointer hover:opacity-80"
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="flex w-full justify-between">
        <Button
          variant="outlined"
          className="bg-foreground h-8 self-end hover:opacity-80 transition duration-200 cursor-pointer"
          onClick={toBack}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          className="bg-foreground h-8 self-start hover:opacity-80 transition duration-200 cursor-pointer"
          onClick={toUpload}
        >
          Upload Review
        </Button>
      </div>

      {showAlert && (
        <Alert
          open={showAlert}
          className={`${
            alertType === "error" ? "bg-red-700" : "bg-green-700"
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
              className={`${
                alertType === "error" ? "bg-red-900" : "bg-green-900"
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

export default AdminReview;