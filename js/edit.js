function edit(id, title, paid){
    var datashow = `
        <form action="#">
            <div class="form-group">
                <input type="text" id="title" class="form-control mb-3" placeholder="title" value="${title}">         
            </div>
            <div class="form-group">
                <input type="number" id="paid" class="form-control mb-3" placeholder="Paid" value="${paid}">
            </div>
            <button class="btn btn-info" onclick="updateData(${id}, ${document.querySelector("#title").value}, ${document.querySelector("#paid").value})" data-dismiss="modal">Update</button>
        </form>
    `
    document.querySelector("#editForm").innerHTML = datashow;
}
