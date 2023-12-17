import { Link } from "@tanstack/react-router";
import "./homelistingcta.css";

const HomeListingsCta = () => {
    return (
        <div className="home-listing-cta">
            <section className="home-view-listings-content">
                <h3 className="home-view-listings-pitch">
                    Check out our latest listings
                </h3>
                <div className="home-view-listings-btn-container">
                    <Link role="button" to="/listings" className="home-view-listings-btn">
                        View Listings
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default HomeListingsCta;