import React, {useContext, useState} from 'react';
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/const.js";
import { login, registration } from "../http/userAPI.js";
import {observer} from "mobx-react";
import {Context} from "../index.js";

const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                // Для входа
                data = await login(email, password);

            } else {

                data = await registration(email, password);

            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE);
        } catch (error) {
            console.error("помилка при аутифікації:", error);
            alert(error.response.data.message);
        }
    };


    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизація' : 'Реєстрація'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Row className="d-flex justify-content-between align-items-center mt-3">
                        {isLogin ?
                            <div>
                                Немає акаунту?{' '}
                                <NavLink to={REGISTRATION_ROUTE}>Зареєструватись</NavLink>
                            </div>
                            :
                            <div>
                                Є акаунт? <NavLink to={LOGIN_ROUTE}>Війти</NavLink>
                            </div>
                        }
                        <Col className="text-end">
                            <Button variant="outline-success" onClick={click}>
                                {isLogin ? 'Війти' : 'Реєстрація'}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
