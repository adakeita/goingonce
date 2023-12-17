export const filterImageListings = (listings) => {
    return listings.filter((listing) => {
        // Check if the listing has images
        return listing.media && listing.media.length > 0;
    });
};

// Pagination
export const Pagination = ({ offset, limit, setOffset, hasMore }) => {
    const handlePrevClick = () => {
        setOffset(Math.max(0, offset - limit));
    };

    const handleNextClick = () => {
        setOffset(offset + limit);
    };

    return (
        <div className="pagination-container">
            {offset > 0 && <button className="previous-btn teal-btn" onClick={handlePrevClick}>&larr; Previous</button>}
            {hasMore && <button className="next-btn teal-btn" onClick={handleNextClick}>Next &rarr;</button>}
        </div>
    );
};

export function toDisplayFormat(dateString) {
    const [year, month, day] = dateString.split('T')[0].split('-');
    return `${day}/${month}/${year}`;
  }

  export function toApiFormat(displayDateString) {
    const parts = displayDateString.split('/');
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }