function createTaskHtml(name, description, assignment, dueDate, status) {
    const html = `
   
         <div class="card col-12">
           <div class="card-body">
             <h5 class="card-title">${name}</h5>
             <p>${description}</p>
               <div class="nameDate">
                 <small>Assigned to ${assignment}</small>
                 <small>${dueDate}</small>
               </div>
           
             <button type="button" id="delete" class="btn btn-primary btn-danger btn-sm">Delete</button>
             <button type="button" id="done-btn" class="btn btn-primary btn-success btn-sm">Done</button>
           </div>
         </div>
  `;
    return html;
    
    document.querySelector("#todo").innerHTML = html;
  }
  
  class taskManager {
    constructor(tasks, currentId) {
      this.tasks = [];
      this.currentId = 0;
    }
  
    addTask(name, description, assignedTo, dueDate, status) {
      this.currentId++;
      
      const task = {
        id: this.currentId,
        name: name,
        description: description,
        assignedTo: assignedTo,
        dueDate: dueDate,
        status: status,
      };
      this.tasks.push(task);
    }
    render() {
      const tasksHtmlList = [];
      for (let i = 0; i < this.tasks.length; i++) {
        const current = this.tasks[i];
        const date = new Date(current.dueDate);
        const formattedDate =
           (date.getMonth() +1) + "/" + (date.getDate() + 1) + "/" + date.getFullYear();
        const taskHtml = createTaskHtml(
          current.name,
          current.description,
          current.assignedTo,
          formattedDate,
          current.status
        );
        tasksHtmlList.push(taskHtml);
      }
  
      const tasksHtml = tasksHtmlList.join("\n");
  
      const taskCard = document.querySelector("#task-cards");
      taskCard.innerHTML = tasksHtml;
    }
  }