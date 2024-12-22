export const textShortener = (text: string) => {
  const res = text.slice(0, 36);
  return res;
};
