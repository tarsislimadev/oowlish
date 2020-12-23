
export function getQueryParamFromLocation(location) {
  const params = new URLSearchParams(location);
  const pairs = [...params.entries()];
  return pairs.reduce((query, pair) => {
    return { ...query, ...{ [pair[0]]: pair[1] } };
  }, {});
}
