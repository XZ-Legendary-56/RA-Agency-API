import { ApiError } from '../error/ApiError.js';

export const errorMiddlware = (error, req, res, next) => {
  console.log('Error:', error);
  if (error instanceof ApiError) {
    return res.status(error.status).json({ message: error.message, errors: error.errors });
  }

  return res.status(500).json({ message: 'Непредвиденная ошибка' });
};
