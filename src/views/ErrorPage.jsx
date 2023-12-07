import { useRouteError } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Divider } from "../components/Divider";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Navbar />
      <Divider />
      <div className="mt-24 flex flex-col gap-2 justify-center items-center">
        <h1>Oops!</h1>
        <p>Oh no bibou ץ An unexepcted error has occured</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
