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

  return (
    <>
      _PROFILE_CONTENT_GOES_HERE_
      <img src={data.image} alt="avatar" />
    </>
  );
}

export default ExampleProfile;
