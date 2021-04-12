/* Javascript for index.html */

function BackToBeginning() { 
    window.scrollTo(0, 0);
}

function ToAbout() {
    document.getElementById("about").scrollIntoView();
}

function ToProjects() {
    document.getElementById("projects").scrollIntoView();
}

function ToResume() {
    document.location.href = "https://joshua-who-now.github.io/resume";
}

function ToContact() {
    document.getElementById("contact").scrollIntoView();
}

function ToLinkedIn(){
    window.open("https://www.linkedin.com/in/joshua-yuen/",'_blank');
}

function ToGithub(){
    window.open("https://github.com/joshua-who-now",'_blank');
}
