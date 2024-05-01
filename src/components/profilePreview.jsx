import { useSelector } from 'react-redux'
import './profilePreview.css'

function ProfilePreview() {
    const userInfo = useSelector((state) => state.userInformation)
    const userProfile = useSelector((state) => state.userProfile.img)
    const userLink = useSelector((state) => state.userLink.links)
    const link = userLink.map((link, index) => {
        return(
            <div className="prev-links" key={index}>
                <h1>{link.platform}</h1>
            </div>
        )
    })
    
    return(
        <>
            <div className="profile-preview">
                <div className="phone-version" >
                    <img src="/iphone14.png" className="phone-png" />
                    <div className="prev-profile">
                        <img src={userProfile} className='user-profile' />
                    </div>
                    <h5 className="name-first-name">{userInfo.firstName} {userInfo.surName}</h5>
                    <h5 className="prev-email">{userInfo.email}</h5>
                    <div className='prev-links-section'>
                        <h5>{link}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePreview