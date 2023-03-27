// Get HTML elements
const registrationForm = document.querySelector("#registration-form");
const studentList = document.querySelector("#student-list");

// Add event listener for form submission
registrationForm.addEventListener("submit", function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get form data
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const course = document.querySelector("#course").value;

    // Create list item with form data
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${name}</strong> (${email}) - ${course}`;

    // Add list item to student list
    studentList.appendChild(listItem);

    // Reset form
    registrationForm.reset();
});
