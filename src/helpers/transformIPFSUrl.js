export function transformIPFSUrl(originalUrl) {
  const prefix = "ipfs://";
  const prefixReplacement = "https://ipfs.io/ipfs/";

  if (originalUrl.startsWith(prefix)) {
    const hashAndPath = originalUrl.slice(prefix.length);
    const transformedUrl = prefixReplacement + hashAndPath;
    return transformedUrl;
  } else {
    console.error('Invalid URL format. URL should start with "ipfs://".');
    return originalUrl;
  }
}
