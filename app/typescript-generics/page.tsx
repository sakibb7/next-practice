"use client";

import { useState } from "react";

// video tutorial https://youtu.be/ymSRTXT-iK4

export default function TypescriptGenerics() {
  const [index, setIndex] = useState(0);

  function getArrayIndex<T>(array: T[], arrayItem: T) {
    const arrayIndex = array.findIndex((item) => item === arrayItem);
    setIndex(arrayIndex);
  }

  return (
    <div>
      <button
        className=" bg-slate-700 py-2 rounded-full px-4 text-white"
        onClick={() => getArrayIndex([25, 45, 86], 45)}
      >
        {index}
      </button>
    </div>
  );
}
