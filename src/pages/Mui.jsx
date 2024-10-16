import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

function Mui() {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button sx={{ backgroundColor: "red", border: "none", color: "white" }} variant="outlined">Outlined</Button>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                Upload files
                <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                />
            </Button>

            <div></div>
        </Stack>
    )
}

export default Mui