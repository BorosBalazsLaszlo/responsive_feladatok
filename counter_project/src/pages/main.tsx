import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../css/main.css';

const App: React.FC = () => {
    const [count, setCount] = useState(0);

    const plusOne = () => {
        setCount(count + 1);
    };

    const plusTen = () => {
        setCount(count + 10);
    };

    const minusOne = () => {
        setCount(count - 1);
    };

    const minusTen = () => {
        setCount(count - 10);
    };

    return (
        <div>
            <nav
                style={{
                    backgroundColor: '#f6b3ff',
                    color: 'white',
                    padding: '16px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: '1200px',
                        margin: '0 auto',
                    }}
                >
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>My counter</div>
                </div>
            </nav>

            <div className="main">
                <div className="counter-text">Counter value:</div>
                <div className="counter-value">{count}</div>

                <div className="buttons">
                    <button onClick={plusOne}>+</button>
                    <button onClick={minusOne}>-</button>
                </div>
                <div className="buttons">
                    <button onClick={plusTen}>+</button>
                    <button onClick={minusTen}>-</button>
                </div>
            </div>
        </div>
    );
};

export default App;
