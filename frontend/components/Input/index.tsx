import type { FunctionComponent } from 'react'
import { Input as InputComponent } from './styles'

type InputProps = {
  placeholder?: string
}

const Input: FunctionComponent<InputProps> = ({ placeholder }) => {
  return (
    <InputComponent placeholder={placeholder} />
  )
}

export default Input
