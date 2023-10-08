
export function formateText(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const replaceText = text.replace(urlRegex, function (url) {
    return `<a style={{color:"brown"}} href='${url}'>#${url}</a>`;
  });
  return replaceText;
}
