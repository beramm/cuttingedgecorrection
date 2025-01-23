"use client"
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

const AdminUserList = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [emails, setEmails] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("error");
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    } else {
      setIsLoading(false);
      setToken(token);
    }
  }, [router]);

  const toUpload = () => {
    router.push("/");
  };
  
  const toBack = () => {
    router.push("/admin");
  };

  const fetchReviews = async () => {
    try {
      setIsFetching(true);
      const reviewData = await axios.get("/api/v1/user");
      setEmails(reviewData.data.data);
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        "Internal Server Error. Please try again.";
      setAlertType("error");
      setAlertMessage(errorMessage);
      setShowAlert(true);
    } finally {
      setIsFetching(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/v1/reviews/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { id: id }
      });
      
      setAlertType("success");
      setAlertMessage("Review deleted successfully!");
      setShowAlert(true);
      
      fetchReviews();
    } catch (error) {
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
      <div className="overflow-y-auto my-16 max-w-screen-lg w-full h-[400px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-200">
        <Card className="w-full text-foreground">
          <CardBody>
            <div className="divide-y divide-gray-200">
              {isFetching ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between py-6 min-h-[100px] md:max-h-[100px] w-full"
                  >
                    <div className="flex items-start gap-x-3 w-full">
                      <div className="w-full">
                        <div className="h-5 bg-gray-300 rounded w-36 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-48"></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : emails.length === 0 ? (
                <div className="flex items-center justify-center py-8 w-full bg-none">
                  <Typography className="text-gray-500 text-lg">
                    There are no user                   </Typography>
                </div>
              ) : (
                emails.map((user, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between py-6 md:max-h-[100px] relative w-full border-gray-800"
                  >
                    <div className="w-full ">
                      <Typography
                        variant="h5"
                        className="text-foreground w-full "
                      >
                        {user.email}
                      </Typography>
                    </div>
                    <div 
                      className="absolute right-0 top-6 cursor-pointer "
                      onClick={() => handleDelete(user._id || user.id)}
                    >
                      <TrashSolidIcon
                        size={20}
                        hexColor="#FFFFFF"
                        className="min-w-[32px] min-h-[32px] hover:opacity-80"
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
          className="w-36 bg-foreground h-8 self-end hover:opacity-80 transition duration-200 cursor-pointer"
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

export default AdminUserList;