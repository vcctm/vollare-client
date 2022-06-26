import * as S from './styles'
import Header from 'components/Header'
import Banner from 'components/Banner'
import PlaneBackground from 'assets/images/PlaneBannerBackground.png'
import { BANNER_TEXTS } from './CONTANTS'
import TextInput from 'components/TextInput'
import { Autocomplete, Grid, Typography } from '@mui/material'

const Main = () => (
  <S.Wrapper>
    <Header />
    <Banner backgroundurl={PlaneBackground} text={BANNER_TEXTS.PLANE} />
    <Grid
      margin={2}
      gap={2}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      maxWidth={'70%'}
      alignItems={'center'}>
      <Typography fontSize={48}>
        Nos conte o que <b>aconteceu</b>!
      </Typography>
      <Grid sx={{width: '100%'}} gap={2} style={{ display: 'flex' }}>
        <TextInput
          sx={{
            minWidth: '200px',
            maxWidth: '200px'
          }}
          type='text'
          label='Nome'
          required
          variant='outlined'
        />
        <TextInput
          sx={{
            minWidth: '200px',
            maxWidth: '200px'
          }}
          type='text'
          label='Sobrenome'
          required
          variant='outlined'
        />
        <TextInput
          sx={{
            minWidth: '500px',
            width: '100%'
          }}
          type='email'
          label='Email'
          required
          variant='outlined'
        />
      </Grid>
      <Grid sx={{width: '100%'}} gap={2} style={{ display: 'flex' }}>
        <TextInput
          sx={{
            minWidth: '200px',
            maxWidth: '200px'
          }}
          InputLabelProps={{ shrink: true }}
          type='date'
          label='Data do voo'
          required
          variant='outlined'
        />
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          options={top100Films}
          renderInput={(params) => (
            <TextInput {...params} sx={{
              minWidth: '220px',
            }} variant={'outlined'} label='Companhia aérea' required/>
          )}
        />{' '}
        <TextInput
          sx={{
            minWidth: '200px',
          }}
          type='number'
          label='Número do voo'
          required
          variant='outlined'
        />
        <TextInput
          sx={{
            minWidth: '220px',
            width: '100%'

          }}
          type='text'
          label='Coupom'
          required
          variant='outlined'
        />
      </Grid>
      <Grid    sx={{
          alignSelf: 'flex-start'
        }} justifyContent={'flex-start'} gap={2} style={{ display: 'flex' }}>
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          options={top100Films}
          renderInput={(params) => (
            <TextInput {...params} sx={{
              minWidth: '220px',
            }} variant={'outlined'} label='Companhia aérea' required/>
          )}
        />{' '}
      </Grid>
    </Grid>
  </S.Wrapper>
)

export default Main

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 }
]
