import React, { useEffect } from 'react'
import { getSimilarProducts } from '../../../../apis/product'
import { Product } from '../../../../types/Products';
import ProductCard from '../../../../components/ProductCard';

export default function SimilarProducts({ productId }: { productId: string }) {

    const [similarProducts, setSimilarProducts] = React.useState<Product[]>([]);
    useEffect(() => {
        // Fetch similar products logic here
        getSimilarProducts(productId).then((data) => {
            console.log("Similar Products:", data);
            setSimilarProducts(data || []);
        });
    }, [productId])
    return (
        <div>
            {
                similarProducts.length === 0 ? (
                    <div> </div>
                ) : (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                            {similarProducts.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    )
}
