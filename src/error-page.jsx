import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>{error.statusText || error.message}!</h1>
      <p>Sorry, unable to get movie details now!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/'>back</Link>
    </div>
  );
}