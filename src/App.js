import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import ERPCalculator from './components/ERPCalculator';

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/erp-calculator" element={<ERPCalculator />} />
                    <Route path="/answer2" element={<AnswerPage2 />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

function HomePage() {
    let navigate = useNavigate();
    const homeStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
        backgroundColor: 'white'
    };

    const buttonStyles = {
        fontSize: '16px',
        padding: '10px 20px',
        margin: '10px',
        width: '150px',
        cursor: 'pointer'
    };

    const buttonsContainer = {
        display: 'flex',  // This line will lay out the buttons horizontally.
        justifyContent: 'center'
    };

    return (
        <div style={homeStyles}>
            <h1 style={{ marginBottom: '20px' }}>Способ родоразрешения?</h1>
            <div style={buttonsContainer}>
                <button onClick={() => navigate('/erp-calculator')} style={buttonStyles}>ЕРП</button>
                <button onClick={() => navigate('/answer2')} style={buttonStyles}>КС</button>
            </div>
        </div>
    );
}

function AnswerPage2() {
    return <h1 style={{ textAlign: 'center' }}>Вы выбрали КС!</h1>;
}

export default App;
