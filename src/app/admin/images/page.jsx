"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LoadingSpinner, TrashSolidIcon } from "../../components/icon";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsHeader,
  TabsBody,
  Button,
  Alert,
} from "@material-tailwind/react";
import axios from "axios";
import Image from "next/image";

const SERVICES = [
  "Ceramic Coatings",
  "Paint Correction",
  "Engine Bay Detail",
  "Headlight Restoration",
  "Interior Detailing",
  "Decontamination",
];

const AdminImageList = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [organizedData, setOrganizedData] = useState([]);
  const [activeTab, setActiveTab] = useState(
    SERVICES[0]?.toLowerCase().replace(/\s+/g, "-")
  );
  const [token, setToken] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("error");
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchPict = async () => {
      try {
        setIsFetching(true);
        const response = await axios.get("/api/v1/pictures");

        const initialGroupedPictures = SERVICES.reduce((acc, service) => {
          acc[service] = [];
          return acc;
        }, {});

        response.data.data.forEach((picture) => {
          if (initialGroupedPictures[picture.service_name]) {
            initialGroupedPictures[picture.service_name].push({
              id: picture.id,
              imageLink: picture.url,
            });
          }
        });

        const formattedData = SERVICES.map((service) => ({
          label: service,
          value: service.toLowerCase().replace(/\s+/g, "-"),
          images: initialGroupedPictures[service] || [],
        }));

        setOrganizedData(formattedData);
      } catch (error) {
        console.error("Error fetching pictures:", error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchPict();
  }, []);

  const toUpload = () => {
    router.push("/admin/images/upload");
  };

  const toBack = () => {
    router.push("/admin");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    } else {
      setIsLoading(false);
      setToken(token);
    }
  }, [router]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/v1/pictures/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { id: id },
      });

      setAlertType("success");
      setAlertMessage("Image deleted successfully!");
      setShowAlert(true);

      // Refetch images after deletion
      const fetchPict = async () => {
        const response = await axios.get("/api/v1/pictures");
        const initialGroupedPictures = SERVICES.reduce((acc, service) => {
          acc[service] = [];
          return acc;
        }, {});
        response.data.data.forEach((picture) => {
          if (initialGroupedPictures[picture.service_name]) {
            initialGroupedPictures[picture.service_name].push({
              id: picture.id,
              imageLink: picture.url,
            });
          }
        });
        const formattedData = SERVICES.map((service) => ({
          label: service,
          value: service.toLowerCase().replace(/\s+/g, "-"),
          images: initialGroupedPictures[service] || [],
        }));
        setOrganizedData(formattedData);
      };
      fetchPict();
    } catch (error) {
      console.error("Error deleting image:", error);
      setAlertType("error");
      setAlertMessage("Error deleting image. Please try again.");
      setShowAlert(true);
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
    <div className="flex flex-col w-full min-h-screen p-6 max-w-screen-xl mx-auto space-y-6">
      <div className="w-full bg-primary rounded-xl shadow-xl flex-1 mt-20">
        <Tabs
          value={activeTab}
          onChange={(value) => setActiveTab(value)}
          className="h-full"
        >
          <TabsHeader
            className="bg-primary p-2 rounded-t-xl overflow-x-auto flex-nowrap"
            indicatorProps={{
              className: "bg-zinc-800 shadow-lg shadow-primary/20",
            }}
          >
            {organizedData.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                className="text-sm md:text-base px-4 py-2 min-w-[140px] whitespace-nowrap text-gray-300 hover:text-white"
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="overflow-auto h-[calc(100vh-300px)] scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-800">
            {organizedData.map(({ value, images, label }) => (
              <TabPanel
                className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6"
                key={value}
                value={value}
              >
                {isFetching ? (
                  Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="w-full h-48 bg-gray-300 rounded-lg animate-pulse"
                    ></div>
                  ))
                ) : images?.length > 0 ? (
                  images.map(({ imageLink, id }) => (
                    <div
                      key={id}
                      className="group relative rounded-lg overflow-hidden shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
                    >
                      <div className="aspect-[4/3] relative">
                        <Image
                          className="w-full h-full object-cover"
                          src={imageLink}
                          width={400}
                          height={300}
                          unoptimized={true}
                          sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 300px"
                          alt={`service-image-${id}`}
                          style={{ imageRendering: "crisp-edges" }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/picture-loading-failed.png";
                          }}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 md:bg-black/0 md:group-hover:bg-black/40 transition-all duration-300">
                          <button
                            onClick={() => handleDelete(id)}
                            className="absolute top-3 right-3 p-2.5 rounded-full bg-red-500/90 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-600 active:scale-95 touch-manipulation"
                            aria-label="Delete image"
                          >
                            <TrashSolidIcon size={20} hexColor={"#FFFFFF"} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex items-center justify-center py-12 text-gray-400">
                    No images available for {label}
                  </div>
                )}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
      <div className="flex w-full justify-between mt-4">
        <Button
          variant="outlined"
          className="bg-foreground px-6 py-2 hover:opacity-80 transition duration-200 cursor-pointer"
          onClick={toBack}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          className="bg-foreground px-6 py-2 hover:opacity-80 transition duration-200 cursor-pointer"
          onClick={toUpload}
        >
          Upload Images
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

export default AdminImageList;
