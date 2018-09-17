export const isSupported: boolean = (() => {
    const mod = 'localStorage-tester';
    try {
        localStorage.setItem(mod, mod);
        localStorage.removeItem(mod);
        return true;
    } catch(e) {
        return false;
    }
})();

export function hasItem(key: string): boolean {
    return localStorage.getItem(key) !== null
}