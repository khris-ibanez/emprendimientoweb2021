/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const targetDiv = document.getElementById("myLink");
        const btn = document.getElementById("toggle");
        btn.onclick = function () {
          if (targetDiv.style.display !== "none") {
            targetDiv.style.display = "none";
          } else {
            targetDiv.style.display = "block";
          }
        };