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
import { LoadingSpinner, LoadingSpinnerSmall } from "../../components/icon";
import Link from "next/link";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [tokenExist, setTokenExist] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      router.push("/admin");
    } else {
      setTokenExist(false);
    }
  }, [router]);

  if (tokenExist) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <LoadingSpinner />
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
        sessionStorage.setItem("token", token);
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
    <>
      <title>Login Admin - Cutting Edge Correction</title>
      <meta name="description" content="Login to Admin Page" />

      <div className="h-screen w-full flex items-center justify-center text-foreground px-6">
        <div className="relative w-full max-w-xl mx-auto">
          <Card
            className="w-full bg-transparent text-foreground px-6 md:px-16 py-8 md:py-12"
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="text-center text-foreground bg-transparent"
            >
              <h1 className="mb-4 text-4xl md:text-4xl lg:text-5xl font-bold">
                ADMIN{" "}
                <span className="bg-radial-gradient bg-clip-text text-transparent">
                  LOGIN
                </span>
              </h1>
            </CardHeader>
            <CardBody className="p-0">
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
                <div className="flex items-center justify-between gap-x-3">
                  <Link
                    href={"/"}
                    className="w-full rounded-lg bg-primary font-semibold text-sm border border-accent text-accent h-10 flex items-center justify-center hover:border-gray-500 hover:bg-gray-500 hover:text-foreground transition duration-200"
                  >
                    Landing Page
                  </Link>
                  <Button
                    size="lg"
                    color="gray"
                    fullWidth
                    className={`bg-foreground text-primary h-10 flex items-center justify-center hover:bg-highlight hover:text-foreground transition duration-200`}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? <LoadingSpinnerSmall /> : "Continue"}
                  </Button>
                </div>
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
    </>

  );
};

export default Page;
