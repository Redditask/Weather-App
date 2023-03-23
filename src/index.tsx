import React from 'react';
import ReactDOM from 'react-dom/client';

import {Provider} from "react-redux";
import {store} from "./store";

import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

//ToDo:
// добить App
// //
// ПОВЫСИТЬ ЧИТАЕМОСТЬ КОДА:
// провести декомпозицию компонентов
// функции мб переделать как-то
// что-то в helpers перекинуть (разгрузить код)
// рефакторинг вёрстки
// рефакторинг стилей
// //
// Остальное:
// useTransition для инпута
// тесты добавить (хоть какой-то минимальный набор)
