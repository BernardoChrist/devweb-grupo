function darkMode() {
  function confirmDarkMode() {
    if ("isDarkMode" in localStorage) {
      if (localStorage.getItem("isDarkMode") == "true") {
        let body = document.getElementsByTagName("body")[0];
        body.setAttribute("class", "bg-dark text-light");
        let nav = document.getElementsByTagName("nav")[0];
        nav.setAttribute(
          "class",
          "navbar navbar-expand-lg navbar-dark bg-black"
        );
        document.getElementById("controle-dark-mode").innerText = "Disable";

        return;
      } else {
        console.log("else");
        let body = document.getElementsByTagName("body")[0];
        body.removeAttribute("class");
        let nav = document.getElementsByTagName("nav")[0];
        nav.setAttribute(
          "class",
          "navbar navbar-expand-lg navbar-dark bg-primary-color"
        );
        document.getElementById("controle-dark-mode").innerText = "Active";
      }
    }
  }

  function setDarkMode() {
    if ("isDarkMode" in localStorage) {
      if (localStorage.getItem("isDarkMode") == "false") {
        let body = document.getElementsByTagName("body")[0];
        body.setAttribute("class", "bg-dark text-light");
        let nav = document.getElementsByTagName("nav")[0];
        nav.setAttribute(
          "class",
          "navbar navbar-expand-lg navbar-dark bg-black"
        );
        document.getElementById("controle-dark-mode").innerText = "Disable";
        localStorage.setItem("isDarkMode", true);
        return;
      } else {
        console.log("else");
        let body = document.getElementsByTagName("body")[0];
        body.removeAttribute("class");
        let nav = document.getElementsByTagName("nav")[0];
        nav.setAttribute(
          "class",
          "navbar navbar-expand-lg navbar-dark bg-primary-color"
        );
        document.getElementById("controle-dark-mode").innerText = "Active";
        localStorage.setItem("isDarkMode", false);
      }
    }
  }
}
export default darkMode;
