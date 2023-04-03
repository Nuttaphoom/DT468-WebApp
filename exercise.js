let tasks = [] ; 

while (1) { 
    _id = prompt("Enter ID") ;
    if (_id == -1) { 
        break ; 
    } 

    _name = prompt("Enter Name");
    _hour = prompt("Enter hour")  ;
    let task = {id:_id, name:_name,hour:_hour} ;
    tasks.push(task) ; 

}
 
for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i]) ; 
  }