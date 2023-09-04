import ExampleUsersPosts from "../components/example-users-posts";
import CreatePostForm from "../components/example-create-post";
import "../App.scss";

function HomePage() {
  return (
    <>
    <div className="flex justify-center">
      <input className="p-1 border-solid" type="search" placeholder="Search..."/>
      <button>
      🔎
      </button>
    </div>
      <ExampleUsersPosts />
      <CreatePostForm />
    </>
  );
}

export default HomePage;
