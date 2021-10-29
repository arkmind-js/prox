import { Form, Button } from "antd"
import { useState} from 'react';

const ProductEditForm = ({product}) =>{

    const id = product.id;

    const [name, setName] = useState(product.name);
    const [desc, setDesc] = useState(product.desc);
    const [status, setStatus] = useState(product.status);


   const updatedData = {id, name, desc, status}

    const handleSubmit = (e) => {
        e.preventDefault();
        //updateData(id)
    } 

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="productname"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Description *"
                    name="productdesc"
                    value={desc}
                    onChange={(e)=> setDesc(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="text"
                    placeholder="Status"
                    name="productstatus"
                    value={status}
                    onChange={(e)=> setStatus(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit 
            </Button>
        </Form>

     )
}

export default ProductEditForm