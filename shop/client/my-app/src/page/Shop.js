import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../componenets/TypeBar.js";
import BrandBar from "../componenets/BrandBar.js";
import DeviceList from "../componenets/DeviceList.js";
import {observer} from "mobx-react";
import {Context} from "../index.js";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI.js";

const Shop = observer(() => {
    const {device} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 5).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
            <TypeBar />
                </Col>
                <Col md={9}>
            <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;