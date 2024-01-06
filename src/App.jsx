import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="post/:id" element={<PostPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
