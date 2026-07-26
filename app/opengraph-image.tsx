import { ImageResponse } from "next/og";

export const alt = "Jordan Twiggs — Product Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The two-tile split, carried into link previews.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "62%",
            height: "100%",
            backgroundColor: "#14151a",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#83878e",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Product Manager · Tamworth, UK
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#ededea",
                fontSize: 104,
                fontWeight: 700,
                letterSpacing: -3,
                lineHeight: 1,
              }}
            >
              <span>Jordan</span>
              <span>Twiggs</span>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 34,
                maxWidth: 560,
                color: "#9b9ea4",
                fontSize: 29,
                lineHeight: 1.35,
              }}
            >
              I scaled a £4m marketplace startup before moving into product
              management, and I still ship code.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ededea",
              fontSize: 22,
              letterSpacing: 3,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 44,
                height: 3,
                backgroundColor: "#066aff",
                marginRight: 18,
              }}
            />
            jtwi.me
          </div>
        </div>

        <div
          style={{
            width: "38%",
            height: "100%",
            backgroundColor: "#1b1d23",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 300,
              height: 300,
              borderRadius: 300,
              display: "flex",
              backgroundImage:
                "linear-gradient(150deg, #cfd6ea 0%, #6f8fd8 34%, #2f57b8 62%, #191b22 100%)",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
