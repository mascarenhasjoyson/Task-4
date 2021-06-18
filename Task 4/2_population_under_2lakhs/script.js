// 1.create an instance xml http
var request=new XMLHttpRequest();
// 2.create a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
// 3.send the request
request.send();
// 4.load the response
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log("All the countries with a population of less than 2 lacs:");
    var res=data.filter((item)=>{
        if(item.population < 200000){
            console.log(item.name);
        }
    });
}
