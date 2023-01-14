import React from "react";
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from "./GifExpertApp";

import './styles.css'


// ideas para estructurar archivos en react
// https://es.reactjs.org/docs/faq-structure.html
// https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GifExpertApp/>
    </React.StrictMode>
)