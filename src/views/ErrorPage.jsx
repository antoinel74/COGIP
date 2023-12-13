import { useRouteError } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Divider } from "../components/Divider";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Navbar />
      <Divider />
      <div className="w-full mt-12 flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md md:ml-12">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find this page.
          </p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <Link to="/" W>
            <button className="px-4 inline p-2 text-sm font-semibold leading-5 shadow transition-all duration-150 border border-transparent rounded-lg bg-[#f9de4e] hover:bg-[#F0D436]">
              Go back Home
            </button>
          </Link>
        </div>
        <div className="max-w-md">
          <img src="/img/manager-1.png" />
        </div>
      </div>
    </div>
  );
}
