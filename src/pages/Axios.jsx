
import axios from 'axios';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useState } from 'react';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
);

function Axios({ id, title, discription, url }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    function postData() {
        axios.post('', {
            title: "foo",
            body: "bar",
            userId: 1,
        })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        ID - {id}
                    </Typography>
                    <Typography variant="h5" component="div">
                        Title - {title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}></Typography>
                    <Typography variant="body2">
                        User ID
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )

}

export default Axios