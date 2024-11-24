import OrderItem from "../OrderItem/OrderItem";
import OrderForm from "../orderForm/orderForm";
import { useState } from "react";
function OrderList() {

    const[isFormOpen, setIsFormOpen] = useState(false);
    const[tableItem, setTableItem] = useState([]);
    const openForm = () => {setIsFormOpen(!isFormOpen)};

    const addForm = (data) => {
        setTableItem((prevData)=> {
            return[...prevData, data]
        })
        setIsFormOpen(false)
    }

    const toggleStatus = (data) => {
        console.log(data.active);
    
        setTableItem((prevData) =>
            prevData.map((item) =>
                item.id === data.id
                    ? { ...item, active: !item.active }
                    : item
            )
        );
    };

    return (
        <>
        <div className="row mb-3 mt-3 d-flex justify-content-center">
        <div className="btn-group col-3" role="group" aria-label="Basic example">
            <button type="button" name="all" className="btn btn-secondary">All</button>
            <button type="button" name="active" className="btn btn-secondary">Active</button>
            <button type="button" name="inactive" className="btn btn-secondary">Inactive</button>
        </div>
        </div>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th scope="col">State</th>
                </tr>
                
            </thead>
            <tbody>
                {tableItem.length > 0 ? (
                    tableItem.map(data => 
                        <OrderItem
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        active={data.active}
                        onToggle={()=>toggleStatus(data)}
                        />
                    )
                ) : (
                    <tr>
                        <td>No orders</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                )}
            </tbody>
        </table>
        <div className="row col-3 d-flex justify-content-end">
            <div className="btn-group d-flex justify-content-end" role="group" aria-label="Basic example">
                <button type="button" onClick={openForm}  className="btn btn-secondary">Add</button>
                {/* <button type="button" className="btn btn-secondary">Change status</button> */}
            </div>
        </div>
        {isFormOpen && <OrderForm onSave={addForm}/>}
        </>
    );
}

export default OrderList;