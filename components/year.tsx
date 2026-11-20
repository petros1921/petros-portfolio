"use client";

import { useEffect, useState } from "react";

export function Year() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Return nothing on the server to avoid the build error
  if (!year) return null;

  return <>{year}</>;
}