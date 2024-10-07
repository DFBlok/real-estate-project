import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import Image from "next/image";

type Props = {
  review: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  };
};

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="bg-white rounded-lg m-3 p-6 relative">
      <FaQuoteRight className="w-8 h-8 absolute top-4 right-4 text-red-600 opacity-20" />
      <div className="mt-6 items-center flex">
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
      </div>
      <p className="mt-6 text-base">{review.review}</p>
      <div className="w-full h-[1.2px] bg-gray-600 opacity-10 mt-6 mb-6"></div>
      <div className="flex items-center space-x-4">
        <Image
          src={review.userImage}
          alt={review.name}
          height={50}
          width={50}
          className="rounded-full"
        />
        <div>
          <h1 className="font-bold text-gray-800">{review.name}</h1>
          <p className="text-sm text-gray-500">{review.profession}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
