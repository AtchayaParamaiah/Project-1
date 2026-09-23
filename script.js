var btn = document.querySelector(".btn")

var nameInt = document.querySelector(".nameInt")
var emailInt = document.querySelector(".emailInt")
var passInt = document.querySelector(".passInt")

var nameError = document.querySelector(".nameError")
var emailError = document.querySelector(".emailError")
var passError = document.querySelector(".passError")

var rating = document.querySelector(".rating")

var registration = document.getElementById("registration")
var confetti = document.getElementById("confetti")


var validate = true





// Let's check the input validate or not

function check() {



    // checking for name
    const name = /^[a-z A-z]+$/
    if (name.test(nameInt.value) == false) {
        nameError.style.display = "block"
        validate = false
    }
    else {
        nameError.style.display = "none"
        validate = true
        console.log("true")
    }

    // checking for email
    const email = /^[a-z A-Z 0-9]+@gmail\.com$/
    if (email.test(emailInt.value) == false) {
        emailError.style.display = "block"
        validate = false
    }
    else {
        emailError.style.display = "none"
        validate = true
        console.log("true")
    }

    // checking for password
    const password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;
    if (password.test(passInt.value) == false) {
        passError.style.display = "block"
        rating.innerHTML = ""
        validate = false
    }
    else {
        passError.style.display = "none"
        validate = true
        console.log("true")

        // subdivision for password checking rating
        if (passInt.value.length < 8) {
            passError.style.display = "none"
            rating.innerHTML = '<span style="color:red;">★</span>Weak';
            rating.style.color = "red"
        }
        else if (passInt.value.length < 12) {
            passError.style.display = "none"
            rating.innerHTML = '<span style="color:orange;">★★</span>Medium';
            rating.style.color = "orange"
        }
        else {
            passError.style.display = "none"
            rating.innerHTML = '<span style="color:yellow;">★★★</span>Strong';
            rating.style.color = "yellow"
        }

    }

    btn.disabled = !validate;


}

// Take check into the event

nameInt.addEventListener("input", check)
emailInt.addEventListener("input", check)
passInt.addEventListener("input", check)

registration.addEventListener("submit", function (event) {
    event.preventDefault()
    check()

    if (!btn.disabled) {
        alert("Form submitted successfully!")
        party()
    }

})

function party() {
    const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti-piece");
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.animationDuration = (Math.random() * 2 + 1) + "s";
        document.getElementById("confetti").appendChild(confetti);

        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}
