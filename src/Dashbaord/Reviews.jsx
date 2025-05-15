import React from 'react';
import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
import './Review.css'
const reviews = [
    {
        name: "Megan B.",
        profileImage: "profile1.jpg",
        rating: 5,
        review: "I am delighted with the taste and freshness of these donuts! I ordered a set for the whole family, and everyone found something for themselves - from the classic one with chocolate to more sophisticated flavors such as salted caramel with pistachios. Great quality, fast delivery, and friendly service. On I'll definitely come back for more!"
    },
    {
        name: "Megan B.",
        profileImage: "profile1.jpg",
        rating: 4.5,
        review: "I am delighted with the taste and freshness of these donuts! I ordered a set for the whole family, and everyone found something for themselves - from the classic one with chocolate to more sophisticated flavors such as salted caramel with pistachios. Great quality, fast delivery, and friendly service. On I'll definitely come back for more!"
    },
    {
        name: "Megan B.",
        profileImage: "profile1.jpg",
        rating: 4,
        review: "I am delighted with the taste and freshness of these donuts! I ordered a set for the whole family, and everyone found something for themselves - from the classic one with chocolate to more sophisticated flavors such as salted caramel with pistachios. Great quality, fast delivery, and friendly service. On I'll definitely come back for more!"
    }
];

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
        <div style={{ display: 'inline-block', color: '#facc15' }}>
            {[...Array(fullStars)].map((_, i) => (
                <span key={i}><TiStarFullOutline /></span>
            ))}
            {halfStar && <span><TiStarHalfOutline /></span>}
        </div>
    );
};

const Reviews = () => (
    <div>
        <div className="card rounded-4 shadow-sm p-3">
            <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="fw-bold mb-0">Reviews</h5>
                </div>
                <div className='container bg-light bg-opacity-50 min-vh-100 py-4'>
                    <div className='row'>

                        <div className='col-md-12'>


                            {reviews.map((review, index) => (
                                <div key={index} className="review-card">
                                    <img src={review.profileImage} alt={review.name} className="profile-img" />
                                    <div>
                                        <strong>{review.name}</strong> <StarRating rating={review.rating} />
                                        <p>"{review.review}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Reviews;
