function progressBar() {
    const element = document.documentElement;
    var window = element.scrollTop;
    var height1 = element.scrollHeight;
    var height2 = element.clientHeight;
    var height = height1 - height2;
    var scroll = (window / height) * 100;
    document.getElementById("myBar").style.width = `${scroll}%`;

    console.group("Progress");
    console.log("Window Height", window);
    console.log("Scroll Percent", parseFloat(scroll.toFixed(2)));
    console.groupEnd("Progress");
}

window.addEventListener("scroll", progressBar);
