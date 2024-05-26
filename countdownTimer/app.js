const enddate = "26 may 2024 03:31pm"
document.getElementById("endDate").innerText = enddate
const inputs = document.querySelectorAll("input")
const clock = function(){
    const end = new Date(enddate)
    const now = new Date()
    // console.log(end,now);.
    const diff =( end - now )/1000
    if(diff < 0) {

        return ;
    }

    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff/3600)%24;
    inputs[2].value = Math.floor(diff/60)%60;
    inputs[3].value = Math.floor(diff)%60;


}
clock()
setInterval(() => {
    clock()
},1000);