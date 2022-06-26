import {styled} from "@mui/material/styles"
import MuiButton from '@mui/material/Button'

const Button = styled(MuiButton)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'white'
}));

export default Button
