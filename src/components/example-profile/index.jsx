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
    email: "johndoe@example.com",
  };

  // Example user data (replace with actual user data)
  const exampleUserData = {
    name: "John Doe",
    email: "johndoe@example.com",
    image: "example-image.jpg",
    contacts: [
      { name: "Balder", image: "/public/dog1.jpg", online: true },
      { name: "Melissa", image: "/public/dog2.jpg", online: true },
      { name: "Offy", image: "/public/dog3.jpg", online: true },
      { name: "Chica", image: "/public/dog4.jpg", online: false },
      { name: "Olly", image: "/public/dog5.jpg", online: false },
      { name: "Tara", image: "/public/dog6.jpg", online: true },
      { name: "Spot", image: "/public/dog7.jpg", online: false },
      { name: "Cody", image: "/public/dog3.jpg", online: true },
      { name: "Copper", image: "/public/dog3.jpg", online: false },
      { name: "Lucy", image: "/public/dog3.jpg", online: false },
    ],
    posts: [
      {
        id: 1,
        date: "September 1, 2023",
        content: "This is a sample post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      // Add more posts as needed
    ],
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="text-center mb-4">
        <img src={userProfile.profileImage} alt={userProfile.userName} className="rounded-full h-24 w-24 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800">{userProfile.userName}</h2>
        <div className="flex items-center justify-center text-gray-600 mt-2">
          <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
          <p>{userProfile.date}</p>
        </div>
        <div className="flex justify-center mt-2 text-gray-600">
          <p>Age: {userProfile.age} years</p>
          <span className="mx-2">|</span>
          <p>Email: {userProfile.email}</p>
        </div>
      </div>
      <div className="flex flex-wrap min-w-[300px]"> {/* Apply min-width here */}
        <div className="flex-1 pr-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Posts</h2>
          <div className="max-h-72 sm:max-w-md overflow-y-auto mt-4">
            {isLoading ? (
              <span>Loading...</span>
            ) : error ? (
              <span>Error: {error.message}</span>
            ) : (
              <ExampleUsersPosts listOfPosts={posts} />
            )}
          </div>
        </div>
        <div className="w-1/3 pl-4">
          <div className="bg-white shadow-md rounded-lg p-4 mb-4 h-96 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-2">Contacts</h2>
            <ul>
              {exampleUserData.contacts.map((contact, index) => (
                <li key={index} className="mb-2 flex items-center">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                    <div
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${
                        contact.online ? "bg-green-400" : "bg-red-400"
                      }`}
                    ></div>
                    <img src={contact.image} alt={contact.name} className="w-full h-full object-cover" />
                  </div>
                  <a href="#">{contact.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
