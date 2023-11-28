import { Link } from "@tanstack/react-router";
import "./signupcta.css";

const SignUpCta = () => {
  return (
    <>
      <main className="home-ctaregister-section">
        <div className="register-cta-content">
          <h3 className="register-cta-pitch">
            Create an account. Start bidding.
            As a welcome gift, you'll receive 1000 credits to get you started.
          </h3>
          <div className="register-cta-btn-container">
          <Link to="/register" className="cta-home-link">
            <button className="register-cta-btn">Sign up</button>
          </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUpCta;
