import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Link } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

const getRandomColor = () => {
    const colors = ['#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

const CustomCard = ({ image, title, description, tags, url }) => {
    return (
        <Card style={{ width: "30%", margin: "1rem" }}>
            <CardMedia component="img" height="140" image={image} alt={title} />
            <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                        <OpenInNew style={{ marginLeft: "0.5rem" }} />
                    </Link>
                </div>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <div>
                    {tags.map((tag, index) => (
                        <Chip
                            key={index}
                            label={tag}
                            variant="outlined"
                            size="small"
                            style={{ margin: "0.15rem", backgroundColor: getRandomColor() }}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default CustomCard;
