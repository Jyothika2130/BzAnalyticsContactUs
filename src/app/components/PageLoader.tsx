
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "animate.css"

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
     <div className="flex items-center justify-center h-screen">
           <div className="animate__animated animate__flipInY repeat-infinite">
             <Image src="/bz.png" alt="loading" width={100} height={100} />
           </div>
         </div>
    );
  }

  return <>{children}</>;
}
