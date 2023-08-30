import React from 'react';

const CreatePostForm = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="userName" className="block font-medium mb-1">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter user name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block font-medium mb-1">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter image URL"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;