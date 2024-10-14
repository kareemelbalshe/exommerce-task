import React from 'react';

const StarRating = ({ rating }) => {
  // حساب النسبة المئوية للتقييم بالنسبة إلى 5 نجوم
  const percentage = (rating / 5) * 100;

  return (
    <div className="star-rating" style={{ position: 'relative', fontSize: '24px', color: '#d3d3d3' }}>
      <div
        className="filled-stars"
        style={{
          color: '#f39c12', // لون النجوم المملوءة
          position: 'absolute',
          top: 0,
          left: 0,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          width: `${percentage}%`
        }}
      >
        ★★★★★
      </div>
      <div>★★★★★</div>
    </div>
  );
};

export default StarRating;
