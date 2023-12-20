export function transformIPFSUrl(originalUrl) {
  const prefix = "ipfs://";
  const prefixReplacement = "https://ipfs.io/ipfs/";
  if (!originalUrl) {
    return originalUrl;
  }
  if (originalUrl.startsWith(prefix)) {
    const hashAndPath = originalUrl.slice(prefix.length);
    const transformedUrl = prefixReplacement + hashAndPath;
    return transformedUrl;
  } else {
    return originalUrl;
  }
}
