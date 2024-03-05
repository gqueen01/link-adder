import { useRef, useState } from "react"
import { IoImageOutline } from "react-icons/io5"
import './changeProfile.css'

function ChangeProfile() {
    const inputRef = useRef(null)
    const [image, setImage] = useState()

    function handleClick() {
        inputRef.current.click()
    }

    function changeImage(event) {
        setImage(URL.createObjectURL(event.target.files[0]))
    }

    return(
        <>
            <div >
                <h1 className="prof-det">Profile Details</h1>
                <p className="prof-parg">Add your details to create a personal touch to your profile</p>

                <div className="profile-section">
                    <p className="parg">Profile picture</p>
                    <div onClick={handleClick} className="profile-field">

                        <div style={{position: "relative"}}>
                            <img src={image} className="image" />
                            <IoImageOutline className="profile-icon"/>
                            <h4 className="profile-text">Change Image</h4>
                        </div>

                        <input type="file" ref={inputRef} onChange={changeImage} className="input-field"/>
                        <div>
                            <p  className="parg2">Image must be below 1024x1024 cm.</p>
                            <p  className="parg2">Use PNG, JPG, or BMP former.</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangeProfile