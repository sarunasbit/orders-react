
const OrderItem = (props) => {
    const activeOrNot = props.active ? "Active" : "Inactive";
    
    return(
        <>
            <tr>
                <th scope="row">{props.id}</th>
                <td>{props.title}</td>
                <td>{activeOrNot}</td>
                <td><input type="checkbox" onChange={props.onToggle} className="status-toggle"/></td>
            </tr>
        </>
    );
}

export default OrderItem;