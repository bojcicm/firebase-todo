var database = firebase.database();
var ToDos = database.ref('ToDo/')
  .on('value', function(snapshot){
    console.log(snapshot.val());
  });