import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./components/layout/routeLayout/main";
import Invoice from "./pages/Invoice/invoice";
import CreateAccount from "./pages/createAccount/createAccount";
import Settings from "./pages/settings/settings";
import Todo from "./pages/todo/todo";
import Stopwatch from "./pages/stopwatch/stopwatch";
import Home from "./pages/Home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route index path="login" element={<LoginPage />} />
      <Route index path="createAccount" element={<CreateAccount />} />

      <Route element={<Main />}>
        <Route path="home" element={<Home />} />
        <Route path="invoice" element={<Invoice />} />
        <Route path="stopwatch" element={<Stopwatch />} />
        <Route path="todo" element={<Todo />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
