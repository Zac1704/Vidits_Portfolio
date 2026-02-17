"use client";

import { usePathname } from "next/navigation";

export default function ClientRouteGate({ children }) {
  const pathname = usePathname();

  // Centralized route rule
  const hiddenRoutes = ["/housitize"];
  const shouldHide = hiddenRoutes.some((route) => pathname?.startsWith(route));

  if (shouldHide) return null;

  return <>{children}</>;
}
