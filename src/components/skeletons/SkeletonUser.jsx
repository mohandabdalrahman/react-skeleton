import React from 'react';
import Skeleton from './Skeleton';

const SkeletonUser = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-user">
        <Skeleton type="avatar" />
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
    </div>
  );
};

export default SkeletonUser;
