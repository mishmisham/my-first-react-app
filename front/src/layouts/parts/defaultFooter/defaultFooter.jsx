import React, { useState } from 'react';
import './defaultFooter.sass';

const DefaultFooter = () => {

    return (
        <footer className="default-footer">
            <section>
                <p>© Hello world {new Date().getFullYear()}</p>
            </section>
        </footer>
    )
}

export default DefaultFooter;