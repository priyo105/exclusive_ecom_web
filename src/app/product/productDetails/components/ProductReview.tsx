import React, { useEffect, useState } from 'react'
import { getProductReviews } from '../../../../apis/product';
import { ProductReviewType } from '../../../../types/ProductReview';

export default function ProductReview({ productId }: { productId: string }) {
    const [reviews, setReviews] = useState<ProductReviewType[]>([])
    useEffect(() => {
        getProductReviews(productId).then((data) => {
            setReviews(data || []);
        })
    }, [productId]);

    if (reviews.length === 0) {
        return (
            <div className="flex items-center justify-center p-8 rounded-lg border border-gray-200">
                <div className="text-center">
                    <div className="text-4xl mb-3">📝</div>
                    <h3 className="text-lg font-semibold mb-1">No reviews yet</h3>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {reviews.map((review) => (
                <ReviewComponent key={review._id} review={review} />
            ))}
        </div>
    );
}



function ReviewComponent({ review }: { review: ProductReviewType }) {
    return (
        <div className="border p-4 rounded-md mb-4">
            <div className="flex items-center mb-2 justify-between">
                <div className="font-bold mr-2">{review.user.username}</div>
                <div className="text-xs text-right ml-5 text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</div>
            </div>
            <div className="text-black">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</div>
            <div className="text-gray-700 mb-2">{review.comment}</div>
        </div>
    );
}