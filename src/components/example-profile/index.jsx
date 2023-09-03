import React, { useEffect, useState } from 'react';
import { useUsersPosts } from "../../lib/my-api";
import ExampleUsersPosts from '../../components/example-users-posts';

function ProfilePage() {
  const userId = 2; // Replace with the appropriate user ID
  const { status, error, data: fetchedPosts } = useUsersPosts(userId);
  const isLoading = status === "loading";

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  console.log("user data >>>>", data);

  return (
    <>
      _PROFILE_CONTENT_GOES_HERE_
      <img src={data.image} alt="avatar" />
    </>
  );
}

export default ProfilePage;
