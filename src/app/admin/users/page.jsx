"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AdminUserList = () => {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/v1/user");
        setUser(response.data.data || []);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUser([]);
      } finally {
        setIsFetching(false);
      }
    };

    fetchUsers();
  }, []);

  const toggleEmailSelection = (email) => {
    setSelectedEmails((prev) =>
      prev.includes(email)
        ? prev.filter((e) => e !== email)
        : [...prev, email]
    );
  };

  const selectAllUsers = () => {
    const allEmails = user.map((userData) => userData.email);
    setSelectedEmails(allEmails);
  };

  const handleBroadcast = () => {
    if (selectedEmails.length === 0) {
      alert("Please select at least one email to broadcast.");
      return;
    }
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&bcc=${selectedEmails.join(
      ","
    )}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="flex flex-col w-full min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl space-y-6 mt-24">
        <h2 className="text-2xl font-bold text-center">
          Admin - Broadcast Email
        </h2>

        <div className="w-full border rounded-lg p-4">
          <h5 className="text-lg mb-4">User Email List</h5>
          <div className="h-[400px] overflow-y-auto border rounded-lg">
            {isFetching ? (
              <div className="text-center py-4">Loading emails...</div>
            ) : user.length === 0 ? (
              <div className="text-center py-4 text-gray-500">
                No users found.
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {user.map((userData) => (
                  <div
                    key={userData.id || userData._id || Math.random()}
                    className="flex items-center justify-between p-4 hover:opacity-50 cursor-pointer"
                    onClick={() => toggleEmailSelection(userData.email)}
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-600"
                        checked={selectedEmails.includes(userData.email)}
                        readOnly
                      />
                      <span>{userData.email}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="text-center flex gap-8 justify-center">
          <button
            className="bg-white text-black border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 w-32"
            onClick={() => router.push("/admin")}
          >
            Back
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-32"
            onClick={handleBroadcast}
          >
            Broadcast
          </button>
          <button
            className="bg-white text-black border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 w-32"
            onClick={selectAllUsers}
          >
            Select All
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminUserList;
