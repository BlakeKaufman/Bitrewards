export default function Leaderboard() {
  return (
    <div className="content_container">
      <section className="leaderboard_header">
        <h3 className="page_title">Leaderboard</h3>
      </section>

      <section className="leaderboard">
        <div className="user_position">
          <div className="top">
            <div className="text_container">
              <span className="user_rewards_title">Total Rewards</span>
              <div className="rewards_amount_container">
                <span className="user_rewards_info">$10.03</span>
                <span className="user_rewards_info sats">100,000sats</span>
              </div>
            </div>
            <div className="profile_img"></div>
            <div className="text_container">
              <span className="user_rewards_title">Rank</span>
              <span className="rank user_rewards_info">50th</span>
            </div>
          </div>
          <span className="user_user-name">@Bkaufman5</span>
        </div>
        <div className="other_users_container">
          <div className="person">
            <span className="num_position">1</span>
            <div className="info_container">
              <div className="profile_img"></div>
              <div className="text">
                <span className="user_name">@Bkaufman5</span>
                <span className="date_joined">June 12, 2020</span>
              </div>
            </div>
            <div className="amount_earned">
              <span>$10.03</span>
              <span className="sats">100,000sats</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
