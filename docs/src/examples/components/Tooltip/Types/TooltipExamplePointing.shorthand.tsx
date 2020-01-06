import * as React from 'react'
import { Button, Tooltip } from '@fluentui/react'

const TooltipExamplePointing = () => (
  <Tooltip
    open
    pointing
    trigger={<Button icon={{ name: 'more' }} />}
    content="The tooltip is pointing."
  />
)

export default TooltipExamplePointing
