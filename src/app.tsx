import "./styles/app.css";
import "./styles/media-queries.css";
import "./styles/animations.css";
import "./styles/palettecolors.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router";
import { ROUTER } from "./routes/routes";
export const App = () => {
  return (
    <>
      <RouterProvider router={ROUTER}></RouterProvider>

    </>
  );
};
