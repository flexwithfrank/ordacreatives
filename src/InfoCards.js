import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function InfoCards({ med, txt1, txt2, btn}) {
  return (
    <Card sx={{ borderRadius: 4, maxWidth: 400}}>
      <CardActionArea>
        <CardMedia  
          component="img"
          height="5000"
          image={med}
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span className='josefin'>{txt1}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span className='josefin'>{txt2}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <span className='josefin'>{btn}</span>
        </Button>
      </CardActions>
    </Card>
  );
}
