import {useEffect, useState} from 'react';

export default function Home(){
    const [apiResponse, setApiResponse] = useState('');

    useEffect(() => {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => setApiResponse(res))
        .catch(err => err)
    });

    return (
    <h1>{apiResponse}</h1>
    );
};