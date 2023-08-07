const toggleComponent = document.querySelector(".toggle-component");
const checkbox = toggleComponent.querySelector("input[type='checkbox']");
const prices = document.querySelectorAll("#price");

const monthly = {
  starter: "$19",
  pro: "$99",
};

const annually = {
  starter: "$50",
  pro: "$500",
};

checkbox.addEventListener("click", (e) => {
  if (checkbox.checked) {
    prices[0].innerText = annually.starter;
    prices[1].innerText = annually.pro;
  } else {
    prices[0].innerText = monthly.starter;
    prices[1].innerHTML = `
    <p id="price" class="price">
    ${monthly.pro}<span class="price-monthly">/ month</span>
    </p>`;
  }
});
