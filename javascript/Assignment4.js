var area = document.getElementById("area");
console.log(area)
area.addEventListener("change", function() {
    if (area.value == "show1") {
        document.getElementById('section2').style.display = 'none'
        document.getElementById('section1').style.display = 'block'
    } else if (area.value == "show2") {
        document.getElementById('section1').style.display = 'none'
        document.getElementById('section2').style.display = 'block'
    } else {
        document.getElementById('section1').style.display = 'none'
        document.getElementById('section2').style.display = 'none'
    }
});