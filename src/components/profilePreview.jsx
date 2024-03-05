import './profilePreview.css'

function ProfilePreview() {
    return(
        <>
            <div className="profile-preview">
                <div className="phone-version" >
                    <img src="/iphone14.png" className="phone-png" />
                    <div className="prev-profile"></div>
                    <h5 className="name-first-name">name first name</h5>
                    <h5 className="prev-email">email</h5>
                    <h5 className="prev-links">links</h5>
                </div>
            </div>
        </>
    )
}

export default ProfilePreview