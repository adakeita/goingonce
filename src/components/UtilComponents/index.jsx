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
            {offset > 0 && <button className="previous-btn" onClick={handlePrevClick}>&larr; Previous</button>}
            {hasMore && <button className="next-btn" onClick={handleNextClick}>Next &rarr;</button>}
        </div>
    );
};