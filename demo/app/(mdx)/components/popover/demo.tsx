"use client"

import { FloatPopover, StyledButton } from "shiro-rc"

export const Demo = () => {
  return (
    <FloatPopover
      type="tooltip"
      triggerElement={<StyledButton>Popover</StyledButton>}
    >
      <p>
        Explicabo rerum doloribus commodi tenetur aperiam. Tenetur pariatur
        illum quaerat. Libero porro sit. Sint modi vitae atque optio nisi
        voluptatem eos ex. Adipisci enim sapiente recusandae officia. Pariatur
        sequi id quaerat accusantium enim nesciunt dolore eligendi.
      </p>
    </FloatPopover>
  )
}
