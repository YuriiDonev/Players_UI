
// check is passed string is valid url
export const isValidUrl = (url) => {
  const reg = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
  return reg.test(url);
}
