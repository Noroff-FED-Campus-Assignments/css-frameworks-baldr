import { useUser } from "../../lib/my-api";

function ExampleProfile() {
  const userId = 2;
  const { status, error, data } = useUser(userId);
  const isLoading = status === "loading";

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  console.log("user data >>>>", data);

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
    <div className="flex">
      {/* Profile Content */}
      <div className="flex-1 p-4">

        {/* Post Form */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Post to Wall</h2>
          <form>
            <div className="mb-4">
              <textarea className="w-full p-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300" rows="4" placeholder="Write your post here..."></textarea>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Post</button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact List (on the right with scrollbar) */}
      <div className="w-1/3 p-4">
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 h-96 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-2">Contacts</h2>
          <ul>
            {exampleUserData.contacts.map((contact, index) => (
              <li key={index} className="mb-2 flex items-center">
                <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${contact.online ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  <img src={contact.image} alt={contact.name} className="w-full h-full object-cover" />
                </div>
                <a href="#">{contact.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExampleProfile;