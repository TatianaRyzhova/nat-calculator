import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import ERPCalculator from './components/ERPCalculator';
import KSCalculator from './components/KSCalculator';

function App() {
    return (
        <BrowserRouter basename="/nat-calculator" >
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/erp-calculator" element={<ERPCalculator />} />
                    <Route path="/ks-calculator" element={<KSCalculator />} />
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
                <button onClick={() => navigate('/ks-calculator')} style={buttonStyles}>КС</button>
            </div>
        </div>
    );
}

export default App;
