exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('¡Hola nio!'),
    };
    return response;
};