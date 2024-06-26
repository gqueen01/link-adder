import { NavLink, Outlet, Link } from "react-router-dom"
import { BiLink } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import ProfilePreview from "./profilePreview";
import SaveButton from "./saveButton";
import './navbar.css'

function Navbar({ data, dataLinks }) {
    return(
        <>
            <div className="nav">

                <div className="name">
                    <div className="icon">
                        <BiLink style={{rotate: "0 0 1 45deg"}}/>
                    </div>
                    <h2 className="dev-link">devlinks</h2>
                </div>

                <div className="links">
                    <NavLink to='/' className='link'><BiLink />Links</NavLink>
                    <NavLink to='/profile' className='link'><CgProfile />Profile Details</NavLink>
                </div>
                
                <Link to='preview'className="preview">Preview</Link>
            </div>

            <div style={{display: 'flex',gap: '45px', padding: '30px 0px', height: "34rem"}}>
                <ProfilePreview />
                <div className="link-adder-field">
                {/* style={{display: 'flex', flexDirection: 'column', gap: '3px', width: '60%'}} */}
                    <Outlet />
                    <SaveButton btnData={data} btnDataLinks={dataLinks} />
                </div>
            </div>

        </>
    )
}

export default Navbar