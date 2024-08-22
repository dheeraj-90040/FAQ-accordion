const dropdown = document.querySelectorAll(".ans");
const icons = document.querySelectorAll(".Plus_Icon");

// For multiple things we need to use Nested Loop !
for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function () {
    // Loop through all dropdowns and icons to reset them
    // Loop throght all Dropdowns expect clicked make all as minus and hidden .
    for (let j = 0; j < dropdown.length; j++) {
      if (j !== i) {
        icons[j].src = "./assets/images/icon-plus.svg";
        dropdown[j].classList.add("hidden");
      }
    }

    // Toggle the clicked dropdown and icon
    if (dropdown[i].classList.contains("hidden")) {
      icons[i].src = "./assets/images/icon-minus.svg";
      dropdown[i].classList.remove("hidden");
    } else {
      icons[i].src = "./assets/images/icon-plus.svg";
      dropdown[i].classList.add("hidden");
    }
  });
}
