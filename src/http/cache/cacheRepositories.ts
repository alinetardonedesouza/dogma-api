import { redisClient } from "../../database/cache/redisConfig";

export async function getRedis<T = unknown>(key: string) {
	const getKey = await redisClient.get(key);
	if (getKey) {
		const value: T = JSON.parse(getKey);
		return value;
	}
	return null;
}

export async function setRedis<T = unknown>(key: string, value: T, ttl = 120) {
	const setKey = await redisClient.set(key, JSON.stringify(value), 'EX', ttl);
	return setKey;
}

export async function setExactRedis<T = unknown>(key: string, value: T, unix: number) {
	await redisClient.set(key, JSON.stringify(value));
	await redisClient.expireat(key, unix);
}

export async function deleteRedis(key: string) {
	const deleteKey = await redisClient.del(key);
	return deleteKey;
}
export async function deleteManyRedis(key: string[]) {
	await redisClient.del(key);
}
