import { styled } from '@mui/material/styles'
import { IBannerProps } from '.'

export const Banner = styled('div')<Pick<IBannerProps, 'backgroundurl'>>(
  ({ theme, backgroundurl }) => ({
    marginInline: '-1rem',
    backgroundImage: `url(${backgroundurl})`,
    minHeight: '300px',
    maxHeight: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })
)
