export default function Payouts() {
  return (
    <div class="content_container">
      <section class="payout_header">
        <h3 class="page_title">Payout</h3>
      </section>
      <section class="payout_amount_container">
        <span>Available to withdraw:</span>
        <div class="payout_amount">
          <span class="dollars">$0.07</span>
          <span>237 Sats</span>
        </div>
        <span class="current_vs_potential">
          {" "}
          <b>$0.07</b> / $0.45{" "}
        </span>
      </section>
      <section class="payment_method">
        <div class="header">
          <span>Payment method</span>
          <div class="country_dropdown">
            <div class="selected_country">
              <div class="flag"></div>
              United States
              <div class="icon">
                <img
                  src="../assets/images/icons/angle-small-down.svg"
                  alt="Down arrow icon for dropdown menu"
                />
              </div>
            </div>
            <div class="countries_list"></div>
          </div>
        </div>
        <div class="payment_method_container">
          <div class="bitcoin">
            <span class="fee">No fee</span>
            <span class="payment_title">Bitcoin</span>
          </div>
          <div class="other">
            <span class="payment_title">Coming soon</span>
          </div>
          <div class="other">
            <span class="payment_title">Coming soon</span>
          </div>
          <div class="other">
            <span class="payment_title">Coming soon</span>
          </div>
        </div>
      </section>

      <section class="payout_questions">
        <div class="questions_container">
          <div class="question">
            <div class="question_screen"></div>
            <div class="text">
              <span class="question_text">What is [company name]?</span>
              <div class="icon">
                <img
                  src="/assets/images/icons/angle-small-up.svg"
                  alt="angle down icon"
                />
              </div>
            </div>
            <span class="answer">
              [company name] is a rewards platform that allows you to easily
              monitize your time spent shopping and get connected straight to
              copmaines. [compnay name] are the adertising platform of tomorrow.
            </span>
          </div>
          <div class="question">
            <div class="question_screen"></div>
            <div class="text">
              <span class="question_text">How does [company name] work?</span>
              <div class="icon">
                <img src="/assets/images/icons/angle-small-up.svg" alt="" />
              </div>
            </div>
            <span class="answer">
              Earn income simply by scrolling and seeing advertisers posts,
              delete your account at any time no strings attached. We place
              users at the top of our priority list by maximizing your time to
              value ratio. By scrolling with [comapny name] you will be earning
              your fair share of adertisers budget.
            </span>
          </div>
          <div class="question">
            <div class="question_screen"></div>
            <div class="text">
              <span class="question_text">How do I start earning cash?</span>
              <div class="icon">
                <img src="/assets/images/icons/angle-small-up.svg" alt="" />
              </div>
            </div>

            <span class="answer">
              Simply create an account and start scrolling. As you see ads your
              cash balence will increase.
            </span>
          </div>
          <div class="question">
            <div class="question_screen"></div>
            <div class="text">
              <span class="question_text">How do I payout?</span>
              <div class="icon">
                <img src="/assets/images/icons/angle-small-up.svg" alt="" />
              </div>
            </div>
            <span class="answer">
              Payouts are currently being executed over the bitcoin lightning
              network. Once you have generated enough funds for a payout, simply
              paste your lightning request in the withdrawl box and funds should
              be sent instantly.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
