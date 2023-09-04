import { login } from "../../lib/my-api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

function ExampleLoginForm() {
  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: (username, password) => login(username, password),
    onSuccess: (data) => {
      navigate({ to: "/", params: { id: data.id } });
    },
  });

  return (
    <div>
      <>
      {loginMutation.isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {loginMutation.isError ? (
            <div>An error occurred: {loginMutation.error.message}</div>
          ) : null}

          {loginMutation.isSuccess ? <div>Login SUccessful</div> : null}

          <button
            onClick={() => {
              loginMutation.mutate({
                username: "kminchelle",
                password: "0lelplR",
              });
            }}
          >
            Sign in
          </button>
        </>
      )}
<div className="relative overflow-hidden bg-white">
  <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="sm:max-w-lg">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Summer styles are finally here
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          This year, our new summer collection will shelter you from the harsh elements of a world that does not care if you live or die.
        </p>
      </div>
      <div>
        <div className="mt-10">

          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  src="/dog1.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  src="/dog2.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  src="/dog3.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  src="/dog4.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  src="/dog5.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  src="/dog6.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  src="/dog7.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          <a
            href="#"
            className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Sign in to your account
    </h2>
  </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
      </>
    </div>

  );
}

export default ExampleLoginForm;

