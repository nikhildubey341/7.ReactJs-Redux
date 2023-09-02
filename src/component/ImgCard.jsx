

// import * as React from 'react';
//import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


function ImgCard() {
    const [Count, setCount] = useState(0);
    return (
        <div className='Img1'>
            <Card sx={{ minWidth: 150, borderRadius:"20px" }}>

                <div className="Img2">
                    <CardContent>

                        <Typography variant="h5" component="div" >
                            Counter APP
                        </Typography>

                        <button style={{ marginLeft: '55px' }}>{Count}</button>


                    </CardContent>
                    <CardActions>
                        <Button onClick={() => setCount(Count + 1)} style={{ border: "2px solid black", marginLeft: '10px', borderRadius:"20px" }} size="small"> + </Button>
                        <Button onClick={() => setCount(Count - 1)} style={{ border: "2px solid black", borderRadius:"20px" }} size="small"> - </Button>
                    </CardActions>
                </div>
            </Card>

        </div>
    )
}

export default ImgCard;
