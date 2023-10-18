import { NextFunction, Request, Response } from 'express';
import AppError from '@shared/errors/AppError';
import { verifyToken } from '@shared/utils/jwt';

export default function isAuthenticated(
	request: Request,
	response: Response,
	next: NextFunction
): void {
	const authHeader = request.headers.authorization;

	if (!authHeader) {
		throw new AppError('JWT Token is missing.', 401);
	}

	const [, token] = authHeader.split(/\s+/);

	try {
		const { id, profile } = verifyToken(token);

		request.user = {
			id,
			profile,
		};

		return next();
	} catch {
		throw new AppError('Invalid JWT Token', 401);
	}
}
