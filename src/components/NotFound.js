import React from "react";
import "./NotFound.css"
import {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not_found">
            <Link to="./">
            <div>
                <img 
                className="img_top"
                src="https://codes4education.com/wp-content/uploads/2020/10/404-Error-Page-UI-Design-new-min.png"  alt=''/>
            </div>
            </Link>

        </div>
    )
}
export default NotFound