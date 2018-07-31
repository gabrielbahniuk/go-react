export const substr = (title, maxLength = 15) =>
    title.length <= maxLength ? title : `${title.substring(0, maxLength)}...`;
