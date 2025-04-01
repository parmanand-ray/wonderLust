// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//filter btns
function scrollLeftBtn() {
  const filterBar = document.getElementById("filterBar");
  filterBar.scrollBy({ left: -200, behavior: "smooth" });
}

function scrollRightBtn() {
  const filterBar = document.getElementById("filterBar");
  filterBar.scrollBy({ left: 200, behavior: "smooth" });
}
//filter active

let filterItems = document.querySelectorAll(".filter-item");
filterItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Remove the 'active' class from all items
    filterItems.forEach((el) => el.classList.remove("active "));
    // Add the 'active' class to the clicked item
    this.classList.add("active");
  });
});
