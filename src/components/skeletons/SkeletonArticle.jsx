import React from 'react';
import Skeleton from './Skeleton';

const SkeletonArticle = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <Skeleton type="title" />
        <Skeleton type="text" />
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
    </div>
  );
};

export default SkeletonArticle;
