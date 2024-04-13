import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div style={styles.container}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/answer1" element={<AnswerPage1 />} />
                    <Route path="/answer2" element={<AnswerPage2 />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

function HomePage() {
    let navigate = useNavigate();
    return (
        <div style={styles.content}>
            <h1 style={styles.header}>Способ родоразрешения?</h1>
            <button onClick={() => navigate('/answer1')} style={styles.button}>ЕРП</button>
            <button onClick={() => navigate('/answer2')} style={styles.button}>КС</button>
        </div>
    );
}

function AnswerPage1() {
    return <h1 style={styles.header}>Вы выбрали ЕРП!</h1>;
}

function AnswerPage2() {
    return <h1 style={styles.header}>Вы выбрали КС!</h1>;
}

// Styles
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'white',  // Set background color to white
        padding: '0 20px',
    },
    content: {
        textAlign: 'center',
        maxWidth: '600px',
        width: '100%',
    },
    header: {
        marginBottom: '20px',
    },
    button: {
        fontSize: '16px',
        padding: '10px 20px',
        margin: '10px',
        width: '150px',
        cursor: 'pointer',  // Add cursor pointer for better UX
    }
};

export default App;
