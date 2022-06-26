import { autocompleteClasses, formLabelClasses, inputBaseClasses, inputLabelClasses, outlinedInputClasses, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MuiInput = styled(TextField)(({theme}) => ({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    color: theme.palette.error.main,
    borderColor: theme.palette.primary.main,
    borderWidth: '2px',
  },
  [`& .${outlinedInputClasses.input}`]: {
    padding: '9px 14px'
  },
  [`& .${formLabelClasses.root}.${inputLabelClasses.root}`]: {
    transform: 'translate(14px, 8px) scale(1)',
    '&.Mui-focused': {
      transform: 'translate(14px, -9px) scale(0.775)',
    },
    '&.MuiInputLabel-shrink': {
      color: theme.palette.primary.main,
      transform: 'translate(14px, -9px) scale(0.775)',
    }
  },
  "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
    padding: '10.5px 14px 10.5px'
  }
}));
