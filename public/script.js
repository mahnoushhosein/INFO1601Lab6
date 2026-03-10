let obj2 = myobj;

//obj2 and myobj are the same variable

obj2.name = "Shelly";

console.log(myobj.name);//Shelly

//if you need to create a new object and copy its values use Object.assign

let obj3 = {};
Object.assign(obj3, myobj);

obj3.name = 'Smith';

console.log(myobj.name, obj3.name);//Shelly, Smith

//function MUST be declared async
async function getData(url){
   try{
     let response = await fetch(url);//1. Send http request and get response
     let result = await response.json();//2. Get data from response
     drawTable(result);// 3. Do something with the data
  }catch(e){
      console.log(e);//catch and log any errors
  }
}
getData("https://api.openbrewerydb.org/breweries/search?query=harry")
