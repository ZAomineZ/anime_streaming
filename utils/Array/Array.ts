export function chunk<T extends number>(arr: readonly T[], chunkSize: T) {
  let chunked = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunked.push(arr.slice(i, i + chunkSize));
  }

  return chunked;
}
