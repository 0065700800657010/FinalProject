// JavaScript source code
var name="";
var coin = 1000000;
var i;
function renew()
{
    coin = localStorage.getItem("00657008.10-coin");
    document.getElementById("Coin").innerHTML = "$" + coin;
}
function start()
{
    console.log(name);
    if (localStorage.getItem("00657008.10-name")!=null)
        name = localStorage.getItem("00657008.10-name");
    if (localStorage.getItem("00657008.10-coin")!=null)
        coin = localStorage.getItem("00657008.10-coin");
    if(name==""){        
        prompt1();              
        while(name==""){
            window.alert("請輸入名字");
            prompt1();
        }            
    }
    if (name == "null")
    name = "nobody";
    var length = localStorage.length;
    var sub;
    var exisit = 0;
    var name;
    for (var i = 0; i < length; ++i)
    {
        var tmp = localStorage.key(i);
        var n = tmp.startsWith("00657008.10-")
        if (n == true)
        {
            sub = tmp.substring(12);
            //console.log(sub);
            if (sub == "name")
            {
                name = localStorage.getItem("00657008.10-name");
                exisit++;
            }
            else if (sub == "coin")
            {
                coin = localStorage.getItem("00657008.10-coin");
                 exisit++;
            }
        }
    }
    //console.log(exisit);
    if (exisit == 2)
    {
        document.getElementById("Hello").innerHTML = "Hello," + name + ":";
        document.getElementById("Coin").innerHTML = "$" + coin;
        document.getElementById("End").addEventListener("click", endgame, false);
        i = setInterval("renew()", 1);
    }
    else
    {
        window.alert("請回首頁輸入名字！！！");
        document.location.href = "index.html";
    }
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