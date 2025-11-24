// Main validation function called on form submit
function validateForm() {
    // 1. Clear any previous error messages
    clearErrors();

    let isValid = true; // A flag to track overall form validity

    // --- Field 1: First Name Validation ---
    const fname = document.getElementById("fname").value;
    const fnameErr = document.getElementById("fnameErr");
    // Regex for only alphabets (A-Z, a-z)
    const nameRegex = /^[A-Za-z]+$/;

    if (fname === "") {
        fnameErr.innerHTML = "First Name is required.";
        isValid = false;
    } else if (!nameRegex.test(fname)) {
        fnameErr.innerHTML = "First Name should contain alphabets only.";
        isValid = false;
    } else if (fname.length < 6) {
        fnameErr.innerHTML = "First Name length should not be less than 6 characters.";
        isValid = false;
    }

    // --- Field 5(a): Last Name Validation ---
    const lname = document.getElementById("lname").value;
    const lnameErr = document.getElementById("lnameErr");

    if (lname === "") {
        lnameErr.innerHTML = "Last Name is required.";
        isValid = false;
    }

    // --- Field 3: E-mail id Validation ---
    const email = document.getElementById("email").value;
    const emailErr = document.getElementById("emailErr");
    // Standard regex for email validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === "") {
        emailErr.innerHTML = "Email is required.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailErr.innerHTML = "Invalid Email format. Should be name@domain.com.";
        isValid = false;
    }

    // --- Field 2: Password Validation ---
    const password = document.getElementById("password").value;
    const passwordErr = document.getElementById("passwordErr");

    if (password === "") {
        passwordErr.innerHTML = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        passwordErr.innerHTML = "Password should not be less than 6 characters length.";
        isValid = false;
    }

    // --- Field 5(b): Address Validation ---
    const address = document.getElementById("address").value;
    const addressErr = document.getElementById("addressErr");

    if (address === "") {
        addressErr.innerHTML = "Address is required.";
        isValid = false;
    }

    // --- Field 4: Mobile Number Validation ---
    const mobile = document.getElementById("mobile").value;
    const mobileErr = document.getElementById("mobileErr");
    // Regex for exactly 10 digits
    const mobileRegex = /^\d{10}$/;

    if (mobile === "") {
        mobileErr.innerHTML = "Mobile Number is required.";
        isValid = false;
    } else if (!mobileRegex.test(mobile)) {
        mobileErr.innerHTML = "Mobile Number should contain 10 digits only.";
        isValid = false;
    }

    // If isValid is still true, the form will submit. Otherwise, it won't.
    return isValid;
}

// Helper function to clear all error messages before re-validating
function clearErrors() {
    const errors = document.getElementsByClassName("error");
    for (let i = 0; i < errors.length; i++) {
        errors[i].innerHTML = "";
    }
}