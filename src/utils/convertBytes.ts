export const convertBytes = (bytes: number): string =>{
    if (bytes === 0) return '0 Byte';
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const convertedSize = parseFloat((bytes / Math.pow(1024, i)).toFixed(2));
    return `${convertedSize} ${sizes[i]}`;
}