import { useUsersPosts } from "../../lib/my-api";
import React from 'react';

const listOfPosts = [
  {
    id: 1,
    profileImage: "/dog1.jpg",
    userName: "Balder",
    date: "10 minutes ago",
    contentText: "Felt cute with my new collar💅",
    contentImage: "/dog1post.webp"
  },
  {
    id: 2,
    profileImage: "/dog2.jpg",
    userName: "Melissa",
    date: "11 minutes ago",
    contentText: "My human gave me a spa day and now I feel refreshed🧖 Thanks mom!",
    contentImage: "/dog2post.jpg"
  },
  {
    id: 3,
    profileImage: "/dog3.jpg",
    userName: "Offy",
    date: "23 minutes ago",
    contentText: "Bachelor party for Ben tonight! Congrats bro🥳",
    contentImage: "/dog3post.jpg"
  },
  {
    id: 4,
    profileImage: "/dog4.jpg",
    userName: "Chica",
    date: "24 minutes ago",
    contentText: "Can someone please get this human being away from me? I'll pay you",
    contentImage: "/dog4post.webp"
  },
  {
    id: 5,
    profileImage: "/dog5.jpg",
    userName: "Olly",
    date: "29 minutes ago",
    contentText: "Did a photoshoot for some very comfy dawg beds last week! Here is a photo📸",
    contentImage: "/dog5post.jpg"
  },
  {
    id: 6,
    profileImage: "/dog6.jpg",
    userName: "Tara",
    date: "34 minutes ago",
    contentText: "Working on my master thesis #backtoschoolvibes🤓",
    contentImage: "/dog6post.jpg"
  },
  {
    id: 7,
    profileImage: "/dog7.jpg",
    userName: "Spot",
    date: "46 minutes ago",
    contentText: "I love my little human sibling. Happy 10th birthday big bro🎉",
    contentImage: "/dog7post.jpeg"
  },
  {
    id: 8,
    profileImage: "/dog8.jpeg",
    userName: "Cody",
    date: "47 minutes ago",
    contentText: "Facetiming the squad📲",
    contentImage: "/dog8post.png"
  },
  {
    id: 9,
    profileImage: "/dog9.jpeg",
    userName: "Copper",
    date: "56 minutes ago",
    contentText: "My humans just got married this weekend and I was being such a good boy🐶",
    contentImage: "/dog9post.jpeg"
  },
  {
    id: 10,
    profileImage: "/dog10.jpeg",
    userName: "Lucy",
    date: "2 hours ago",
    contentText: "Egypt is LIT🧟",
    contentImage: "/dog10post.jpeg"
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
<div className="flex justify-center">
  <div className="">
{listOfPosts.map((post) => (
  
  <div key={post.id} className="bg-white shadow-lg p-4 rounded-lg m-4">
    <div className="flex flex-row gap-3">
      <img src={post.profileImage} className="rounded-full h-10 w-10" />
     <h3 className="text-xl font-semibold text-gray-800 mt-2">{post.userName}</h3>
    </div>
    <p className="text-gray-500 pt-2 pb-1">{post.date}</p>
    <p className="text-gray-700">{post.contentText}</p>
    <div className="flex justify-center">
      <img src={post.contentImage} alt={post.title} className="mt-4 rounded-lg w-80" />
    </div>
    
  </div>

))}
</div>
</div>

    </>

  );

}

 

export default ExampleUsersPosts;

