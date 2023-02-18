function handlePageLoad (){
    if(!localStorage.length){
        console.log("empty")
    }else {
        Object.keys(localStorage).forEach(function(key){
         createTask(localStorage.getItem(key))
        });
    }
}
//select elemnts for add task event functionality
let addBtn = $("#add-task");
let list = $("#list");
    list.addClass("list")

//Add task event
addBtn.on("click", handleClick)
function handleClick () {
  let  taskName = $("#task-name").val()
  localStorage.setItem(`${taskName}`, taskName);
  createTask(taskName);
}

//utility function for creating tasks
function createTask (name) {
    let taskName = name;
    let task = $("<div>");
    let content = $("<div>")
        task.addClass("task")
        content.html(`${taskName}`)
    let del = $("<button>");
        del.html("X")
        del.css("backgroundColor", "#d32f2f")
        del.on("click", function (){
            let deleted = $(this).parent().children()[0].innerHTML
            localStorage.removeItem(`${deleted}`)
            $(this).parent().css("display", "none")
        })
    let complete = $("<button>");
        complete.html("Complete")

        complete.css("backgroundColor", "#4BB543")
        complete.on("click", function (){
            localStorage.setItem(`Complete - ${name}` , `Complete - ${name}`)
            localStorage.removeItem(`${name}`)
            $(this).parent().css("backgroundColor", "rgba(157, 255, 166, 0.5)")
            $(this).parent().children()[0].style.textDecoration = "line-through"
        })
 task.append(content);
 task.append(complete);  
 task.append(del);
 list.append(task);     


 if(complete.parent().children()[0].innerHTML.includes("Complete")) {
            complete.parent().css("backgroundColor", "rgba(157, 255, 166, 0.5)")
        }
}