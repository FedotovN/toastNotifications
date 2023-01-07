const doc = document,
      notifications = doc.getElementById("notifications"),
      buttons = doc.querySelectorAll("button"),
      toastIcons = {
        success: "fa-circle-check",
        warning: "fa-triangle-exclamation",
        error: "fa-circle-xmark",
        info: "fa-circle-info"
      }
window.onload = () => {
    buttons.forEach(el => {
        el.addEventListener(('click'), () => createToast(el.id))
    })
}
function createToast(id){
    if(notifications.childElementCount > 4) removeToast(notifications.children[0], false)
    let toast = doc.createElement('div')
    toast.className = `toast ${id}`
    toast.innerHTML = `<div class="column">
                            <i class="fa-solid ${toastIcons[id]}"></i>
                            <span>${id.charAt(0).toUpperCase() + id.slice(1, id.toString().length)}: This is the ${id} notification!</span>
                        </div>
                        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement, false)"></i>`
    notifications.appendChild(toast)
    setTimeout(()=>removeToast(toast, true), 5000)
}
function removeToast(toast, play) {
    if(play){ 
        toast.style.animation = "remove ease-in 1s forwards"
        setTimeout(()=> toast.remove(), 1000)
    }
    else toast.remove()
}
