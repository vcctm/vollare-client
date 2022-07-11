import { HomePage, PageRender } from 'pages'
import AppThemeProvider from 'styles/AppThemeProvider'

function App() {

  return (
    <AppThemeProvider>
      <PageRender>
        <HomePage />
      </PageRender>
    </AppThemeProvider>
  )
}

export default App
