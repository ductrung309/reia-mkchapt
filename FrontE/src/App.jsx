import "./App.css";
import "tailwindcss/tailwind.css"; // Import CSS của Tailwind
import "daisyui/dist/full.css"; // Import CSS của DaisyUI
import Home from "./pages/home/homesite.jsx";
import Login from "./pages/login/loginsite.jsx";
import SignUp from "./pages/signup/signupsite.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
