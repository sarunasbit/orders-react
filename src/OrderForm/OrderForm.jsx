import { useState } from "react";
const OrderForm = (props) => {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        active: false,
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) =>  {
        e.preventDefault()
        props.onSave(formData)
    }


    return (
        <>
            <form onSubmit={submitHandler} className="mt-5">
                <div className="form-group col-3 mt-1">
                    <label>Id</label>
                    <input type="number" onChange={handleChange} name="id" className="form-control" placeholder="Id" value={formData.id}/>
                </div>
                <div className="form-group col-3 mt-1">
                    <label>Title</label>
                    <input type="text" name="title" onChange={handleChange} className="form-control" placeholder="Title" value={formData.title}/>
                </div>
                <div className="form-check mt-1">
                    <input type="checkbox" name="active" onChange={handleChange} checked={formData.active}  className="form-check-input"/>
                    <label className="form-check-label" >Status Active</label>
                </div>
                <button type="submit" className="btn btn-secondary mt-1">Submit</button>
            </form>
        </>
    );
}


export default OrderForm;