import UserPageNavbar from "../../components/userpage_navbar/index";
import ScrollPosts from "../../components/PostsPage.jsx";
import "./index.css";

export default function LoadHome() {
  return (
    <>
      <UserPageNavbar />
      <ScrollPosts name="Home" />
    </>
  );
}
