import Feed from './Components/Feed'
import Sidebar from './Components/Sidebar'
import Rightbar from './Components/Rightbar'
import Navbar from './Components/Navbar'
import { Box, Stack, createTheme, ThemeProvider } from '@mui/material'
import Add from './Components/Add'
import { useState } from 'react'
import { light } from '@mui/material/styles/createPalette'



function App() {
  const [mode, setMode] = useState('light');
  const darktheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darktheme}>
      <Box bgcolor={"background.default"} color={"text.primary"} >
        <Navbar />
        <Stack direction='row' justifyContent='space-between' spacing={2}>
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />

          <Rightbar />
        </Stack>
        <Add />

      </Box>

    </ThemeProvider>



  )
}

export default App
