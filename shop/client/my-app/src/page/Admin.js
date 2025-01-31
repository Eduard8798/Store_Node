import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../componenets/modals/CreateType.js";
import CreateBrand from "../componenets/modals/CreateBrand.js";
import CreateDevice from "../componenets/modals/CreateDevice.js";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    return (
        <Container>
            <Button variant={"outline-dark"}
                    className={"mt-2"}
            onClick={() => setTypeVisible(true)}
            >Добавити тип</Button>
            <Button variant={"outline-dark"} className={"mt-2"}
                    onClick={() => setBrandVisible(true)}
            >Добавити бренд</Button>
            <Button variant={"outline-dark"} className={"mt-2"}
                    onClick={() => setDeviceVisible(true)}
            >Добавити пристрій</Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;