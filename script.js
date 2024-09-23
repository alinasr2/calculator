res = document.querySelector(".display");
function add(val){
    res.innerHTML+=val;
}
function de() {
    res.innerHTML = res.innerHTML.slice(0, -1);
}
function removeAll(){
    res.innerHTML = ""
}
function equal(){
    res.innerHTML = eval(res.innerHTML)
}