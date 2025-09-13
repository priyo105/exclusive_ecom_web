import { Card, CardContent, CardMedia, Box } from '@mui/material'
import { imageUrls } from '../apis/endpoints'
import { Category } from '../types/Category'
import React from 'react'

export default function CategoryBox({ category }: { category: Category }) {
    return (
        <Card
            sx={{
                minWidth: { xs: '100%', sm: 170 },
                borderRadius: 4,
                backgroundImage: 'linear-gradient(135deg, #FFFFF0, #FAF0E6, #c0bbff)', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
                display: { xs: 'flex', sm: 'block' }, // flex on mobile, block on desktop
                alignItems: 'center',
                p: { xs: 1, sm: 0 },
                '&:hover': { transform: 'scale(1.05)' }
            }}
        >
            <CardMedia
                component="img"
                sx={{
                    height: { xs: 60, sm: 80 },
                    width: { xs: 60, sm: 80 },
                    objectFit: 'contain',
                    margin: { xs: 0, sm: 'auto' },
                    mt: { sm: 2 }
                }}
                image={imageUrls + "/uploads/" + category.iconUrl}
                alt={category.name}
            />
            <Box sx={{ flex: 1, textAlign: { xs: 'left', sm: 'center' }, ml: { xs: 2, sm: 0 } }}>
                <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
                    <p className="font-bold text-xl">{category.name}</p>
                </CardContent>
            </Box>
        </Card>
    )
}
