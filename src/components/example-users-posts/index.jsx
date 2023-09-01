import { useUsersPosts } from "../../lib/my-api";

import React from 'react';

 

const listOfPosts = [

 

  {

 

    id: 1,

 

    profileImage: "/dog1.jpg",

 

    userName: "Balder",

 

    date: "10 minutes ago",

 

    title: "Felt cute",

 

    contentText: "lorem ipsuhuuuuhuuuuuum",

 

    contentImage: "/dog1post.webp"

 

 

 

  },

 

  {

 

    id: 2,

 

    profileImage: "/dog2.jpg",

 

    userName: "Melissa",

 

    date: "11 minutes ago",

 

    title: "Just chillin'",

 

    contentText: "My human gave me a spa day and now I feel refreshed",

 

    contentImage: "/dog2post.jpg"

 

  },

 

];

 

function ExampleUsersPosts() {

  /*const userId = 2;

  const { status, error, data } = useUsersPosts(userId);

  const isLoading = status === "loading";

 

  if (isLoading) {

    return <span>Loading...</span>;

  }

 

  if (error) {

    return <span>Error: {error.message}</span>;

  }

*/

  return (

    <>

 

{listOfPosts.map((post) => (

  <div key={post.id} className="bg-white shadow-lg p-4 rounded-lg m-4">

    <img src={post.profileImage} alt={post.userName} className="rounded-full h-10 w-10" />

    <h3 className="text-xl font-semibold text-gray-800 mt-2">{post.userName}</h3>

    <p className="text-gray-500">{post.date}</p>

    <h3 className="text-2xl font-semibold text-gray-800 mt-2">{post.title}</h3>

    <p className="text-gray-700">{post.contentText}</p>

    <img src={post.contentImage} alt={post.title} className="mt-4 rounded-lg w-full" />

  </div>

))}

 

    </>

  );

}

 

export default ExampleUsersPosts;

