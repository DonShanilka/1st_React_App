
import '../App.css'
import BodyContent from '../Components/BodyContent/BodyContent'
import HeaaderContent from '../Components/HeaderContent/HeaaderContent'
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Button from '../Components/ButtonComponent/Button';

function About() {

    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [salary, setSalary] = React.useState("");

    const [isChecked, setIsChecked] = React.useState(false);
    const [gender, setGender] = React.useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const saveData = () => {
        const data = {
            name,
            age,
            address,
            salary,
            isChecked,
            gender
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    return (
        <>
            <div id="wrapper">
                <HeaaderContent />

                <BodyContent>
                    <TextField id="outlined-basic" label="name" variant="outlined" onChange={(e) => { setName(e.target.value) }} />
                    <br /><br />
                    <TextField id="outlined-basic" label="address" variant="outlined" onChange={(e) => { setAddress(e.target.value) }} />
                    <br /><br />
                    <TextField id="outlined-basic" label="age" variant="outlined" onChange={(e) => { setAge(e.target.value) }} />
                    <br /><br />
                    <TextField id="outlined-basic" label="salary" variant="outlined" onChange={(e) => { setSalary(e.target.value) }} />
                    <br /><br />
                    <input type="radio" id="male" name="gender" value="Male" checked={gender === 'Male'} onChange={handleGenderChange} />
                    <label htmlFor="female">Male</label>
                    <br /><br />
                    <input type="radio" id="female" name="gender" value="Female" checked={gender === 'Female'} onChange={handleGenderChange} />
                    <label htmlFor="female">Female</label>
                    <br /><br />
                    <input type="checkbox" id='myCheck' onChange={() => { setIsChecked(!isChecked) }} />
                    <p>{isChecked ? "Checkbox is checked" : "Checkbox is not checked"}</p>
                    <br /><br />
                    <Button event={saveData} text="Save" />

                </BodyContent>

            </div>
        </>
    );
}

export default About