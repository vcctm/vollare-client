import { OutlinedTextFieldProps } from '@mui/material'
import * as S from './styles'

interface ITextInputProps extends OutlinedTextFieldProps{}

const TextInput = (props: ITextInputProps) => (
  <S.MuiInput {...props} variant='outlined'/>
)

export default TextInput
