import './App.css'
import JavaScriptLogo from './JavaScriptLogo.tsx'
import { Container, Typography, Stack } from '@mui/material'
function App() {

  return (
    <main>
      <Container>
      <Stack direction='row' gap={2} justifyContent='center' alignItems='center'>
      <JavaScriptLogo />

      <Typography variant='h2' component='h1'>
      Javascript Quiz
      </Typography>
      </Stack>

      </Container>
    </main>
  )
}

export default App
