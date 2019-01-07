// JavaScript source code
var name="";
var coin = 1000000;
var i;
function renew()
{
    if (localStorage.getItem("00657008.10-coin") != null)
    {
    coin = localStorage.getItem("00657008.10-coin");
    document.getElementById("Coin").innerHTML = "$" + coin;
    }
}
function start()
{
    //console.log(name);
    if (localStorage.getItem("00657008.10-name")!=null)
        name = localStorage.getItem("00657008.10-name");
    if (localStorage.getItem("00657008.10-coin")!=null)
        coin = localStorage.getItem("00657008.10-coin");
    if (name == "")
    {
        prompt1();
        while (name == "") {
            window.alert("請輸入名字");
            prompt1();
        }
    }
    if (name == "null")
        name = "nobody";
    localStorage.setItem("00657008.10-name", name);
    localStorage.setItem("00657008.10-coin", coin);
    document.getElementById("Hello").innerHTML = "Hello," + name + ":";
    document.getElementById("Coin").innerHTML = "$" + coin;
    document.getElementById("End").addEventListener("click", endgame, false);
    i = setInterval("renew()", 1);
}
function endgame()
{
    localStorage.clear();
    window.alert("Thanks!");
    window.close();
}
function prompt1()
{    
    name=window.prompt("Please enter your name.");     
}
window.addEventListener("load",start,false);