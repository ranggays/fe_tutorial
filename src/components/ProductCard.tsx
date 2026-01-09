"use client";

import { useState } from "react";

interface ProductCardProps{
    image: string;
    name: string;
    price: string;
}

export default function ProductCard(props: ProductCardProps){
    const [qty, setQty] = useState<number>(0);

    const [isLiked, setIsLiked] = useState<boolean>(false);

    return(
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 w-full max-w-sm">
            
            {/* Gambar Dummy */}
            <div className="h-48 bg-slate-200 w-full relative">
                {/* Badge Quantity jika lebih dari 0 */}
                { qty > 0 && (
                    <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                        {qty}
                    </div>
                )}
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold">{props.name}</h3>
                        <p className="text-indigo-600 font-semibold mt-1">{props.price}</p>
                    </div>

                    <button onClick={() => setIsLiked(!isLiked)}>
                        {isLiked ? "❤️" : "🤍"}
                    </button>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    {qty === 0 ? (
                        <button onClick={() => setQty(1)} className="w-full bg-slate-900 text-white py-2 rounded-lg font-medium hover:bg-slate-800 transition">
                            Add to cart
                        </button>
                    ): (
                        <div className="flex items-center justify-center bg-white rounded shadow-sm hover:bg-red-50 text-red-500 font-bold gap-5">
                            <button onClick={() => setQty(qty - 1)} className="w-10 h-8 flex items-center justify-center bg-white rounded shadow-sm hover:bg-red-50 text-red-500 font-bold">
                                -
                            </button>
                            <span className="font-bold text-slate-800">{qty}</span>
                            <button onClick={() => setQty(qty + 1)} className="w-10 h-8 flex items-center justify-center bg-white rounded shadow-sm hover:bg-green-50 text-green-600 font-bold">
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}