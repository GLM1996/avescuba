"use client";

import dynamic from "next/dynamic";

const MapaTours = dynamic(() => import("./MapaTours"), { ssr: false });

export default function MapaToursClient() {
  return <MapaTours />;
}
