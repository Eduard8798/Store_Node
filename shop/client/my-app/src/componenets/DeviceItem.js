import React from 'react';
import { Card, Col, Image } from "react-bootstrap";
import lock from '../assets/link.png';
import { useNavigate} from 'react-router-dom';
import {DEVICE_ROUTE} from "../utils/const.js";
const DeviceItem = ({ device }) => {
    const navigate = useNavigate();
    console.log('Image URL:', process.env.REACT_APP_API_URL +'/'+ device.img);

    return (
        <Col md={3} className="mb-4" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card
                style={{ cursor: 'pointer', border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                className="p-3 rounded"
            >

                <Image
                    src={process.env.REACT_APP_API_URL + '/' + device.img}
                    alt={device.name}
                    style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                />

                <div className="mt-3">
                    <div
                        className="d-flex justify-content-between align-items-center"
                        style={{ fontSize: '0.9rem', color: '#6c757d' }}
                    >
                        <span>Rating:</span>
                        <div className="d-flex align-items-center">
                            <span style={{ marginRight: '5px', fontWeight: 500 }}>{device.rating}</span>
                            <Image src={lock} alt="lock icon" width={12} height={12} />
                        </div>
                    </div>
                    <h5 className="mt-2 text-center" style={{ fontWeight: 'bold', fontSize: '1rem', color: '#212529' }}>
                        {device.name}
                    </h5>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
