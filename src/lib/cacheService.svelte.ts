const CACHE_NAME = 'spa-api-cache-v1';

export async function fetchWithCache(url: string, options={}, ttlInSeconds = 300): Promise<unknown> {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(url);

    if (cachedResponse) {
        const cachedAt = cachedResponse.headers.get('sw-cache-timestamp');
        if (cachedAt && (Date.now() - parseInt(cachedAt, 10) < ttlInSeconds * 1000)) {
            return await cachedResponse.json();
        }
        // Delete expired cache item asynchronously
        cache.delete(url);
    }

    // Cache miss or expired: Fetch fresh data
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Network response failure');

    // Clone response to modify headers and write to cache
    const responseToCache = response.clone();
    const headers = new Headers(responseToCache.headers);
    headers.append('sw-cache-timestamp', Date.now().toString());

    const blob = await responseToCache.blob();
    const customResponse = new Response(blob, {
        status: responseToCache.status,
        statusText: responseToCache.statusText,
        headers: headers
    });

    await cache.put(url, customResponse);
    return await response.json();
}
