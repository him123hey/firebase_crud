function insert() {
    var title = document.querySelector("#title").value;
    var paid = document.querySelector("#paid").value;
    var date = document.querySelector("#date").value;
    console.log(date);
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
        document.querySelector("#date").value = "";
        document.querySelector("#comment").value ="";
    } else {
        alert("fields cannot be empty...");
    }
    process();
}