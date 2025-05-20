import React from "react";

export default function ReviewBar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6">
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4].map((n) => (
          <span key={n} className="w-7 h-7 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
            {n}
          </span>
        ))}
      </div>
      <span className="text-gray-700 text-base font-medium">Join 1000+ companies using Tuesday</span>
      <span className="flex items-center gap-1 text-yellow-500 font-bold">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <svg key={i} width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/></svg>
          ))}
        <span className="text-gray-700 font-medium ml-1">5.0 (200+ reviews)</span>
      </span>
    </div>
  );
}
