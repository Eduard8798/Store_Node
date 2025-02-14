import React, {useContext} from 'react';
import {observer} from "mobx-react";
import {Context} from "../index.js";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
            <Card
                style={{cursor: 'pointer'}}
                key={brand.id} className={"p-4"}
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
            >
                {brand.name}
            </Card>
            )}
        </Row>
    );
});

export default BrandBar;