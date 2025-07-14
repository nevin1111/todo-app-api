import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-warning">
                <div class="container-fluid">
                    <Link class="navbar-brand active" aria-current="page" to="/">To do App</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">View To-do</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Add">Add To-do</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Search">Search To-do</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Delete">Delete To-do</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar