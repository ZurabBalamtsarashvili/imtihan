export default function createImageUrl(path) {
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
}
