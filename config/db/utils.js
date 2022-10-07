import connection from "./index";

/*@param {string} qryStr
@param{Array  |  any} values
@returns the results of a sql query 
*/

const query = (qryStr, values) => {
    return new Promise((resolve, reject) => {
        connection.query(qryStr, values, (err, results) => {
            if (err) {
                reject(err);
            }else {
                resolve(results);
            }
        });
    });

};

export default query;