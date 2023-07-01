import { Link } from "react-router-dom";

import homeIcon from "../../assets/icons/home.svg";
import homeIconBold from "../../assets/icons/home_bold.svg";

import dashboardIcon from "../../assets/icons/dashboard.svg";
import dashboardBoldIcon from "../../assets/icons/dashboard_bold.svg";

import payoutsIcon from "../../assets/icons/payout.svg";
import payoutsBoldIcon from "../../assets/icons/payout_bold.svg";

import leaderboardIcon from "../../assets/icons/leaderboard.svg";
import leaderboardIconBold from "../../assets/icons/leaderboard_bold.svg";

import bookmarkIcon from "../../assets/icons/bookmark.svg";
import bookmarkIconBold from "../../assets/icons/bookmark_bold.svg";

import profleIcon from "../../assets/icons/user.svg";
import profleIconBold from "../../assets/icons/user_bold.svg";

import settingsIcon from "../../assets/icons/settings.svg";
import settingsIconBold from "../../assets/icons/settings_bold.svg";

const iconDict = {
  home: {
    bold: homeIconBold,
    normal: homeIcon,
  },
  dashboard: {
    bold: dashboardBoldIcon,
    normal: dashboardIcon,
  },
  payouts: {
    bold: payoutsBoldIcon,
    normal: payoutsIcon,
  },
  leaderboard: {
    bold: leaderboardIconBold,
    normal: leaderboardIcon,
  },
  bookmarks: {
    bold: bookmarkIconBold,
    normal: bookmarkIcon,
  },
  profile: {
    bold: profleIconBold,
    normal: profleIcon,
  },
  settings: {
    bold: settingsIconBold,
    normal: settingsIcon,
  },
};

export default function NavItem(props) {
  return (
    <Link to={`/${props.name}`}>
      <li
        className={`nav_item ${
          props.name.toLowerCase() === props.path.toLowerCase()
            ? "selected_element"
            : ""
        }`}
      >
        <div className="background_color">
          <div className="img">
            <img
              src={
                props.name.toLowerCase() === props.path.toLowerCase()
                  ? iconDict[props.name.toLowerCase()].bold
                  : iconDict[props.name.toLowerCase()].normal
              }
              alt={`${props.name} Icon`}
            />
          </div>

          <span>{props.name}</span>
        </div>
        <div className={`screen main_nav_clickable ${props.name}`}></div>
      </li>
    </Link>
  );
}
