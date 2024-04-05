import { Link } from 'react-router-dom'
import './previewPage.css'
import { useSelector } from 'react-redux'

function PrevewPage() {
    const userInfo = useSelector((state) => state.userInformation)

    return(
        <>
            <div>
                <div className="blue-layout">
                    <div className="preview-navbar">
                        <Link to='/profile' className='back'>Back to Editor</Link>
                        <Link to='/' className='share-link'>Share Link</Link>
                    </div>
                </div>
                
                <div className='preview-profile'>
                    <div className='prev-page-profile'></div>
                    <div>
                        <h5 className="prev-page-name">{userInfo.firstName} {userInfo.surName}</h5>
                        <h5 className="prev-page-email">{userInfo.email}</h5>
                        <h5 className="prev-page-links">link</h5>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PrevewPage