import { useDispatch } from "react-redux"
import "./saveButton.css"
import { userInformationActions } from "./store/userInformationSlice"
import { userLinkActions } from "./store/linkSlice"

function SaveButton({ btnData, btnDataLinks }) {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(userInformationActions.save(btnData))
        dispatch(userLinkActions.getLinks(btnDataLinks))
    }

    return(
        <>
            <div className="button-field">
                <button className="save-button" onClick={handleClick}>Save</button>
            </div>
        </>
    )
}

export default SaveButton