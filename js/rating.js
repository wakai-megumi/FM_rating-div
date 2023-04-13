const rating = document.querySelector(".give-rating");

for (var i = 1; i <= 5; i++) {
    const div = document.createElement("div");
    div.className = "star";
    div.textContent = `${i}`;
    div.setAttribute("data-rating", i);
    rating.appendChild(div);
}

const handleclick = () => {
    const start = document.querySelector(".wrapper-start");
    const end = document.querySelector(".hidden");
    end.classList.remove('hidden');
    end.classList.add('wrapper-end-clicked');
    start.classList.remove('wrapper-start');
    start.classList.add('hidden');

    console.log(selectedRating);
    const rate = document.querySelector(".rate");

    rate.innerHTML = selectedRating;


}

// Example usage of handleclick function

const stars = document.querySelectorAll(".star");
let selectedRating = null; // Declare the variable outside the event listener function

stars.forEach(function (star) {
    star.addEventListener("click", function () {
        const value = star.getAttribute("data-rating");
        selectedRating = value;

        star.classList.add("hovered-star");
        const button = document.querySelector(".btn");
        button.classList.add("star-selected");
        console.log(`You clicked on rating ${selectedRating}`);
    });
});
