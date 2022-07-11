import { Box } from '@mui/material'

interface IPageRenderProps {
  children: React.ReactNode
}

export const PageRender = ({ children }: IPageRenderProps) => {
  return (
    <Box width={'100%'} justifyContent={'center'}>
      <Box maxWidth={1280}  sx={{
      margin: '0 auto'
    }} padding={4} justifyContent={'center'} gap={2}>
        {children}
      </Box>
    </Box>
  )
}

export default PageRender
