"use client";

import { useEffect, useRef, useState } from "react";

type NaverMapProps = {
  lat?: number;
  lng?: number;
  level?: number; // zoom level (1~14, 낮을수록 확대)
  markerTitle?: string;
};

const NaverMap: React.FC<NaverMapProps> = ({
  lat = 35.5609,
  lng = 129.3300,
  level = 14,
  markerTitle = "예심요양원",
}) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID;
    if (!clientId) {
      setReady(false);
      return;
    }
    // 이미 로드된 경우
    if (typeof window !== "undefined" && (window as any).naver?.maps) {
      setReady(true);
      return;
    }
    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;
    script.async = true;
    script.onload = () => setReady(true);
    script.onerror = () => setReady(false);
    document.head.appendChild(script);
    return () => {
      // script 제거는 생략 (다중 로드 방지)
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const naver = (window as any).naver;
    if (!naver?.maps || !mapRef.current) return;
    const center = new naver.maps.LatLng(lat, lng);
    const map = new naver.maps.Map(mapRef.current, {
      center,
      zoom: level,
    });
    new naver.maps.Marker({
      position: center,
      map,
      title: markerTitle,
    });
  }, [ready, lat, lng, level, markerTitle]);

  if (!process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID) {
    return (
      <div className="flex items-center justify-center p-6 text-center text-foreground-accent bg-white rounded-xl border">
        <div>
          <p className="mb-2">지도를 표시하려면 API 키가 필요합니다.</p>
          <p className="text-sm">환경변수 NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID 설정 후 다시 시도해 주세요.</p>
        </div>
      </div>
    );
  }

  return <div ref={mapRef} className="w-full h-full" />;
};

export default NaverMap;


