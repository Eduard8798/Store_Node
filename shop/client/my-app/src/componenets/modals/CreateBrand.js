import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand} from "../../http/deviceAPI.js";


const CreateBrand = ({ show, onHide }) => { // Используем деструктуризацию

    const [value, setValue] = React.useState('');
    const addBrand = () => {
        createBrand({name:value}).then(data => {
            setValue('')
            onHide();

        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Додати новий тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Введіть назву типу" />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Закрити</Button>
                <Button variant="primary" onClick={addBrand}>Додати новий тип</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
