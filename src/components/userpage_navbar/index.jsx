import React from "react";
import "../userpage_navbar/index.css";
import NavItem from "./nav_item";

export default function UserPageNavbar() {
  const windowPath = window.location.pathname.slice(1);

  return (
    <nav role="navigation">
      <div className="logo">
        <span>TEst</span>
      </div>
      <ul className="nav_container">
        {<NavItem path={windowPath} name="Home" />}
        {<NavItem path={windowPath} name="Dashboard" />}
        {<NavItem path={windowPath} name="Payouts" />}
        {<NavItem path={windowPath} name="Leaderboard" />}
        {<NavItem path={windowPath} name="Bookmarks" />}
        {<NavItem path={windowPath} name="Profile" />}
        {<NavItem path={windowPath} name="Settings" />}
      </ul>
    </nav>
  );
}
