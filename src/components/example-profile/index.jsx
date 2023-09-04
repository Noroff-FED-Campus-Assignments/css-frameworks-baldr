import React, { useEffect, useState } from 'react';
import { useUsersPosts } from "../../lib/my-api";
import ExampleUsersPosts from '../../components/example-users-posts';

function ProfilePage() {
  const userId = 2;
  const { status, error, data: fetchedPosts } = useUsersPosts(userId);
  const isLoading = status === "loading";
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");

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


  const exampleUserData = {
    name: "John Doe",
    email: "johndoe@example.com",
    image: "example-image.jpg",
    contacts: [
      { name: "Balder", image: "/dog1.jpg", online: true },
      { name: "Melissa", image: "/dog2.jpg", online: true },
      { name: "Offy", image: "/dog3.jpg", online: true },
      { name: "Chica", image: "/dog4.jpg", online: false },
      { name: "Olly", image: "/dog5.jpg", online: false },
      { name: "Tara", image: "/dog6.jpg", online: true },
      { name: "Spot", image: "/dog7.jpg", online: false },
      { name: "Cody", image: "/dog3.jpg", online: true },
      { name: "Copper", image: "/dog3.jpg", online: false },
      { name: "Lucy", image: "/dog3.jpg", online: false },
    ],
    posts: [
      {
        id: 1,
        date: "September 1, 2023",
        content: "This is a sample post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  };


  const handlePostContentChange = (e) => {
    setNewPostContent(e.target.value);
  };


  const handleSubmitPost = () => {
    console.log("Post submitted:", newPostContent);
    setNewPostContent("");
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
      <div className="flex flex-wrap min-w-[300px]">
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

      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Post to Wall</h2>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          rows="4"
          placeholder="What's on your mind?"
          value={newPostContent}
          onChange={handlePostContentChange}
        ></textarea>
        <div className="flex items-center justify-between mt-4">
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            onClick={handleSubmitPost}
          >
            Post
          </button>
          <span className="text-gray-500 text-sm">Max 280 characters</span>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

