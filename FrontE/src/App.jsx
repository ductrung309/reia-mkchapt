import "./App.css";
import "tailwindcss/tailwind.css"; // Import CSS của Tailwind
import "daisyui/dist/full.css"; // Import CSS của DaisyUI
import Home from "./pages/home/homesite.jsx";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Home />
    </div>
  );
}

export default App;
