import React from 'react';
import {Modal, Button, Form} from "react-bootstrap";

import {createType} from "../../http/deviceAPI.js";


const CreateType = ({show, onHide}) => { // Используем деструктуризацию
    const [value, setValue] = React.useState('');
    const addType = () => {
        createType({name:value}).then(data => {
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
                        placeholder="Введіть назву типу"/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Закрити</Button>
                <Button variant="primary" onClick={addType}>Додати новий тип</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
