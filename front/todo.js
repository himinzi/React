function todoList() {
  fetch("http://localhost:3000/todo/")
    .then(result => result.json())
    .then(result => {
      console.log(result);
      for (todo of result) {
        let li = document.createElement('li');
        li.innerText = todo.title;
        li.setAttribute('data-no', todo.no);
        if (todo.complete == 1) {
          li.className = "checked";
        }
        document.querySelector("#myUL").appendChild(li);
      }// end fo make list

      // Create a "close" button and append it to each list item
      var myNodelist = document.getElementsByTagName("LI");
      var i;
      for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
      }

      // Click on a close button to hide the current list item
      var close = document.getElementsByClassName("close");
      var i;
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          var div = this.parentElement;
          let no = div.dataset.no;
          console.log(no);
          // fetch("http://localhost:3000/todo/" + no, {
          //   method: 'DELETE',
          //   headers: {
          //     "Content-Type": "application/json",
          //   }
          // })
          //   .then(result => result.json())
          //   .then(result => {
          //     div.style.display = "none";
          //   })
        }
      }

      // Add a "checked" symbol when clicking on a list item
      var list = document.querySelector('ul');
      list.addEventListener('click', function (ev) {
        let no = ev.target.dataset.no;
        console.log(no);
        fetch("http://localhost:3000/todo/" + no, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then(result => result.json())
          .then(result => {
            if (ev.target.tagName === 'LI') {
              ev.target.classList.toggle('checked');
            }
          })

      }, false);


    })
}

function newElement() {
  let title = document.querySelector('#myInput').value;
  fetch("http://localhost:3000/todo/", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title
    })
  })
    .then(result => result.json())
    .then(result => {
      // Create a new list item when clicking on the "Add" button
      li = document.createElement("li");
      var inputValue = document.getElementById("myInput").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("myInput").value = "";

      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }

    })
}


window.addEventListener('DOMContentLoaded', function () {
  todoList();


});