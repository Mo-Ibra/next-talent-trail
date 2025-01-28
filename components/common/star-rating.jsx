import { Star } from "lucide-react";

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-orange-400 fill-orange-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default StarRating;