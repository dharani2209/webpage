'use strict'
const dbConn = require("./Connection").dbConn
class Tourism {
    place;
    days;
    pack;
    covid_restrictions;
    temperature;
    // the above are optionals
    constructor(id, place, days, pack, covid_restrictions, temperature){
        this.id=id;
        this.place=place;
        this.days=days;
        this.pack=pack;
        this.covid_restrictions=covid_restrictions;
        this.temperature=temperature;
    }

    set Id(id){
        this.id = id;
    }

    get Id(){

        return this.id
    }
    set Days(days){
        this.days = days;
    }
    
    get Days(){
        return this.days
    }

    set Pack(pack){
        this.pack = pack;
    }
    
    get Pack(){
        return this.pack
    }

    set Place(place){
        this.place = place;
    }
    
    get Place(){
        return this.place
    }

    set Covid_restrictions(covid_restrictions){
        this.covid_restrictions = covid_restrictions;
    }
    
    get Covid_restrictions(){
        return this.covid_restrictions
    }

    set Temperature(temperature){
        this.temperature = temperature;
    }
    
    get Temperature(){
        return this.temperature
    }


    update(id,callback){
         dbConn.query("UPDATE tourism SET place=?,days=?,pack=?,covid_restrictions=?,temperature=? WHERE id = ?", [this.place,this.days,this.pack ,this.covid_restrictions,this.temperature, id], function (err, res) {
                  if(err)
                  { 
                     console.log("error: ", err);
                      callback(null, err);
                  }
                  else{
                      console.log("success", res);
                    callback(null, res);
                  }
                      }); 
          };
    findAll(result) {
            dbConn.query("Select * from tourism", function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    console.log('tourism : ', res);  
                    result(null, res);
                }
            });   
        };
    
    findById(id, result) {
            dbConn.query("Select * from tourism where id = ? ", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });   
        };
    create(callback){
            dbConn.query("insert into tourism (`place`,`days`,`pack`,`covid_restrictions`,`temperature`) values(?,?,?,?,?);", [this.place,this.days,this.pack ,this.covid_restrictions,this.temperature], function (err, res) {
                  if(err)
                  {
                      console.log("error: ", err);
                      callback(null, err);
                  }
                  else
                      callback(null, res);

              }); 
          };

     delete(id, result){
            dbConn.query("DELETE FROM tourism WHERE id = ?", [id], function (err, res) {
               if(err) {
                   console.log("error: ", err);
                   result(null, err);
               }
               else{
                   result(null, res);
               }
           }); 
        };      
    
}
module.exports.Tourism = Tourism










