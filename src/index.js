import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

let remove = false;

const requestInterceptor = axios.interceptors.request.use(requestConfig => {
	console.log(requestConfig);
	//edytowanie konfiguracji zadania
	return requestConfig;
}, error => { //blad po stronie klienta
	console.log(error);
	return Promise.reject(error);
});

if (remove) axios.interceptors.request.eject(requestInterceptor); // usuwanie interceptora

const responseInterceptor = axios.interceptors.response.use(responseConfig => {
	console.log(responseConfig);
	//edytowanie konfiguracji odpowiedzi
	return responseConfig;
}, error => { //blad po stronie serwera
	console.log(error);
	return Promise.reject(error);
});

if (remove) axios.interceptors.request.eject(responseInterceptor); // usuwanie interceptora


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
