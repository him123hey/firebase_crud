function insert() {
    var title = document.querySelector("#title").value;
    var paid = document.querySelector("#paid").value;
    var date = document.querySelector("#date").value;
    var comment = document.querySelector("#comment").value;
    if (title != "" || paid != "" || date != "") {
        database.collection("payment").add({
            title: title,
            paid: paid,
            date:date,
            comment:comment
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