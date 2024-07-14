export class AppError extends Error {
  constructor(message, statuscode) {
    super(message);
    this.statusCode = statuscode;
  }
}
