export const getCookie = (cookiename, cookie) => {
  const cookiestring=RegExp(cookiename+"=[^;]+").exec(cookie);
  return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}