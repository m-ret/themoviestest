import axios from 'axios';
import { API } from '../constants';

const client = axios.create({ baseURL: API });

export default client;
