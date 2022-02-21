const apiData = new APi;
const ui = new UI;

apiData.getuser('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        ui.showLoader();

        setTimeout(() => {
            ui.showData(response);
            document.querySelector(".main").classList.remove("body");
        }, 3000)
        document.getElementById("site-search").addEventListener("keyup", function(e) {
            if (e.target.value !== "") {
                ui.searchItem(response)
            } else {
                ui.showError("Field is Empty")
                ui.showData(response);
            }

            e.preventDefault();
        })

    }).catch(err => console.log(err));