function myFunction(){
    let input, filter, ul, li, a, i, textValue;

    input = document.getElementById("myInput")
    filter = input.value.toUpperCase()
    ul = document.getElementById("myUl")
    li = ul.getElementsByTagName("li")

    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText

        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = ""
        } else {
            li[i].style.display = "none"
        }
    }
}

document.getElementById("myInput").addEventListener("keyup", myFunction)