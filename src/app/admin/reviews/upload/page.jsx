"use client"
import React, { useEffect, useState } from 'react';
import { LoadingSpinner, LoadingSpinnerSmall } from '../../../components/icon/index';
import { useRouter } from 'next/navigation';
import { Button } from '@material-tailwind/react';
import axios from 'axios';

const UploadReview = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState('');
  const [content, setContent] = useState('');
  const [token, setToken] = useState('');
  const [isSubmit , setIsSubmit] = useState(false)

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (!storedToken) {
      router.push('/admin/login');
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
    router.push('/admin/reviews');
  };

  const handlePost = async (e) => {
    e.preventDefault();
    setIsSubmit(false)

    try {
      await axios.post(
        '/api/v1/reviews',
        { user, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsSubmit(true)
      router.push('/admin/reviews');
    } catch (error) {
      console.error('Error uploading review:', error);
    }
  };

  return (
    <div className="flex w-full min-h-screen items-center justify-center p-6 flex-col max-w-screen-xl m-auto">
      <form
        onSubmit={handlePost}
        className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-sm bg-primary"
      >
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">Upload Review</h2>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setUser(e.target.value)}
            className="w-full rounded-md border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-foreground focus:border-transparent"
            placeholder="Enter the user"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="review" className="text-sm font-medium text-foreground">
            Reviews
          </label>
          <textarea
            id="review"
            name="review"
            rows="8"
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded-md border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-foreground focus:border-transparent resize-none"
            placeholder="Write the review here..."
            required
          />
        </div>

        <button
          type="submit"
          className="text-sm w-full bg-foreground flex justify-center text-center text-primary-foreground py-2.5 px-4 rounded-md text-primary hover:bg-highlight hover:text-foreground transition-colors font-medium"
        >
          {isSubmit ? <LoadingSpinnerSmall/> :"Submit Review"}
        </button>
      </form>

      <div className="flex w-full justify-between mt-11">
        <Button
          variant="outlined"
          className="w-36 bg-foreground h-8 self-end hover:opacity-80 transition duration-200 cursor-pointer"
          onClick={toBack}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default UploadReview;
