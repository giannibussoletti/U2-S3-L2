// local e session storage hanno logiche interne diferenti ma il loro utilizzo su JS
// è praticamente analogo: gli oggetti con cui andremo a lavorare si chiamano localStorage e sessionStorage
// e i metodi che espondo sono:
// - setItem(key, value) -> MEMORIZZA un valore
// - getItem(key) -> RECUPERA un valore
// - removeItem(key) -> ELIMINA un dato grazie alla chiave
// - clear() -> ELIMINA TUTTI I DATI DALLA TABELLA

const localStorageSave = function () {
  console.log("AAA")
  localStorage.setItem("theme", "dark")
  localStorage.setItem("user", "Gianni")
  localStorage.setItem("sessionNumber", 2)
  localStorage.setItem("Studying", true)
  localStorage.setItem("oggetto", { verboso: true }) // JS non riessce a convertire un formato dati complesso (oggetto, array) l'oggetto viene salvato come [object Object]
  localStorage.setItem("languages", ["python", "gdscript"]) // Anche l'array non viene salvato bene, come risultato
  // nel local storage darà l'array senza quadre e con i componenti separati da una virgola
  // ma c'è un MODO CORRETTO per salvare entità complesse
  // in local e session storage. Utilizzando una conversione in JSON.
  localStorage.setItem("arrayConJSON", JSON.stringify(["valore1", "numero2"]))
  localStorage.setItem("oggettoConJSON", JSON.stringify({ nome: "Gianni" }))
  //   in breve i dati primitivi possono essere salvati come valori
  // nel caos di entità dati complesse (arr/ogg) -> JSON.stringify([arr]/{ogg})
  localStorage.setItem("object", "[object Object]")
}

const localStorageRead = function () {
  const theme = localStorage.getItem("theme") // -> dark
  // nel caso di una chiave inesistente
  console.log("valore di theme: ", theme)
  const chiaveInesistente = localStorage.getItem("chiaveInesistente") //--> ritorna null
  console.log("valore di una chiave inesistente: ", chiaveInesistente)
  const complexData = localStorage.getItem("oggettoConJSON") //  {"nome":"Gianni"} <-- questa è una stringa, non l'oggetto originale,
  // ma da questa stringa si può convertire facendo l'operazione inversa dello stringify che si chiama parse
  console.log("valore di un oggetto complesso senza JSON.parse: ", complexData)
  console.log("valore di un oggetto complesso con JSON.parse: ", JSON.parse(complexData))

  //   localStorage.clear() // cancella tutto dal local storage
  localStorage.removeItem("oggetto") // elimino l'oggetto complesso
}
