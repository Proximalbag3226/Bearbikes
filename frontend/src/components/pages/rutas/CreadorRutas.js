import htmlRutas from './creadorRutas.html';
import React, { useState, useEffect } from "react";

function Rutas() {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        fetch(htmlRutas)
            .then(response => response.text())
            .then(html => setHtmlContent(html))
            .catch(error => console.error(error));
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
}
export default Rutas;