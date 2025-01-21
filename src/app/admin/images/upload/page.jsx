"use client";
import React, { useEffect, useState } from "react";
import {
  LoadingSpinner,
  LoadingSpinnerSmall,
  NavArrowDown,
} from "../../../components/icon/index";
import { useRouter } from "next/navigation";
import { Button, Alert } from "@material-tailwind/react";
import axios from "axios";

const AdminImageUpload = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [service_name, setService_name] = useState(""); // State for dropdown selection
  const [url, setUrl] = useState("");
  const [token, setToken] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("error");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      router.push("/admin/login");
    } else {
      setIsLoading(false);
      setToken(storedToken);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  const toBack = () => {
    router.push("/admin/images");
  };

  const handlePost = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    const driveRegex = /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view\?.*/;

    const match = url.match(driveRegex);
    let transformedUrl = "";

    console.log(match);
    if (match) {
      const fileId = match[1];
      transformedUrl = `https://drive.google.com/uc?id=${fileId}`;
      setUrl(transformedUrl);

      console.log("isinya", transformedUrl);
      console.log("isinya 2", url);

    } else {
      setAlertType("error");
      setAlertMessage("Invalid Google Drive URL format.");
      setShowAlert(true);
      setIsSubmit(false);
      return;
    }

    try {
      await axios.post(
        "/api/v1/pictures",
        { url: transformedUrl, service_name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAlertType("success");
      setAlertMessage("Image uploaded successfully!");
      setShowAlert(true);
      router.push("/admin/images");
    } catch (error) {
      console.error("Error uploading image:", error);
      setAlertType("error");
      setAlertMessage(
        "Failed to upload the image. Please check the URL and try again."
      );
      setShowAlert(true);
    } finally {
      setIsSubmit(false);
    }
  };

  const handleServiceChange = (e) => {
    setService_name(e.target.value); // Update service_name when dropdown changes
  };

  return (
    <div className="flex w-full min-h-screen items-center justify-center p-6 flex-col max-w-screen-xl m-auto relative overflow-x-hidden">
      <form
        onSubmit={handlePost}
        className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-sm bg-primary"
      >
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">
            Upload Image
          </h2>
          <h1 className="text-xs font-light">
            This image will be shown at the service results and gallery
          </h1>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="service"
            className="text-sm font-medium text-foreground"
          >
            Service Name
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={service_name} // Bind the dropdown value to the service_name state
              onChange={handleServiceChange} // Update the service_name state on change
              className="w-full rounded-md border bg-background px-3 py-2 pr-10 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-foreground focus:border-transparent appearance-none cursor-pointer"
              required
            >
              <option value="" disabled>
                Select a Service
              </option>
              <option value="Ceramic Coatings">Ceramic Coatings</option>
              <option value="Paint Correction">Paint Correction</option>
              <option value="Engine Bay Detail">Engine Bay Detail</option>
              <option value="Headlight Restoration">
                Headlight Restoration
              </option>
              <option value="Interior Detailing">Interior Detailing</option>
              <option value="Decontamination">Decontamination</option>
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <NavArrowDown size={20} hexColor={"#FFFFFF"} />
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="review"
            className="text-sm font-medium text-foreground"
          >
            Image Url
          </label>
          <textarea
            id="review"
            name="review"
            rows="8"
            onChange={(e) => setUrl(e.target.value)}
            className="w-full rounded-md border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-foreground focus:border-transparent resize-none"
            placeholder="Insert Image Url"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-foreground flex justify-center text-center text-primary-foreground py-2.5 px-4 rounded-md text-primary hover:bg-highlight hover:text-foreground transition-colors font-medium"
        >
          {isSubmit ? <LoadingSpinnerSmall /> : "Submit Review"}
        </button>
      </form>

      <div className="w-full absolute bottom-6 -right-6">
        <Button
          variant="outlined"
          className="bg-foreground h-8 self-end hover:opacity-80 transition duration-200 cursor-pointer"
          onClick={toBack}
        >
          Back
        </Button>
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

export default AdminImageUpload;
