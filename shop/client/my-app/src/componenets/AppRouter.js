import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes.js';
import { Context } from '../index.js';
import {LOGIN_ROUTE} from "../utils/const.js";

const AppRouter = () => {
    const { user } = useContext(Context);

    return (
        <Routes>
            {/* Маршруты для авторизованных пользователей */}
            {user.isAuth &&
                authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))
            }

            {/* Маршруты для всех пользователей */}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}

            {/* Перенаправление на /login для всех несуществующих маршрутов */}
            <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />


        </Routes>
    );
};

export default AppRouter;
