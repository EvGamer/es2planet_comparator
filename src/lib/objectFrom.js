export function objectFrom(list, getKey) {
  const result = {};

  for (const item of list) {
    result[getKey(item)] = item;
  }

  return result;
}
