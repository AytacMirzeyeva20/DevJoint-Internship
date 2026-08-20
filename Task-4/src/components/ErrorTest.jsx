import { useState } from "react";

function ErrorTest() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("Test error: Error Boundary işləyir!");
  }

  return (
    <button
      onClick={() => setHasError(true)}
      className="mb-8 rounded-lg bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-600"
    >
      Sistemi Çökdür 
    </button>
  );
}

export default ErrorTest;