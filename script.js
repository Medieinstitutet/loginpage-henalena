console.log("hello");

const correctUserName = "janne";
const correctPassWord = "test";

//Get elements
const header = document.querySelector("header");
const main = document.querySelector("main");

//Show welcome page in function, please login:
function welcomePage() {

    //Make input field for userName
    const userNameInput = document.createElement("input");
    userNameInput.placeholder = "Username";
    userNameInput.className = "design";

    //Make input field for passWord
    const passWordInput = document.createElement("input");
    passWordInput.placeholder = "Password";
    passWordInput.className = "design";

    //Make button - text login
    const logInBtn = document.createElement("button");
    logInBtn.textContent = "Log in";
    logInBtn.className = "design";

    header.append(userNameInput, passWordInput, logInBtn);

    //h2 - text Please enter your username and password to log in.
    const mainText = document.createElement("h2");
    mainText.textContent = "Please enter your username and password to log in.";
    mainText.id = "mainText"
    main.append(mainText);

    //Click button to go to success page or error page
    logInBtn.addEventListener("click", () => {

        const nameInputValue = userNameInput.value;
        const passWordInputValue = passWordInput.value;

        if (nameInputValue === correctUserName && passWordInputValue === correctPassWord) {
            localStorage.setItem("Username", correctUserName);
            localStorage.setItem("Password", correctPassWord);

            location.reload();
        }
        //if wrong userName and/or passWord - show error page
        //Still show input fields and button
        //Show h2 - text: Wrong username and/or password. Please try again.
        else if (nameInputValue !== correctUserName && passWordInputValue !== correctPassWord) {
            mainText.textContent = "Wrong username and/or password. Please try again.";
        }
    });
}

//Show success page:
//No input fields
function loggedInPage() {

    //Button with text log out
    const logOutBtn = document.createElement("button");
    logOutBtn.textContent = "Log out";

    header.append(logOutBtn);

    //h2 - text: Welcome to my page
    const mainText = document.createElement("h2");
    mainText.textContent = "Welcome to my page!";
    mainText.id = "mainText"
    main.append(mainText);

    //LocalStorage should clear and reload
    logOutBtn.addEventListener("click", ()=> {
        localStorage.clear();
        location.reload();
    });
}

//And if localStorage is clear then go to Welcome page or else stay logged in.
if (localStorage.getItem('Username') === null) {
    welcomePage();
}
else {
    loggedInPage();
}
