import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SharedLayout from "./layout/SharedLayout"
import Home from "./page/Home"

import React from "react"

import Provider from "./Provider"
import About from "./page/About"
import Contact from "./page/Contact"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider>
            <BrowserRouter>
                <Routes>
                    <Route element={<SharedLayout />} path="/">
                        <Route element={<Home />} index />
                        <Route element={<About />} path="about" />
                        <Route element={<Contact />} path="contact" />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
