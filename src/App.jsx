import "./index.css";
import MainLayout from "./features/layouts/MainLayout";
import HomePage from "./features/Home/page/HomePage";
import DetailPage from "./features/Detail/page/DetailPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TerbaruPage from "./features/Terbaru/page/TerbaruPage";
import HiburanPage from "./features/Hiburan/page/HiburanPage";
import GayaHidupPage from "./features/GayaHidup/page/GayaHidupPage";
import OlahragaPage from "./features/Olahraga/page/OlahragaPage";
import NasionalPage from "./features/Nasional/page/NasionalPage";
import InternasionalPage from "./features/Internasional/page/InternasionalPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/terbaru",
        element: <TerbaruPage />,
      },
      {
        path: "/hiburan",
        element: <HiburanPage />,
      },
      {
        path: "/gayaHidup",
        element: <GayaHidupPage />,
      },
      {
        path: "/olahraga",
        element: <OlahragaPage />,
      },
      {
        path: "/nasional",
        element: <NasionalPage />,
      },
      {
        path: "/internasional",
        element: <InternasionalPage />,
      },
      {
        path: "/detail/:slug",
        element: <DetailPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
};

export default App;
