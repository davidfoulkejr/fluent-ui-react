import { Accessibility } from '../../interfaces'
import * as keyboardKey from 'keyboard-key'

const RadioBehavior: Accessibility = (props: any) => ({
  attributes: {
    root: {
      role: 'radio',
      tabIndex: props.checked ? '0' : '-1',
      'aria-checked': props.checked,
    },
    label: {
      role: 'presentation',
    },
  },
})

export default RadioBehavior
