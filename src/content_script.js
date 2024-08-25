(async () =>
{
    const data = await chrome.storage.local.get(["u", "p"])
    let username = unEncrypt(data.u)
    let password = unEncrypt(data.p)

    let button
    if (window.location.href.includes("authentication")) {
        button = document.querySelector("button")
    }
    else if (window.location.href.includes("webmail")) {
        username = username + ".stu"
        button = document.querySelector(".signinbutton")
    }
    else if (window.location.href.includes("ipeer")) {
        button = document.querySelector(".submit input")
    }

    if (button && username && password) {
        console.log("Filling...")
        Ufield = document.getElementById("username") || document.getElementById("GuardUsername")
        Pfield = document.getElementById("password") || document.getElementById("GuardPassword")

        Ufield.value = username
        Pfield.value = password
        button.click()
    }
    else {
        console.info("Please click 🧩 > 'UBC AutoLogin' and configure your CWL to use this utility.")
    }
})()

function unEncrypt(data)
{
    if (data) {
        for (let i = 0; i < 8; i++) {
            data = atob(data)
        }
    }
    return data
}
