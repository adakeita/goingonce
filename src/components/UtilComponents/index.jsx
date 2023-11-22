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
        <div>
            {offset > 0 && <button onClick={handlePrevClick}>Previous</button>}
            {hasMore && <button onClick={handleNextClick}>Next</button>}
        </div>
    );
};