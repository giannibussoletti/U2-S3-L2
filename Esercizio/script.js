const saveButton = document.getElementById("salva")
const deleteButton = document.getElementById("cancella")
const inputField = document.getElementById("input-field")

const saveElement = function () {
  localStorage.setItem("nome", inputField.value)
  inputField.value = ""
  alert(`${localStorage.getItem("nome")} è stato salvato nella lista`)
}
const deleteElement = function () {
  if (localStorage.length === 0) {
    alert("non è stato trovato alcun nome")
  } else {
    alert(`${localStorage.getItem("nome")} è stato eliminato dalla lista`)
    localStorage.removeItem("nome")
  }
}

const timerHTML = document.getElementById("local-timer")
let timer = 0

const realTimeClock = function () {
  {
    const getLocal = sessionStorage.getItem("time")
    if (getLocal) {
      sessionStorage.setItem("time", getLocal)
      timerHTML.innerText = getLocal
      timer = getLocal
      timer++
      sessionStorage.setItem("time", timer)
    } else {
      timer++
      sessionStorage.setItem("time", timer)
    }
  }
}

setInterval(realTimeClock, 1000)
