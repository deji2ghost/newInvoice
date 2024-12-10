import "./App.css";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login/LoginPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./layout/main";
import Invoice from "./pages/Invoice/invoice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route index path="login" element={<LoginPage />} />

      <Route element={<Main />}>
        <Route path="home" element={<Home />} />
        <Route path="invoice" element={<Invoice />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
