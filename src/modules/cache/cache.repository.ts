import * as cache from '../../http/cache/cacheRepositories'

export class CacheRepository {
    async setUserToCache(userId: string): Promise<void> {
        const oneDayInSeconds = 60 * 60 * 24;
        const cacheKey = `user-${userId}`;
        await cache.setRedis(cacheKey, userId, oneDayInSeconds);
    }
    
    async getUserFromCache(userId: string) {
        const cacheKey = `user-${userId}`;
        const user = await cache.getRedis(cacheKey);
        return user;
    }
    
    async removeUserFromCache(userId: string): Promise<void> {
        const cacheKey = `user-${userId}`;
        await cache.deleteRedis(cacheKey);
    }
}