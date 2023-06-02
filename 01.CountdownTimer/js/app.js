const endDate = "27 May 2023 5:20 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")


const clock = () => {
    const end = new Date(endDate);
    const now = new Date()
    const diff = (end - now) / 1000;
    // convert into days
    inputs[0].value = (Math.floor(diff / 3600 / 24))
    inputs[1].value = (Math.floor((diff / 3600) % 24))
    inputs[2].value = Math.floor((diff / 60) % 60)
    inputs[3].value = Math.floor(diff % 60)
}

// initial call
clock()

setInterval(() => {
    clock()
}, 1000);