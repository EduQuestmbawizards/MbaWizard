"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookDemoPopup() {
  const router = useRouter();

  useEffect(() => {
    const handleOpenEvent = () => {
      router.push("/contact-us");
    };
    window.addEventListener("open-book-demo", handleOpenEvent);

    return () => {
      window.removeEventListener("open-book-demo", handleOpenEvent);
    };
  }, [router]);

  return null;
}
