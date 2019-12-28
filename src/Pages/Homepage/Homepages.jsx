import React from 'react';
import '../../Styles/homepage.scss';
import Directory from "../../Components/Directory/Directory";
const Homepage=({history})=>{

    return(
        <div className='homepage'>
            <div className="directory-menu">
                <Directory history={history} />
            </div>

        </div>
    )

}
export default Homepage
