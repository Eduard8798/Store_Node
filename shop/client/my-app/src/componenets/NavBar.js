import React, { useContext } from 'react';
import { Context } from "../index.js";
import { Container, Nav, Navbar, Button } from 'react-bootstrap'; // Импорт кнопок
import { NavLink } from 'react-router-dom';
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/const.js";
import { observer } from 'mobx-react'; // Импорт observer для mobx
import { useNavigate} from 'react-router-dom';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');  // Очистите токен из localStorage, чтобы выйти из системы

        navigate(LOGIN_ROUTE);  // Перенаправляем на страницу авторизации (или на главную)
    }

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>Купи Девайс</NavLink>
                    {user.isAuth ? (
                        <Nav className="ms-auto" style={{ color: 'white' }}>
                            <Button variant="outline-light"
                                    onClick={() => {
                                        
                                        logOut()
                                    }}

                            >Вийти</Button>
                            <Button variant="outline-light" className="ms-4"
                                    onClick={() => {

                                        navigate(ADMIN_ROUTE)
                                    }}
                            >Адмін панель</Button> {/* Изменен ml-4 на ms-4 */}
                        </Nav>
                    ) : (
                        <Nav className="ms-auto" style={{ color: 'white' }}>
                            <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>Авторизація</Button>
                        </Nav>
                    )}
                </Container>
            </Navbar>
        </>
    );
});

export default NavBar;
