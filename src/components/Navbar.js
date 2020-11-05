import React from 'react'

const Navbar =() => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
          <a href='/' className="brand logo">Xminds</a>
            <ul className="right">
                <li><a href="/home">Home</a></li>
                 <li><a href="/list">List</a></li>
                <li><a href="/create">Create</a></li> 

            </ul>
            </div>
        </nav>
    )
}
export default Navbar