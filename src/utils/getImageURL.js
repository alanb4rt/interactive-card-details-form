export function getImageURL(path) {
    return new URL(`../assets/images/${path}`, import.meta.url).href
}
