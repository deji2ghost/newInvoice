import "./App.css";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login/LoginPage";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import Main from "./layout/main";
import Invoice from "./pages/Invoice/invoice";

export interface OptionProps {
  value: string;
  label: string;
}

// function App() {

//   

//   useEffect(()=> {
//     console.log(selectedValue)
//   }, [selectedValue])

//   return (
//     <div>
//       <Home />
//       <LoginPage />
//       <div className="relative">
//         <CustomSelect
//           className=""
//           width="w-[40%]"
//           options={[
//             "food", "electricity", "education", "Lifestyle", "vacation"
//           ]}
//           value={selectedValue}
//           onChange={handleChange}
//         />
//         <FaChevronDown className="group pointer-events-none absolute top-2.5 bg-orange-500 right-2.5 size-4 fill-white/60"/>
//       </div>
//       <CustomButton>
//         load
//       </CustomButton>
//     </div>
//   );
// }
const router = createBrowserRouter(
  createRoutesFromElements(
     <>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route index path="login" element={<LoginPage />} />

        <Route element={<Main />}>
        <Route path="home" element={<Home />}/>
        <Route path="invoice" element={<Invoice />}/>
        </Route>
     </>,
  ),
);


function App() {
  return (
        <RouterProvider router={router} />
  );
}

export default App;
