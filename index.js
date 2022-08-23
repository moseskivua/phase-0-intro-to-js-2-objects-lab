// Write your solution in this file!
const employee= {
    name: "Keisha",
    streetName: "Muthurwa",
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const updatedDetails= {...employee};
    updatedDetails[key]=value;
    return updatedDetails;
}
 const updatedDetails= updateEmployeeWithKeyAndValue(
    employee, 
    "phonenumber",
    "0987",
);

function destructivelyUpdateEmployeeWithKeyAndValue (employeee, key, value) {
    employee[key]=value;
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "placeOfBirth",
    "Muthurwa",
);

function deleteFromEmployeeByKey(employee, key) {
    const newDetails={...employee};
    delete newDetails[key];
    return newDetails;
}
deleteFromEmployeeByKey(
    employee,
    "placeOfBirth",
);
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
    
}

destructivelyDeleteFromEmployeeByKey(
    employee,
    "streetName",
);