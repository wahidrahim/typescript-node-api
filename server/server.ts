import {findAllCourses} from "./queries/findAllCourses";

import * as express from 'express';
import {Application} from 'express';

const app: Application = express();

app.route('/api/courses').get((req, res) => {
    res.status(200).json({
        'message': 'hello'
    });
});

app.listen(8090, () => {
    console.log('Server is running on port 8090')
});

// findAllCourses().then(results => console.log(JSON.stringify(results)));
