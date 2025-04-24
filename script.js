let button = document.getElementById("button");

button.addEventListener("click", (e) => {
    e.preventDefault(); // This stops the form from submitting
});

button.addEventListener("click", () => {
    let useName = document.getElementById("fname").value;
    let greet = document.getElementsByTagName("h1")[0]; 
    let section1 = document.getElementById("greeting");
    let form = document.getElementsByClassName("theForm")[0];
    let paragraph = document.getElementsByTagName("p")[0];

    greet.textContent = "HEY THERE, " + useName.toUpperCase();
    greet.style.fontSize = "2rem";
    section1.style.backgroundColor = "#A3C3D9";
    paragraph.textContent = "It’s so nice to meet you! I’m truly glad you’re here✨."

    form.remove();

    let image = document.getElementsByTagName("img")[0];
    image.setAttribute("src", "https://images.pexels.com/photos/7653977/pexels-photo-7653977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  });
