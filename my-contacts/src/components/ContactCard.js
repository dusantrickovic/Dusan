import './ContactCard.css';

function ContactCard(props) {
    const { id, name, phone } = props.contact;

    return (
        <div className="item">
            <div className="content">
                <div className="header-1">{name}</div>
                <div>{phone}</div>
            </div>
            <i className="fa fa-trash bin" onClick={() => props.clickHandler(id)} />
        </div>
    )
}

export default ContactCard
