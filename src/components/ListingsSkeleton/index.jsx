import "./listingsskeleton.css";

const ListingsSkeleton = () => {
  return (
    <div className="listings-skeleton-container">
      <div className="listings-skeleton-header">
        <div className="skeleton-text skeleton-title"></div>
        <div className="skeleton-search"></div>
      </div>
      <div className="listings-skeleton-cards">
        {Array(6).fill().map((_, idx) => (
          <div key={idx} className="skeleton-listing-card"></div>
        ))}
      </div>
    </div>
  );
};

export default ListingsSkeleton;
