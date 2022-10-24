import React, { useState } from "react";

export const Search: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any>(null);
  return (
    <div>
      <h1 className="page-title">חיפוש דוחות</h1>
      <button
        onClick={async () => {
          const result = await fetch("/find-reports");
          const data = await result.json();
          setSearchResults(data);
        }}
      >
        Get Latest Docs
      </button>
      {searchResults &&
        searchResults.map((item: any, idx: number) => (
          <div key={idx}>{item._id}</div>
        ))}
    </div>
  );
};
