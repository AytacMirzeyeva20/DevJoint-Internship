const form = document.getElementById("form");
const successMessage = document.getElementById("form-success");

const gmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fields = {
    name: {
        input: document.getElementById("name"),
        error: document.getElementById("name-error"),
        validate: function (value) {
            if (value.trim() === "") {
                return "Please enter your name";
            }
            return "";
        }
    },
    gmail: {
        input: document.getElementById("gmail"),
        error: document.getElementById("gmail-error"),
        validate: function (value) {
            if (value.trim() === "") {
                return "Please enter your email";
            }
            if (!gmailRegex.test(value)) {
                return "Please enter a valid email";
            }
            return "";
        }
    },
    message: {
        input: document.getElementById("message"),
        error: document.getElementById("message-error"),
        validate: function (value) {
            if (value.trim() === "") {
                return "Enter message";
            }
            return "";
        }
    }
};

function showError(field, message) {
    field.error.textContent = message;
}

function clearError(field) {
    field.error.textContent = "";
}

Object.values(fields).forEach(function (field) {
    field.input.addEventListener("input", function () {
        const message = field.validate(field.input.value);
        if (message === "") {
            clearError(field);
        }
    });
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    successMessage.textContent = "";

    let isValid = true;

    Object.values(fields).forEach(function (field) {
        const message = field.validate(field.input.value);
        if (message) {
            showError(field, message);
            isValid = false;
        } else {
            clearError(field);
        }
    });

    if (!isValid) {
        return;
    }

    const name = fields.name.input.value;
    const gmail = fields.gmail.input.value;
    const subject = document.getElementById("subject").value;
    const message = fields.message.input.value;

    console.log("Name", name);
    console.log("Gmail", gmail);
    console.log("Subject", subject);
    console.log("Message", message);

    successMessage.textContent = "Message sent successfully!";
    form.reset();
});
