 function edit(id, title, paid, date, comment){
    var datashow = `
        <form>
            <div class="form-group">
               <input type="text" id="title" class="form-control mb-3" placeholder="title" value="${title}">                
            </div>
            <div class="form-group">
                <input type="number" id="paid" class="form-control mb-3" placeholder="Paid" value="${paid}">
            </div>
            <div class="form-group">
                <input type="date" id="date" class="form-control mb-3" value="${date}">
            </div>
            <div class="form-group">
                <textarea id="comment" cols="60" rows="5" placeholder="Comment here......" class="p-2" value="${comment}"></textarea>
            </div>
            <button type="submit" onclick="getDateInput('${id}')" class="btn btn-info" data-dismiss="modal">Update</button>
        </form>
    `
    document.querySelector("#editForm").innerHTML = datashow;
}
// function getDateInput(id){
//     firebase.database().ref("payment").doc(id).set({
//         title: document.querySelector("#title").value, 
//         paid: document.querySelector("#paid").value 
//     })
// }