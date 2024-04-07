import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ClerkProvider, SignIn, SignUp} from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Overview from "./components/Overview/Overview";
import Sidebar from "./components/Sidebar/Sidebar";
import Trending from "./components/Trending/Trending";
import Scheduler from "./components/Scheduler/Scheduler";
import HelpD from "./components/HelpDesk/HelpD/HelpD";
import Popup from "./components/Scheduler/popup/popup";
import Profile from "./components/Profile/Profile";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const root = ReactDOM.createRoot(document.getElementById("root"));

const ClerkWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider appearance={{
        variables: {colorPrimary: "#624cf5"}
      }}
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/" element={<><Sidebar /><Overview /> </>} />
        <Route path="/schedule" element={<><Sidebar /><Scheduler/></>} />
        <Route path="/trending" element={<><Sidebar /><Trending /></>} />
        <Route path="/need-help" element={<><Sidebar /><HelpD /></>} />
        <Route path="/popup" element={<><Sidebar /><Popup /></>} />
        <Route path="/profile" element={<><Sidebar /><Profile /></>} />
        <Route
          path="/sign-in/*"
          element={<SignIn redirectUrl={'/'} routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp redirectUrl={'/'} routing="path" path="/sign-up" />}
        />
      </Routes>
    </ClerkProvider>
  );
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkWithRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();