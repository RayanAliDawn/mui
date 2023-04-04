import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'
export default function Feed() {
    return (
        <Box flex={4} >
            <Post />
            <Post />     <Post />     <Post />     <Post />
        </Box>
    )
}
