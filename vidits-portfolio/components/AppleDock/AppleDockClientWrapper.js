"use client";

import dynamic from "next/dynamic";

const AppleDock = dynamic(() => import("@/components/AppleDock/AppleDock"), {
  ssr: false,
});

export default function AppleDockClientWrapper() {
  return <AppleDock />;
}
