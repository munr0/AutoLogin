document.addEventListener("DOMContentLoaded", () =>
{
    document.getElementById("save").addEventListener("click", () =>
    {
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        if (username && password) {
            chrome.storage.local.set({ u: encrypt(username) })
            chrome.storage.local.set({ p: encrypt(password) })
            window.close()
        }
        else {
            alert("Please complete fields before saving.")
        }
    });

    (async () =>
    {
        const data = await chrome.storage.local.get(["u", "p"])
        const olduser = unEncrypt(data.u)
        const oldpass = unEncrypt(data.p)

        if (olduser)
            document.getElementById("username").value = olduser
        if (oldpass)
            document.getElementById("password").placeholder = '*'.repeat(oldpass.length)
    })()
})

function encrypt(data)
{
    if (data) {
        for (let i = 0; i < 8; i++) {
            data = btoa(data)
        }
    }
    return data
}
function unEncrypt(data)
{
    if (data) {
        for (let i = 0; i < 8; i++) {
            data = atob(data)
        }
    }
    return data
}
