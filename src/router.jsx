import { BrowserRouter, Routes, Route } from "react-router-dom";
import PasswordPage from "./pages/PasswordPage";
import CountdownPage from "./pages/CountdownPage";
import BirthdayPage from "./pages/BirthdayPage";
import WishesPage from "./pages/WishesPage";
import FinalVideoPage from "./pages/FinalVideoPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PasswordPage />} />
        <Route path="/countdown" element={<CountdownPage />} />
        <Route path="/birthday" element={<BirthdayPage />} />
        <Route path="/wishes" element={<WishesPage />} />
        <Route path="/forever" element={<FinalVideoPage />} />



      </Routes>
    </BrowserRouter>
  );
}

export default Router;
