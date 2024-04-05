import { useSelector } from 'react-redux'
import './profilePreview.css'

function ProfilePreview() {
    const userInfo = useSelector((state) => state.userInformation)
    const userProfile = useSelector((state) => state.userProfile.img)
    const userLink = useSelector((state) => state.userLink.links)
    // const link = userLink.map((link, index) => {
    //     console.log("preview=", link)
    //     return(
    //         <div key={index}>
    //             <h1>{link}</h1>
    //         </div>
    //     )
    // })
    
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
                    <h5 className="prev-links">{userLink}</h5>
                </div>
            </div>
        </>
    )
}

export default ProfilePreview