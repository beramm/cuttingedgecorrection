"use client";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { LeftArrowIcon, LoadingSpinner } from "../../components/icon";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [tokenExist, setTokenExist] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/admin");
    } else {
      setTokenExist(false);
    }
  }, [router]);

  if (tokenExist) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <LoadingSpinner/>
      </div>
    );
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/v1/user/admin/login", {
        email,
        password,
      });

      const token = response.data.token;

      if (token) {
        localStorage.setItem("token", token);
        console.log("Login successful. Token stored.");
        setLoading(false);
        router.push("/admin");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Internal Server Error. Please try again.";
      console.error("Error logging in:", errorMessage);

      setAlertMessage(errorMessage);
      setShowAlert(true);
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center text-foreground px-6">
      <div className="relative w-full max-w-xl mx-auto">
        <a
          className="absolute -top-10 left-0 lg:-left-44 flex items-center gap-2 text-sm font-medium text-gray-300 hover:underline"
          href="/"
        >
          <LeftArrowIcon size={20} hexColor={"#FFFFFF"} />
          <span>Landing Page</span>
        </a>
        <Card
          shadow={false}
          className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-none text-foreground px-6 md:px-16 py-8 md:py-12"
        >
          <CardHeader
            shadow={false}
            floated={false}
            className="text-center text-foreground"
          >
            <h1
              variant="h1"
              className="mb-4 text-4xl md:text-4xl lg:text-5xl font-bold"
            >
              ADMIN{" "}
              <span className="bg-radial-gradient bg-clip-text text-transparent">
                LOGIN
              </span>
            </h1>
          </CardHeader>
          <CardBody>
            <form className="flex flex-col gap-6 mt-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email">
                  <Typography
                    variant="small"
                    className="block font-medium mb-2"
                  >
                    Email
                  </Typography>
                </label>
                <Input
                  id="email"
                  color="gray"
                  size="lg"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndoe@mail.com"
                  className="!w-full placeholder:!opacity-100 focus:!border-t-foreground !border-t-gray-300 h-10 p-4"
                  labelProps={{
                    className: "hidden",
                  }}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">
                  <Typography
                    variant="small"
                    className="block font-medium mb-2"
                  >
                    Password
                  </Typography>
                </label>
                <Input
                  id="password"
                  color="gray"
                  size="lg"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="!w-full placeholder:!opacity-100 focus:!border-t-foreground !border-t-gray-300 h-10 p-4"
                  labelProps={{
                    className: "hidden",
                  }}
                  required
                />
              </div>
              <Button
                size="lg"
                color="gray"
                fullWidth
                className={`bg-foreground text-primary h-10 flex items-center justify-center hover:bg-highlight hover:text-foreground transition duration-200`}
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="w-4 h-4 text-gray-300 animate-spin"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                ) : (
                  "Continue"
                )}
              </Button>
            </form>
          </CardBody>
        </Card>
        {showAlert && (
          <Alert
            open={showAlert}
            className="bg-red-700 text-white absolute"
            animate={{
              mount: { y: 0 },
              unmount: { y: 100 },
            }}
            action={
              <Button
                variant="text"
                color="white"
                size="sm"
                className="!absolute top-3 right-3 bg-red-900 hover:opacity-80 transition duration-200"
                onClick={() => setShowAlert(false)}
              >
                Close
              </Button>
            }
          >
            {alertMessage}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Page;
