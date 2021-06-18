// 1.create an instance xml http
var request=new XMLHttpRequest();
// 2.create a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
// 3.send the request
request.send();
// 4.load the response
request.onload=function(){
    var data=JSON.parse(this.response);
    var res=data.forEach((item)=>{
        console.log("Country Name:" + item.name);
        console.log("Capital:" + item.capital);
        console.log("Flag" + item.flag);
    });
}
