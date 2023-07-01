export default function Dashboard() {
  return (
    <div className="content_container">
      <div className="dashboard_header">
        <h3 className="page_title">Dashboard</h3>
        <div className="content">
          <div className="amount_earned">
            <span className="dollars">$0.19</span>
            <span className="bitcon">1,000 sats</span>
          </div>
          <div className="flex_money_BTN">
            <div className="icon">
              <img src="../assets/images/icons/share.svg" alt="Share icon" />
            </div>
            Flex Your Earnings
          </div>
        </div>
      </div>
      <div className="stats_contianer">
        <div className="money_earned">
          <div className="icon"></div>
          <span className="title">Money earned</span>
          <span className="quantity">$0.85</span>
          <span>This month</span>
        </div>
        <div className="quantity_ads_seen">
          <div className="icon"></div>
          <span className="title">Ads seen</span>
          <span className="quantity">150</span>
          <span>This month</span>
        </div>
      </div>
      <div className="transaction_history_container">
        <span className="title">Transaction History</span>
        <div className="transactions">
          <span className="date">Yesterday</span>
          <div className="ads_stats">
            <div className="icon"></div>
            <div className="text_stats">
              <span>You saw 10 ads</span>
              <span>19min ago</span>
            </div>
            <div className="money_quantitiy">$0.1</div>
          </div>
        </div>
        <div className="transactions">
          <span className="date">June 20</span>
          <div className="ads_stats">
            <div className="icon"></div>
            <div className="text_stats">
              <span>You saw 10 ads</span>
              <span>19min ago</span>
            </div>
            <div className="money_quantitiy">$0.1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
