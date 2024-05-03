import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProfileCrad({id, title}) {
    return (
        <Card sx={{ width: 250, margin: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {id}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}