function searchFunction() {
    let query = document.getElementById("searchBox").value.toLowerCase();
    let items = document.querySelectorAll(".item"); // Adjust this to match your elements

    items.forEach(item => {
        if (item.innerText.toLowerCase().includes(query)) {
            item.style.display = "block"; // Show matching items
        } else {
            item.style.display = "none"; // Hide non-matching items
        }
    });
}
