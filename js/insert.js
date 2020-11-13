function insert() {
    var title = document.querySelector("#title").value;
    var paid = document.querySelector("#paid").value;
    if (title != "" || paid != "") {
        database.collection("payment").add({
            title: title,
            paid: paid
        })
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
        document.querySelector("#title").value = "";
        document.querySelector("#paid").value = "";
    } else {
        alert("fields cannot be empty...");
    }
    process();
}