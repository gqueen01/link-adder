import { useState } from "react"
import ChangeProfile from "./changeProfile.jsx"
import "./profileDetails.css"

function ProfileDetails() {
    const [info, setInfo] = useState(
        {
            firstName: "",
            lastName: "",
            email: ""
        })


    function handleChange(event) {
        const {name, value} = event.target
        setInfo((prevInfo) => {
            return{
                ...prevInfo,
                [name]: value
            }
        })
    }

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
                            onChange={handleChange}
                        />
                    </div>

                    <div className="inf-input">
                        <h5 className="last-name">Last name</h5>
                        <input
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            value={info.lastName}
                        />
                    </div>

                    <div className="inf-input">
                        <h5 className="email">Email</h5>
                        <input
                            type="text"
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