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

$(window).on("load",function() {
    function fade(pageLoad) {
        var windowTop=$(window).scrollTop(), windowBottom=windowTop+$(window).innerHeight();
        var min=0, max=1, threshold=0.00;
        
        $(".fade").each(function() {
            /* Check the location of each desired element */
            var objectHeight=$(this).outerHeight(), objectTop=$(this).offset().top, objectBottom=$(this).offset().top+objectHeight;
            
            /* Fade element in/out based on its visible percentage */
            if (objectTop < windowTop) {
                if (objectBottom > windowTop) {$(this).fadeTo(0,min+((max-min)*((objectBottom-windowTop)/objectHeight)));}
                else if ($(this).css("opacity")>=min+threshold || pageLoad) {$(this).fadeTo(0,min);}
            } 
            else if (objectBottom > windowBottom) {
                if (objectTop < windowBottom) {$(this).fadeTo(0,min+((max-min)*((windowBottom-objectTop)/objectHeight)));}
                else if ($(this).css("opacity")>=min+threshold || pageLoad) {$(this).fadeTo(0,min);}
            } else if ($(this).css("opacity")<=max-threshold || pageLoad) {$(this).fadeTo(0,max);}
        });
    } 
    fade(true); //fade elements on page-load
    $(window).scroll(function(){fade(false);}); //fade elements on scroll
});

var url = 'https://script.google.com/macros/s/AKfycbxsUtN8p6-fCjmWU1Ng9sjvgbPkKg4FcIv5K0h5sNgEat-_11QZcRAdxS28RB8wy_cP/exec'
        
$('#submit').on('click', function(e) {
    e.preventDefault();
    
    var requestcontact = new Object({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        body: document.getElementById('body').value
    });
    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('body').value = '';
    
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: requestcontact
    });
})