import { useEffect, useState } from "react"
import ChangeProfile from "./changeProfile.jsx"
import { useSelector } from "react-redux"
import "./profileDetails.css"

function ProfileDetails({ onSendData }) {
    const givenInformation = useSelector((state) => state.userInformation)
    const [info, setInfo] = useState(
        {
            ...givenInformation,
            firstName: givenInformation.firstName || "",
            lastName: givenInformation.surName || "",
            email: givenInformation.email || ""
        })
    
    const handleChange = (event) => {
        const {name, value} = event.target
        setInfo((prevInfo) => {
            return{
                ...prevInfo,
                [name]: value
            }
        })
    }
    
    useEffect(() => {
        onSendData(info)
    }, [info])
    
    return(
        <>
            <div className="profile-details">
                <ChangeProfile />

                <form className="information">
                    <div className="inf-input">
                        <h5 className="first-name">First name</h5>
                        <input
                            type="text"
                            name="firstName"
                            value={info.firstName}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>

                    <div className="inf-input">
                        <h5 className="last-name">Last name</h5>
                        <input
                            type="text"
                            name="lastName"
                            value={info.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="inf-input">
                        <h5 className="email">Email</h5>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={info.email}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProfileDetails