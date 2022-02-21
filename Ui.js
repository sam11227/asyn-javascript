class UI {
    showData(data) {
        let output = "";
        data.forEach((item) => {
            output += `
           <div class="map mx-6 my-4 px-6 border border-2px bg-gray-100 rounded-lg">
            <div class="my-4 mx-6 grid grid-cols-4 border-b-2">
                <p class="text-orange-400 pr-6 ">ID:</p>
                <p class="text-orange-400 pr-6">Name</p>
                <p class="text-orange-400 pr-6">UserName: </p>
                <p class="text-orange-400 pr-6">Email:</p>
            </div>
            <div class="my-4 mx-6 grid grid-cols-4">
                <p class="pr-6"> ${item.id}</p>
                <p class="pr-6"> ${item.name}</p>
                <p class="pr-6"> ${item.username}</p>
                <p  class="pr-6"> ${item.email}</p>
            </div>
        </div>
           `;
        });
        document.querySelector(".main").innerHTML = output;
    }

    searchItem(data) {
        let searchText = document.getElementById("site-search").value;
        searchText = searchText.toLowerCase();
        let result = data.filter((item) => {
            if (
                item.name.toLowerCase().indexOf(searchText) != -1 ||
                item.username.toLowerCase().indexOf(searchText) != -1 ||
                item.email.toLowerCase().indexOf(searchText) != -1
            ) {
                return item;
            }
        });

        this.showData(result);
    }

    showError(Message) {
        const err = document.querySelector(".Error");
        const div = document.createElement("div");
        div.className = "errorField";
        div.innerHTML = `${Message}`;
        err.appendChild(div);
        this.removeError();
    }

    removeError() {
        setTimeout(() => {
            document.querySelector(".errorField").remove();
        }, 3000);
    }

    showLoader() {
        document.querySelector(".main").classList.add("body");
    }
}