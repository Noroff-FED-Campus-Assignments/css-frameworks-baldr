import { useUsersPosts } from "../../lib/my-api";

const listOfPosts = [
  {
    id: 1,
    title: "Post 1",
    userName: "Dog 1",
    image: "/dog1.jpg"
  },
  {
    id: 2,
    title: "Post 2",
    userName: "Dog 2",
    image: "/dog2.jpg"
  }
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
          <div key={post.id}>
            <h3>{post.title}</h3>
            <h3>{post.userName}</h3>
            <img src={post.image} alt={post.title} />
          </div>
        ))}
    </>
  );
}

export default ExampleUsersPosts;
