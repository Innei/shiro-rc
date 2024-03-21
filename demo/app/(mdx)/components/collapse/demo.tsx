"use client"

import { useState } from "react"
import { CollapseContent, StyledButton } from "shiro-rc"

export const CollapseDemo1 = () => {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <StyledButton onClick={() => setOpened((opened) => !opened)}>
        Toggle Collapse
      </StyledButton>
      <CollapseContent withBackground isOpened={opened}>
        <p>
          Maiores occaecati quis animi nihil debitis. Iure suscipit animi.
          Repellat quia quas harum possimus dolorum dolore ullam eius. Tenetur
          aut saepe illo expedita culpa. Nisi asperiores doloribus facere
          eveniet ad tempore nemo accusantium in. Possimus eum dolorum a aliquid
          unde dolore corporis. Voluptatem quibusdam ipsam numquam. Vero aliquid
          odit reiciendis amet cum sapiente commodi. Natus in ullam dignissimos
          sed eos accusantium. Quis eligendi aliquid. Cumque possimus sed
          suscipit vero. Repellendus inventore quo porro necessitatibus totam.
        </p>
      </CollapseContent>
    </>
  )
}
