import React, { useEffect, useState } from 'react';
import { useUsersPosts } from "../../lib/my-api";
import ExampleUsersPosts from '../../components/example-users-posts';

function ProfilePage() {
  const userId = 2; // Replace with the appropriate user ID
  const { status, error, data: fetchedPosts } = useUsersPosts(userId);
  const isLoading = status === "loading";
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    if (fetchedPosts) {
      setPosts(fetchedPosts);
    }
  }, [fetchedPosts]);

  const userProfile = {
    id: 1,
    profileImage: "/dog1.jpg",
    userName: "Balder",
    date: "Online",
    age: 10,
    email: "johndoe@example.com"
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">User Profile</h2>
      <div className="flex items-center justify-center flex-col">
        <img src={userProfile.profileImage} alt={userProfile.userName} className="rounded-full h-24 w-24 mb-4" /> {/* Smaller image */}
        <h2 className="text-2xl font-semibold text-gray-800">{userProfile.userName}</h2>
        <div className="flex items-center text-gray-600 mt-2">
          <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
          <p>{userProfile.date}</p>
        </div>
        <div className="flex mt-2 text-gray-600">
          <p>Age: {userProfile.age} years</p>
          <span className="mx-2">|</span>
          <p>Email: {userProfile.email}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Posts</h2>
        <div className="max-h-72 sm:max-w-md overflow-y-auto mt-4"> {/* Smaller width and responsive */}
          {isLoading ? (
            <span>Loading...</span>
          ) : error ? (
            <span>Error: {error.message}</span>
          ) : (
            <ExampleUsersPosts listOfPosts={posts} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
