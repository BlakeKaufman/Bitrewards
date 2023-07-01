import React from "react";
import Post from "./Post";
// import API data that either calls bookmarks or new posts

const postsArr = [
  {
    logo: "",
    name: "Blake Kaufman",
    userName: "@blakekaufman17adsfasdfasdf",
    timePosted: "15min",
    content: "Testing",
    comments: 4,
    likes: 5,
    views: 100,
    id: 1,
    shareDropdown: false,
    likedPost: false,
  },
  {
    logo: "",
    name: "Brad Kaufman",
    userName: "@bradasdfa",
    timePosted: "15min",
    content: "Testing",
    comments: 4,
    likes: 5,
    views: 100,
    id: 2,
    shareDropdown: false,
    likedPost: false,
  },
];

export default function ScrollPosts(props) {
  // map over api data and creaet a veriable called postElements
  const [posts, setPosts] = React.useState(postsArr);

  function toggleShare(event, id) {
    event.stopPropagation();

    setPosts((prevArr) => {
      return prevArr.map((post) => {
        if (post.shareDropdown && post.id !== id) {
          return { ...post, shareDropdown: false };
        } else if (!post.shareDropdown && post.id === id) {
          return { ...post, shareDropdown: !post.shareDropdown };
        } else {
          return post;
        }
      });
    });
  }

  function removeShare() {
    setPosts((prevArr) => {
      return prevArr.map((post) => {
        return { ...post, shareDropdown: false };
      });
    });
  }

  function likePost(event, id) {
    setPosts((prevArr) => {
      return prevArr.map((post) =>
        post.id === id ? { ...post, likedPost: !post.likedPost } : post
      );
    });

    // send post request to database to change numbers
  }

  const postElements = posts.map((post) => (
    <Post
      key={post.id}
      likeFunction={likePost}
      shareFunction={toggleShare}
      {...post}
    />
  ));

  return (
    <div onClick={removeShare} className="content_container">
      <div className="content_header_desktop">
        <h3 className="page_title">{props.name}</h3>
        {props.name === "Home" && (
          <span className="periods_earning">
            <b> Period Earnings</b>: 0sats
          </span>
        )}
      </div>
      {props.name === "Home" && (
        <div className="content_header_mobile">
          <div className="top">
            <div className="profile_icon"></div>
            <div className="logo"></div>
          </div>
          <span className="periods_earning">
            <b> Period Earnings</b>: 0sats
          </span>
        </div>
      )}

      <div className="posts_container">
        {/* add the newly creagted post elemetns here */}
        {postElements}
      </div>
    </div>
  );
}
