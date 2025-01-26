import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>What is this application about?</h3>
        <p>
          This application is designed to provide a seamless experience with a
          modern dark theme.
        </p>
      </div>
      <div className="faq-item">
        <h3>How do I reset my password?</h3>
        <p>
          Go to the settings page and click on "Forgot Password" to reset it.
        </p>
      </div>
      <div className="faq-item">
        <h3>How can I contact customer support?</h3>
        <p>
          You can contact us via the email or phone number provided in the
          Contact section.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
