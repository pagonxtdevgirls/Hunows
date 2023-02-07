export function errorHandler (err, req, res, next){
    err.statusCode = err.statusCode ?? 500
    console.error(err);
    const {message, statusCode} = err
    return res.status(err.statusCode).json({message, statusCode})
}