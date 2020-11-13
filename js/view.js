var database = firebase.firestore();
function process() {
    database.collection("payment").get().then((data) => {
        var result = "";
        data.forEach(element => {
            result += `
                <tr>
                    <td>${element.data().title}</td>
                    <td>${element.data().paid}</td>
                    <td>${element.data().date}</td>
                    <td>${element.data().comment}</td>
                    <td>
                        <button class="btn btn-danger" onclick="destroy('${element.id}')">Delete</button>
                        <button class="btn btn-success"  data-toggle="modal" data-target="#edit" onclick="edit('${element.id}','${element.data().title}','${element.data().paid}','${element.data().date}','${element.data().comment}')">Edit</button>
                    </td>
                </tr>
                `
        });
        document.querySelector("#data").innerHTML = result;
    });
}