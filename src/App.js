import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";

// Public Components
import Home from "./Components/homepage/Home";
import DoctorsList from "./Components/homepage/DoctorsList";
import Login from "./Components/homepage/Login";
import Register from "./Components/homepage/Register";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import AmbulanceServices from "./pages/AmbulanceServices";
import MedicalServices from "./pages/MedicalServices";
import Pharmacy from "./pages/Pharmacy";
import WhyChooseUs from "./pages/WhyChooseUs";
import NewsAndArticles from "./pages/NewsAndArticles";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions"; // Import TermsConditions page
import Dashboard1 from './Components/hodpage/Dashboard1';  
import StaffAvailability from './Components/hodpage/StaffAvailability';  // Import StaffAvailability component
import ShiftManagement from './Components/hodpage/ShiftManagement';  // Import ShiftManagement component
import Notification1 from './Components/hodpage/Notification1';  // Import Notification component
import AttendanceTrends from './Components/hodpage/AttendanceTrends';  // Import AttendanceTrends component
import ProfileSettings from './Components/hodpage/ProfileSettings';  // Import ProfileSettings component
import TimeTable from './Components/hodpage/TimeTable';  // Import TimeTable component
import EmergencyStaffing from './Components/hodpage/EmergencyStaffing';
import Footer from "./Components/homepage/Footer";
import Header from "./Components/homepage/Header";


// Admin Components
import Sidebar from "./Components/Admin/Sidebar";
import Dashboard from "./Components/Admin/Dashboard";
import UserManagement from "./Components/Admin/UserManagement";
import KeyMetrics from "./Components/Admin/Analytics/KeyMetrics";
import AdvancedAnalytics from "./Components/Admin/Analytics/AdvancedAnalytics";
import Notification from './Components/notifications/Notification';
import Feedback from "./Components/Admin/FeedBack/Feedback";
import PolicySection from "./Components/Admin/PolicyUpdates/PolicySection";
import PolicyDetail from "./Components/Admin/PolicyUpdates/PolicyDetail";
import AddPolicyForm from "./Components/Admin/PolicyUpdates/AddPolicyForm";
import HelpSupport from "./Components/Admin/Helpcentre/HelpSupport";

// CSS Imports
import "./Components/Admin/Card.css";
import "./Components/Admin/Chart.css";
import "./Components/Admin/Dashboard.css";
import "./Components/Admin/Sidebar.css";
import "./Components/Admin/UserManagement.css";
import "./Components/Admin/Analytics/AdvancedAnalytics.css";
import "./Components/Admin/FeedBack/Feedback.css";
import "./Components/Admin/PolicyUpdates/PolicySection.css";
import "./Components/Admin/PolicyUpdates/PolicyDetail.css";
import "./Components/Admin/Helpcentre/HelpSupport.css";

// hodpagestyles
import "./Components/hodpage/hodpagestyles/hodattendancetrends.css";
import "./Components/hodpage/hodpagestyles/hoddashboard.css";
import "./Components/hodpage/hodpagestyles/hodemergencystaffing.css";
import "./Components/hodpage/hodpagestyles/hodnotification.css";
import "./Components/hodpage/hodpagestyles/hodprofilesettings.css";
import "./Components/hodpage/hodpagestyles/hodshiftmanagement.css";
import "./Components/hodpage/hodpagestyles/hodstaffavailability.css";
import "./Components/hodpage/hodpagestyles/hodtimetable.css";

// homepage.css
import "./Components/homepage/homeregister.css";
import "./Components/homepage/styles.css";

// Admin Layout Wrapper
function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>{children}</div>
    </div>
  );
}

// Logout Button Component
function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data (e.g., token or user session)
    localStorage.removeItem("userToken"); // Example of clearing session storage or token
    sessionStorage.removeItem("userSession");

    // Redirect to home page
    navigate("/"); // This will navigate to the home page
  };

  return <button onClick={handleLogout}>Logout</button>;
}

// Main AppContent
function AppContent() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
        <Route path="/doctors/:specialization" element={<DoctorsList />} />
        <Route path="/header" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/ambulance" element={<AmbulanceServices />} />
        <Route path="/medical-services" element={<MedicalServices />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/news-articles" element={<NewsAndArticles />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/dashboard1" element={<Dashboard1 />} />
        <Route path="/staff-availability" element={<StaffAvailability />} />
        <Route path="/emergency-staffing" element={<EmergencyStaffing />} />
        <Route path="/shift-management" element={<ShiftManagement />} />
        <Route path="/notifications1" element={<Notification1 />} />
        <Route path="/attendance-trends" element={<AttendanceTrends />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/timetable"  element={<TimeTable />} />
        <Route path="/footer" element={<Footer />} />


      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
      <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
      <Route path="/admin/user-management" element={<AdminLayout><UserManagement /></AdminLayout>} />
      <Route path="/admin/analytics/key-metrics" element={<AdminLayout><KeyMetrics /></AdminLayout>} />
      <Route path="/admin/analytics/advanced" element={<AdminLayout><AdvancedAnalytics /></AdminLayout>} />
      <Route path="/admin/notifications" element={<AdminLayout><Notification /></AdminLayout>} />
      <Route path="/admin/feedback" element={<AdminLayout><Feedback /></AdminLayout>} />
      <Route path="/admin/policy-updates" element={<AdminLayout><PolicySection /></AdminLayout>} />
      <Route path="/admin/policy-updates/:policyId" element={<AdminLayout><PolicyDetail /></AdminLayout>} />
      <Route path="/admin/policy-updates/add" element={<AdminLayout><AddPolicyForm /></AdminLayout>} />
      <Route path="/admin/help-support" element={<AdminLayout><HelpSupport /></AdminLayout>} />
    </Routes>
  );
}

// Main App Component
function App() {
  const location = useLocation();

  // Define routes where footer should not appear
  const adminRoutes = [
    "/admin",
    "/admin/dashboard",
    "/admin/user-management",
    "/admin/analytics/key-metrics",
    "/admin/analytics/advanced",
    "/admin/feedback",
    "/admin/policy-updates",
    "/admin/policy-updates/:policyId",
    "/admin/policy-updates/add",
    "/admin/help-support",
  ];

  // Define the routes where the footer should not appear (including logout related routes)
  const noFooterRoutes = ["/login", "/register", "/logout"];

  // Check if the current route is an admin route or logout related route
  const isNoFooterRoute =
    noFooterRoutes.includes(location.pathname) ||
    adminRoutes.some((route) => location.pathname.startsWith(route));

  return (
    <>
      <AppContent />
      {/* Render Logout Button and Footer only for public routes */}
      {/*!isNoFooterRoute && <LogoutButton />*/} {/* Show Logout Button only if it's not an admin or logout route */}
      {/*!isNoFooterRoute && <Footer />*/} {/* Display footer only if it's not an admin or logout route */}
    </>
  );
}

// Wrapping App with Router
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
