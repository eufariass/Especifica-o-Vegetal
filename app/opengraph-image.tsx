import { ImageResponse } from "next/og";
import { site } from "@/content/landing";

export const runtime = "edge";

export const alt = site.title;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #faf8f5 0%, #ecfdf5 45%, #d1fae5 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxWidth: 900,
          }}
        >
          <span
            style={{
              fontSize: 28,
              color: "#166534",
              fontWeight: 600,
            }}
          >
            Especificação Vegetal
          </span>
          <span
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#1c1917",
              lineHeight: 1.15,
            }}
          >
            Método Casting Botânico — especifique vegetação com segurança e ABNT
          </span>
          <span style={{ fontSize: 26, color: "#57534e" }}>
            Prof. Alexander Hulsmeyer · Aulas ao vivo
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
