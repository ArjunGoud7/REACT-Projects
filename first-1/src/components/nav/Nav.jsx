import "./Nav.css"


function Nav(){
    
    return (
    <div className="main">

        <div className="title">
            <h1>FlipMart</h1>
        </div>

        <div className="anchor">
           <a href=""><i class="bi bi-house-heart" style={{ color:"yellow"}}></i>  Home</a>
           <a href="">Products</a>
           <a href="">Categories</a>
           <a href="">Profile</a>
        </div>

        <div className="but">
            <button>Login</button>
        </div>

    </div>
    )
}

export default Nav;