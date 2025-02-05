// "use client";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import "trix";
// import "trix/dist/trix.css";
// import { LoadingSpinner } from "../../../components/icon";
// import axios from "axios";
// import slugify from "slugify";

// const BlogAdminUpload = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [token, setToken] = useState("");
//   const [thumbnail, setThumbnail] = useState(null);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const router = useRouter();

//   useEffect(() => {
//     document.addEventListener("trix-initialize", () => {
//       console.log("Trix Editor Initialized");
//     });

//     document.addEventListener("trix-file-accept", (event) => {
//       event.preventDefault(); // Prevent file attachments
//     });

//     // Handle Trix editor content changes
//     document.addEventListener("trix-change", (event) => {
//       setContent(event.target.innerHTML);
//     });
//   }, []);

//   useEffect(() => {
//     const initializePage = async () => {
//       try {
//         const token = sessionStorage.getItem("token");
//         if (!token) {
//           router.push("/admin/login");
//         } else {
//           setIsLoading(false);
//           setToken(token);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     initializePage();
//   }, []);

//   const handleThumbnailChange = (event) => {
//     const file = event.target.files[0];
//     setThumbnail(file);
//   };

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleUpload = async (event) => {
//     event.preventDefault();
//     try {
//       const slug = slugify(title, { lower: true, strict: true });
//       const formData = new FormData();
//       formData.append('thumbnail', thumbnail);
//       formData.append('title', title);
//       formData.append('content', content);
//       formData.append('slug', slug); 

//       const response = await axios.post("/api/v1/blog", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         }
//       });
//       router.push("/admin/blogs");
//     } catch (error) {
//       console.error("Error uploading blog:", error);
//       alert(error)
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex w-full h-full items-center justify-center">
//         <LoadingSpinner />
//       </div>
//     );
//   }

//   return (
//     <>
//       <title>Upload Blogs - Cutting Edge Correction</title>
//       <meta name="description" content="Upload blogs Page" />
//       <div className="flex flex-col w-full min-h-screen p-6 max-w-screen-xl mx-auto space-y-6 overflow-auto mt-16">
//         <style>{`
//         trix-toolbar [data-trix-button-group="file-tools"] {
//           display: none !important;
//         }
//       `}</style>

//         <form onSubmit={handleUpload} className="space-y-6">
//           {/* Thumbnail */}
//           <div className="bg-neutral-800 p-4 shadow-md rounded-lg text-foreground">
//             <label htmlFor="image" className="block text-lg font-semibold">
//               Thumbnail
//             </label>
//             <input
//               type="file"
//               id="image"
//               name="image"
//               accept="image/*"
//               onChange={handleThumbnailChange}
//               className="w-full p-2 mt-1 border rounded-lg bg-neutral-800"
//               required
//             />
//           </div>

//           {/* Title Input */}
//           <div className="bg-neutral-800 p-4 shadow-md rounded-lg text-foreground">
//             <label htmlFor="title" className="block text-lg font-semibold">
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={title}
//               onChange={handleTitleChange}
//               className="w-full p-2 mt-1 border rounded-lg bg-neutral-800"
//               placeholder="Enter blog title"
//               required
//             />
//           </div>

//           {/* Trix Editor */}
//           <div className="bg-neutral-800 p-4 shadow-md rounded-lg">
//             <label
//               htmlFor="my_input"
//               className="block text-lg font-semibold text-foreground"
//             >
//               Content
//             </label>
//             <trix-toolbar
//               id="my_toolbar"
//               style={{ backgroundColor: "white", fontSize: '16px', padding: '10px' }}
//             ></trix-toolbar>
//             <trix-editor
//               id="my_input"
//               toolbar="my_toolbar"
//               style={{
//                 height: "300px",
//                 overflowY: "auto",
//                 backgroundColor: "#262626",
//                 color: "white",
//                 fontSize: "20px",
//               }}
//               required
//             ></trix-editor>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-between">
//             <a href="/admin/blogs" className="w-12 lg:w-24 text-xs bg-foreground h-8 self-end hover:opacity-80 transition duration-200 cursor-pointer text-primary rounded-lg font-bold text-center flex items-center justify-center">
//               Back
//             </a>

//             <button
//               type="submit"
//               className="w-12 lg:w-24 text-xs bg-foreground h-8 self-end hover:opacity-80 transition duration-200 cursor-pointer text-primary rounded-lg font-bold"
//             >
//               Upload Blog
//             </button>
//           </div>

//         </form>
//       </div>
//     </>

//   );
// };

// export default BlogAdminUpload;