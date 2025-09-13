import { Card, CardContent, Box, Typography } from '@mui/material'
import { imageUrls } from '../apis/endpoints'
import { Category } from '../types/Category'
import React from 'react'

export default function CategoryBox({ category }: { category: Category }) {
    return (
        <Card
            sx={{
                minWidth: { xs: '100%', sm: 170 },
                borderRadius: 4,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: { xs: 200, sm: 250 },
                position: 'relative',
                overflow: 'hidden',
                '&:hover': { transform: 'scale(1.1)' }
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${imageUrls}/uploads/${category.webiconimageurl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.9)', 
                    zIndex: 0,

                }}
            />

            <CardContent
                sx={{
                    position: 'absolute', 
                    top: -5, 
                    left: 8, 
                    bottom:4,
                    zIndex: 1,
                    color: 'white', 
                    marginLeft:'auto',
                 
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {category.name}
                </Typography>
            </CardContent>

        </Card>
    )
}
