import React from 'react';
import './test.css';

function Test() {
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100 + "%";
        const y = ((e.clientY - rect.top) / rect.height) * 100 + "%";

        e.currentTarget.style.setProperty('--x', x);
        e.currentTarget.style.setProperty('--y', y);
        e.currentTarget.style.setProperty('--glow-opacity', "1");
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.setProperty('--glow-opacity', "0");
    };

    return (
        <section className='Test'>
            <div className="container">
                
                <div
                    className="test-card"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="test-h1">
                        <h1>Год гарантия</h1>
                    </div>
                    <div className="test-p">
                        <p>Предоставляем гарантию и бесплатное обслуживание оборудования</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Test;