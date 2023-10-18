import dayjs, { ManipulateType } from 'dayjs';
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

interface UserTokenProps {
  id: string;
}
interface ITokenPayload {
  user: UserTokenProps;
}
interface IVerifyTokenResponse extends jwt.JwtPayload, ITokenPayload { }

const ttlToken = {
  short: '1h',
  long: '20d',
};

export const createToken = ({ id }: UserTokenProps) => {
  const payload: ITokenPayload = {
    user: { id },
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET || '', {
    subject: 'User Token',
    expiresIn: ttlToken.short,
  });

  const expireAt = willExpireAt(ttlToken.short);

  return { token, expireAt };
};

export const verifyToken = (token: string): UserTokenProps => {
  const { user } = jwt.verify(token, process.env.JWT_SECRET || '') as IVerifyTokenResponse;
  return user;
};

export const refreshToken = ({ id }: UserTokenProps) => {
  const payload: ITokenPayload = {
    user: { id },
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET || '', {
    subject: `Refresh token to user id ${id}`,
    expiresIn: ttlToken.long,
  });

  const expireAt = willExpireAt(ttlToken.long);

  return { token, expireAt };
};

const willExpireAt = (timeToExpire: string) => {
  const currentDate = dayjs();
  const { duration, time } = splitTimeAndDuration(timeToExpire);
  const futureDate = currentDate.add(time, duration);
  const futureDateInSeconds = futureDate.unix();

  return futureDateInSeconds;
};

const splitTimeAndDuration = (durationTime: string) => {
  const patternToSplitTimeAndDuration = /(\d+)(\w)/;

  const matchedTime = durationTime.match(patternToSplitTimeAndDuration);

  if (matchedTime && matchedTime.length === 3) {
    const time = +matchedTime[1];
    const duration = matchedTime[2] as ManipulateType;

    return {
      time,
      duration,
    };
  } else {
    throw new Error('Invalid duration format');
  }
};

