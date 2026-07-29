 const navbutton = document.getElementById("dropmenu");
 const navlist = document.getElementById("list");

 navbutton.addEventListener("click", () => {
    navlist.classList.toggle("show");
});
 
 
 var typed = new Typed('#element', {
            strings: [
                "Web Developer",
                "Building Responsive Websites",
                "Learning Full Stack Development"],
            typeSpeed: 80,
        });
