import './singlelistingskeleton.css';

const SingleListingSkeleton = () => {
  return (
    <div className="singlelisting-skeleton">
      <div className="singlelisting-img-skeleton"></div>
      <div className="singlelisting-info-skeleton">
        <div className="skeleton-text title-skeleton"></div>
        <div className="skeleton-text info-skeleton"></div>
        <div className="skeleton-text description-skeleton"></div>
        <div className="skeleton-btn"></div>
      </div>
    </div>
  );
};

export default SingleListingSkeleton;
