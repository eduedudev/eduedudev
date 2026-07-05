import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Eduardo Guastay - Software AI Engineer"
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = "image/png"

const baseUrl = process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://eduedu.dev`;


// Font
const spaceGrotesk = fetch(
    new URL("https://fonts.gstatic.com/s/spacegrotesk/v21/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVksj.ttf"),
).then((res) => res.arrayBuffer())
export default async function Image() {
    const fontData = await spaceGrotesk

    return new ImageResponse(
        <div
            style={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#000",
                position: "relative",
            }}
        >
            {/* Matrix-like background */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.2,
                    display: "flex",
                    flexWrap: "wrap",
                }}
            >
                {Array.from({ length: 100 }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            color: "#00ff00",
                            fontSize: "24px",
                            opacity: Math.random() * 0.7 + 0.3,
                            transform: `translate(${Math.random() * 1200}px, ${Math.random() * 630}px)`,
                        }}
                    >
                        {Math.random() > 0.5 ? "0" : "1"}
                    </div>
                ))}
            </div>

            {/* Glowing orb */}
            <div
                style={{
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0,255,0,0.2) 0%, rgba(0,0,0,0) 70%)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* Profile image placeholder */}
            <div
                style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    border: "3px solid #00ff00",
                    marginBottom: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "black",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(135deg, rgba(0,255,0,0.2) 0%, rgba(0,0,0,0) 70%)",
                    }}
                />
                <img
                    src={`${baseUrl}/placeholder.jpg`}
                    alt="Profile"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h1
                    style={{
                        fontSize: "60px",
                        fontWeight: "bold",
                        color: "white",
                        margin: "0",
                        textAlign: "center",
                        fontFamily: "Space Grotesk",
                    }}
                >
                    Eduardo Guastay
                </h1>
                <p
                    style={{
                        fontSize: "32px",
                        color: "#00ff00",
                        margin: "10px 0 20px",
                        textAlign: "center",
                        fontFamily: "Space Grotesk",
                    }}
                >
                    Software AI Engineer
                </p>
                <p
                    style={{
                        fontSize: "20px",
                        color: "#888",
                        margin: "0",
                        textAlign: "center",
                        maxWidth: "600px",
                        fontFamily: "Space Grotesk",
                    }}
                >
                    Philanthropist, Playboy, Software AI Engineer.
                </p>
            </div>

            <div
                style={{
                    position: "absolute",
                    bottom: "30px",
                    display: "flex",
                    gap: "20px",
                }}
            >
                {["X", "GitHub", "LinkedIn", "Instagram"].map((platform) => (
                    <div
                        key={platform}
                        style={{
                            padding: "8px 16px",
                            borderRadius: "20px",
                            border: "1px solid #00ff00",
                            color: "#00ff00",
                            fontSize: "18px",
                            fontFamily: "Space Grotesk",
                        }}
                    >
                        {platform}
                    </div>
                ))}
            </div>
        </div>,
        {
            ...size,
            fonts: [
                {
                    name: "Space Grotesk",
                    data: fontData,
                    style: "normal",
                    weight: 700,
                },
            ],
        },
    )
}
