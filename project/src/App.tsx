import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Resume from '@/pages/Resume';
import Demos from '@/pages/Demos';
import Order from '@/pages/Order';
import Contact from '@/pages/Contact';
import AdminLogin from '@/pages/AdminLogin';
import AdminDashboard from '@/pages/AdminDashboard';
import SalonDemo from '@/pages/demos/SalonDemo';
import MedicalDemo from '@/pages/demos/MedicalDemo';
import BeautyParlourDemo from '@/pages/demos/BeautyParlourDemo';
import RestaurantDemo from '@/pages/demos/RestaurantDemo';
import GymDemo from '@/pages/demos/GymDemo';
import EcommerceDemo from '@/pages/demos/EcommerceDemo';
import PortfolioDemo from '@/pages/demos/PortfolioDemo';
import RealEstateDemo from '@/pages/demos/RealEstateDemo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home with starfield (no radial-bg) */}
        <Route path="/" element={<Layout showStarfield><Home /></Layout>} />

        {/* Public pages with radial background */}
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/resume" element={<Layout><Resume /></Layout>} />
        <Route path="/demos" element={<Layout><Demos /></Layout>} />
        <Route path="/order" element={<Layout><Order /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />

        {/* Demo showcase pages (standalone, no site navbar/footer) */}
        <Route path="/demos/salon" element={<SalonDemo />} />
        <Route path="/demos/medical" element={<MedicalDemo />} />
        <Route path="/demos/beautyparlour" element={<BeautyParlourDemo />} />
        <Route path="/demos/restaurant" element={<RestaurantDemo />} />
        <Route path="/demos/gym" element={<GymDemo />} />
        <Route path="/demos/ecommerce" element={<EcommerceDemo />} />
        <Route path="/demos/portfolio" element={<PortfolioDemo />} />
        <Route path="/demos/realestate" element={<RealEstateDemo />} />

        {/* Admin (standalone, no site navbar/footer) */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
