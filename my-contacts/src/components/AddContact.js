import './AddContact.css';
import { useState } from 'react';

function AddContact(props) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const add = (e) => {
        e.preventDefault();
        if (name === "" || phone === "") {
            alert("All fields are required!");
            return;
        }
        props.addContactHandler({ name, phone });
        setName("");
        setPhone("");
    };



    return (
        <div className="main">
            <h2 id="add-c-title">Add Contact</h2>
            <form className="form" onSubmit={add}>
                <div className="field">
                    <label>Name</label><br />
                    <input type="text" name="name" placeholder="Your Name..." value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="field">
                    <label>Number</label><br />
                    <input type="text" name="number" placeholder="Your Number..." value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                </div>
                <button className="button" id="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default AddContact;
