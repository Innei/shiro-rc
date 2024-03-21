"use client"

import { MLink, StyledButton } from "shiro-rc"

export const Hero = () => {
  return (
    <section className="container mt-32 flex flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Beautifully designed React Component{" "}
            <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            Port from{" "}
            <MLink href={"https://github.com/Innei/Shiro"}>Shiro</MLink> UI
          </p>
        </div>
      </div>
      <div className="mt-12 flex gap-4">
        <StyledButton
          onClick={() => {
            document
              .getElementById("layer")
              ?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Link Start
        </StyledButton>
      </div>
    </section>
  )
}
