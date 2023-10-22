import { ErrorCodes } from "~/constants/error-codes";

export class HTTPException {
  error?: string;
  message?: string;
  status_code?: number;
  error_code?: string;
  timestamp?: Date;
  path?: string;

  constructor(exception: IHTTPException) {
    this.error = exception.error;
    this.message = exception.message || "No message available";
    this.status_code = exception.status_code || 400;
    this.error_code = exception.error_code || ErrorCodes.NO_ERROR_CODE;
    this.timestamp = new Date();
    this.path = exception.path || "No path available";
  }
}

export interface IHTTPException {
  error?: string;
  message?: string;
  status_code?: number;
  error_code?: string;
  timestamp?: Date;
  path?: string;
}
