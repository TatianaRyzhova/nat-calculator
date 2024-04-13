import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/answer1" element={<AnswerPage1 />} />
            <Route path="/answer2" element={<AnswerPage2 />} />
        </Routes>
    );
}

function HomePage() {
    let navigate = useNavigate();
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>What is your favorite color?</h1>
            <button onClick={() => navigate('/answer1')} style={{ margin: '10px', padding: '10px' }}>Blue</button>
            <button onClick={() => navigate('/answer2')} style={{ margin: '10px', padding: '10px' }}>Red</button>
        </div>
    );
}

function AnswerPage1() {
    return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>You chose Blue!</h1>;
}

function AnswerPage2() {
    return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>You chose Red!</h1>;
}

export default App;
