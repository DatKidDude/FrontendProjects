const slidesContainer = document.querySelector(".slides-container");
const star = document.querySelector(".star");

// fetch JSON data
async function getUserData() {
  const response = await fetch("users.json");
  const data = await response.json();

  return data;
}

try {
  const userData = await getUserData();
  createCardComponent(userData);
} catch (err) {
  console.log(err.message);
}

// create a card component
function createCardComponent(obj) {
  const { users } = obj;

  // map JSON data to card component
  users.map((user) => {
    slidesContainer.innerHTML += `
    <li class="slide">
      <article class="slide-article">
      <div class="user-rating">
        <div class="star">
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="star">
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="star">
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="star">
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="star">
          <i class="fa-solid fa-star"></i>
        </div>
      </div>
      <article class="user-comment">
        <h3>${user.title}</h3>
        <p>
          ${user.comment}
        </p>
      </article>
      <footer class="user-profile">
        <img
          src="https://source.unsplash.com/${user.imageUrl}"
          class="user-img"
          alt="${user.username}"
        />
        <div class="user-info">
          <p class="user-name">${user.username}</p>
          <p class="user-role">${user.role}</p>
        </div>
      </footer>
    </article>
  </li>
    `;
  });
}

// add carousel functionality
