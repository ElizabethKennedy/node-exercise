import query from "../db/utils";

const findAll = async () => {
    return query("SELECT EmployeeID, FirstName, LastName, EmailAddress Title FROM employees"
    );
};

const findOne = async (EmployeeID) => {
    return await query(
       "SELECT EmployeeID, FirstName, LastName, EmailAddress, Title FROM employees WHERE EmployeeID = ?"         
    )
};

const addOne = async (newEmployee) => {
    return await query("INSERT INTO employees SET ?", [newEmployee]);

};

const updateOne = async (updateEmployee, EmployeeID) => {
    return await query("UPDATE employees SET ? WHERE EmployeeID = ?", 
    [
        updatedEmployee,
        EmployeeID,

    ]);
};

const removeOne = async (EmployeeID) => {
    return await query("DELETE FROM employees WHERE EmployeeID = ?",
    [
        EmployeeID,
    ]);
};



