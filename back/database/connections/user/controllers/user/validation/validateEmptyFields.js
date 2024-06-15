export const validateEmptyFields = (obj, fields) => {
    const errorList = [];
    fields.forEach(field => {
        if (!obj.hasOwnProperty(field) || JSON.stringify(obj[field]) === '""') {
            errorList.push(`Field ${field} is empty`);
        }
    });

    return errorList;
}