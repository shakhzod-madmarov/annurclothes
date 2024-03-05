import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Lookbook from "./pages/Lookbook";
import Store from "./pages/Store";

import ContactToUs from "./pages/ContactToUs";
import DeliveryAndPayment from "./pages/DeliveryAndPayment";
import RefundAndExchange from "./pages/RefundAndExchange";
import Press from "./pages/Press";
import Feedbacks from "./pages/Feedbacks";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/store" element={<Store />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<ContactToUs />} />
        <Route path="/deliveryandpayment" element={<DeliveryAndPayment />} />
        <Route path="/refundandexchange" element={<RefundAndExchange />} />
        <Route path="/press" element={<Press />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
