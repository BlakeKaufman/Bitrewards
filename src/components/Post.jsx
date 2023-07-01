import React from "react";
import commentIcon from "../assets/icons/comment.svg";
import likeIcon from "../assets/icons/likes.svg";
import likeFilledIcon from "../assets/icons/likes_filled.svg";
import viewsIcon from "../assets/icons/views.svg";
import shareIcon from "../assets/icons/share.svg";
import linkIcon from "../assets/icons/link.svg";
import bookmarkIcon from "../assets/icons/bookmark.svg";

export default function Post(props) {
  const shareStyles = {
    display: props.shareDropdown ? "block" : "none",
  };

  const likeImg = props.likedPost ? likeFilledIcon : likeIcon;

  return (
    <div className="post">
      <div className="logo"></div>
      <div className="content">
        <div className="header">
          <span className="page_title">{props.name}</span>
          <div className="flex_wrapper">
            <span className="page_at">{props.userName}</span>
            <div className="spacer">·</div>
            <span className="time_posted">{props.timePosted}</span>
          </div>
        </div>
        <div className="body">{props.content}</div>
        <div className="footer">
          <div className="comments footer_action_container">
            <div className="icon">
              <img src={commentIcon} alt="comment icon" />
            </div>
            <span className="comment_count">{props.comments}</span>
          </div>
          <div
            onClick={(event) => props.likeFunction(event, props.id)}
            className="likes footer_action_container"
          >
            <div className="icon">
              <img src={likeImg} alt="likes icon" />
            </div>
            <span className="likes_count">
              {props.likedPost ? props.likes + 1 : props.likes}
            </span>
          </div>
          <div className="views footer_action_container">
            <div className="icon">
              <img src={viewsIcon} alt="views icon" />
            </div>
            <span className="views_count">{props.views}</span>
          </div>
          <div
            onClick={(event) => props.shareFunction(event, props.id)}
            className="share footer_action_container "
          >
            <div className="screen share_BTN"></div>
            <div className="icon">
              <img src={shareIcon} alt="share icon" />
            </div>
            <div className="share_options" style={shareStyles}>
              <ul>
                <li>
                  <div className="options_icon">
                    <img src={linkIcon} alt="Link icon" />
                  </div>
                  Copy Link To Ad.
                  <div className="share_list_item"></div>
                </li>
                <li>
                  <div className="options_icon">
                    <img src={bookmarkIcon} alt="Bookmark icon" />
                  </div>
                  Bookmark
                  <div className="share_list_item"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
