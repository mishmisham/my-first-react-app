export const validateEmptyFields = (obj, fields) => {
    const errorList = [];
    fields.forEach(field => {
        if (!(field in obj) || JSON.stringify(obj[field]) === '""') {
            errorList.push(`Field ${field} is empty`);
        }
    });

    return errorList;
}