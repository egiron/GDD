
// Helper functions for vanilla JS cookie interaction
function getCookie(name: string): string | null {
    const nameEQ = name + "=";
    if (typeof window !== 'undefined') {
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            const c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function setCookie(name: string, value: string, days = 7) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    // path=/ ensures it is accessible across the SPA
    if (typeof window !== 'undefined') {
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; SameSite=Lax; Secure`;
    }
}

// Svelte 5 Reactive Class
export class CookieState<T> {
    #key: string;
    #value = $state() as T;

    constructor(key: string, defaultValue: T) {
        this.#key = key;
        const saved = getCookie(key);

        if (saved !== null) {
            try {
                this.#value = JSON.parse(decodeURIComponent(saved));
            } catch {
                this.#value = saved as unknown as T;
            }
        } else {
            this.#value = defaultValue;
        }
    }

    get value(): T {
        return this.#value;
    }

    set value(newValue: T) {
        this.#value = newValue;
        const stringified = typeof newValue === 'object'
            ? encodeURIComponent(JSON.stringify(newValue))
            : String(newValue);
        setCookie(this.#key, stringified);
    }
}


