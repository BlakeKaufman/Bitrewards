import UserPageNavbar from "../../components/userpage_navbar/index";
import Dashboard from "./components/index";
import "./index.css";

export default function LoadDashboard() {
  return (
    <>
      <UserPageNavbar />
      <Dashboard />
    </>
  );
}
