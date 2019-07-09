// name of file is given this beczzz we are using json place holder api .
import axios from 'axios';

export default axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
});
