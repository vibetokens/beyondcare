import type { Metadata } from "next";
import CareQuiz from "@/components/CareQuiz";

export const metadata: Metadata = {
  title: "Find the Right Home Care | Beyond Care",
  description:
    "Answer 4 quick questions and we'll recommend the home care services that best fit your loved one's needs. Free, no-obligation guidance from Beyond Care in Upstate SC.",
};

export default function CareQuizPage() {
  return (
    <>
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Care Finder</span>
            <h1
              className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}
            >
              Find the Right Care in 4 Questions
            </h1>
            <p
              className="mt-4 max-w-xl"
              style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}
            >
              Not sure where to start? Tell us a little about your situation and
              we&apos;ll point you toward the services that make the most sense.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-canvas">
        <div className="wrap">
          <CareQuiz />
        </div>
      </section>
    </>
  );
}
