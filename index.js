exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('¡Hola desde Lambda en JavaScript!'),
    };
    return response;
};