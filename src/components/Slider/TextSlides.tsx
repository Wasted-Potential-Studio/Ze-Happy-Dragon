import { redirect } from "next/dist/server/api-utils";

export default function TextSlides() {
  return (
    <div className="flex">
      <h1 style={{ position: "absolute", top: "20vh", left: "25vw", color: "white",
        fontSize: "20vw",
        fontWeight: 600,
        letterSpacing: "-0.05em",
        lineHeight: "1em",
        margin: 0,
        padding: 0, }}>
        ready to
      </h1>
      <h1 style={{ position: "absolute", top: "20vh", left: "125vw", color: "white",
        fontSize: "20vw",
        fontWeight: 600,
        letterSpacing: "-0.05em",
        lineHeight: "1em",
        margin: 0,
        padding: 0,}}>
        explore
      </h1>
      <h1 style={{ position: "absolute", top: "20vh", left: "225vw",color: "white",
        fontSize: "20vw",
        fontWeight: 600,
        letterSpacing: "-0.05em",
        lineHeight: "1em",
        margin: 0,
        padding: 0, }}>
        ready to
      </h1>
    </div>
  )
}
