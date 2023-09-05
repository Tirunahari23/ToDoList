
function add(){
      const input = document.querySelector("#Input");
    
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.innerHTML = input.value;
        ul.appendChild(li);
        input.value="";
        var edit = document.createElement("button");
        edit.className = "edit";
        edit.textContent = "edit";
        li.appendChild(edit);
        var delete1 =document.createElement("button");
        delete1.className="delete";
        delete1.textContent="delete";
        li.className="li-styles"
        li.appendChild(delete1);
     
        delete1.addEventListener('click',()=>{
            li.remove();
        })
        

       edit.addEventListener('click', () => {
        var newText = prompt("Edit text:", li);
         if (newText !== null) {
           li.innerHTML = newText;
           
          }
      });
}

