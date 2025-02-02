import React from 'react';
import KanbanPage from "./pages/KanbanPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditPage from "./pages/EditPage";




export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<KanbanPage/>}/>
                <Route path={'/:id'} element={<EditPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};


