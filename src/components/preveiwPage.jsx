import { Link } from 'react-router-dom'
import './previewPage.css'

function PrevewPage() {
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
                </div>

            </div>
        </>
    )
}

export default PrevewPage