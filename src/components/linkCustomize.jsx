import { useEffect, useState } from "react";
import './linkCustomize.css';
import { useSelector } from "react-redux";

function LinkCustomize({ onDataLinks }) {
    const addedLinks = useSelector((state) => state.userLink.links)
    const [linkList, setLinkList] = useState([])

    const removeInputFeild = (index) => {
        const list = [...linkList]
        list.splice(index, 1)
        setLinkList(list)
    }
    
    const handleChange = (e, index) => {
        const {name, value} = e.target
        const list=[...linkList]
        list[index][name] = value
        setLinkList(list)
    }

    useEffect(() => {
        onDataLinks(linkList)
    }, [linkList])

    useEffect(() => {
        if (addedLinks) {
            setLinkList(addedLinks)
        }
    }, [])

    const newInputField = linkList.map((list, index) => {
        return(
            <form key={index} className="new-input-field">
                <div className="input-head">
                    <h4 style={{margin: "0px 0px 10px 0px"}}>-Link #{index+1}</h4>
                    <button type="button" className="remove-btn" onClick={() => removeInputFeild(index)}>Remove</button>
                </div>
                <div className="all-link">
                    <div className="link-field">
                        <p className="parg">Platform</p>
                        <input
                            className="links-field"
                            name="platform"
                            type="text"
                            value={list.platform}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>
                    <div className="link-field">
                        <p className="parg">Link</p>
                        <input
                            className="links-field"
                            name="link"
                            type="text"
                            value={list.link}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>
                </div>
            </form>
        )
    })

    function AddNewInput() {
        setLinkList((prevLinkList) => {
            return(
                [...prevLinkList, {platform: "", link: ""}]
            )
        })
    }    

    return(
        <>
            <div className="link-customize">
                <h1>Customize your links</h1>
                <p className="link-parg">Add/edit/remove link below and then share all your profiles with the world!</p>
                <button className="add-link-btn" onClick={AddNewInput}>+Add new link</button>
                <div>
                    {newInputField}
                </div>
            </div>
        </>
    )
}

export default LinkCustomize