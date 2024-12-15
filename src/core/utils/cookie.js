// function setCookie(name, value, days = 30) {
//   const maxAge = days * 24 * 60 * 60;
//   console.log(name);
//   document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
// }
function setCookie(name, value, days) {
  console.log(name);
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const value = `; ${document?.cookie}`;
  const parts = value?.split(`; ${name}=`);
  if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
}

export { setCookie, getCookie };
