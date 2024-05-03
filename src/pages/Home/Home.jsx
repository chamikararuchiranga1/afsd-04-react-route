import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import instance from '../../services/AxiosOrder';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ProfileCrad from '../../component/ProfileCard/ProfileCard';

export default function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        instance.get('/albums/1/photos')
            .then(function (response) {
                // handle success
                setData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const postApi = () => {
        instance.post('/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Home</h1>
            <Link to={'/home'}><Button variant="contained" sx={{ margin: 2 }}>Back</Button></Link>
            <Button onClick={() => postApi()} variant="contained" sx={{ margin: 2 }}>Post API</Button>

            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {data.map((val, index)=> (
                    <ProfileCrad id={val.id} title={val.title}/>
                ))}
            </Box>
        </div>
    )
}