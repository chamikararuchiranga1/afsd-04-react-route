import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

export default function Children () {

    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/home')
    }
    return (
        <div>
            <h1>Children</h1>
            <Button onClick={()=> navigateHome()} variant="contained" sx={{margin: 2}}>Children Back</Button>
        </div>
    )
}