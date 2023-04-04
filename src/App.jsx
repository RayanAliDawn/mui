import Feed from './Components/Feed'
import Sidebar from './Components/Sidebar'
import Rightbar from './Components/Rightbar'
import Navbar from './Components/Navbar'
import { Box, Stack, Button } from '@mui/material'

function App() {


  return (

    <Box >
      <Navbar />
      <Stack direction='row' justifyContent='space-between' spacing={2}>
        <Sidebar />
        <Feed />

        <Rightbar />
      </Stack>

    </Box>


  )
}

export default App
