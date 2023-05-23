// Luas Persegi

function resultLuas() {
  // mengambil nilai dari inputan sekaligus dijadikan integer
  const nilaiSisiLuas = parseInt(document.getElementById("sisi-luas").value)
  
  // menjumlahkan nilai hasil dari inputan
  const result = nilaiSisiLuas * nilaiSisiLuas
  
  // memasukkan nilai kedalam ID yang ditentukan
  document.getElementById("output-luas").innerHTML = result

  // mengambil nilai dan dimasukkan ke ID yang ditentukan
  document.getElementById("input-value1").innerHTML = nilaiSisiLuas
  document.getElementById("input-value2").innerHTML = nilaiSisiLuas
}

const buttonLuas = document.getElementById("hitung-luas")
const resetLuas = document.getElementById("reset-luas")
const showLuas = document.getElementById("value-luas")
const resetNilaiLuas = document.getElementById("sisi-luas")

// memberikan fungsi jika button diklik
buttonLuas.addEventListener("click", function() {
  showLuas.classList.remove("value-luas")
})

resetLuas.addEventListener("click", function() {
  showLuas.classList.add("value-luas")
  resetNilaiLuas.value = ""
})

//  Keliling persegi

function resultKeliling() {
    // mengambil nilai dari inputan sekaligus dijadikan integer
  const nilaiSisiKeliling = parseInt(document.getElementById("sisi-keliling").value)
  
  // menjumlahkan nilai hasil dari inputan
  const result = nilaiSisiKeliling * 4
  
  // memasukkan nilai kedalam ID yang ditentukan
  document.getElementById("output-keliling").innerHTML = result

  // mengambil nilai dan dimasukkan ke ID yang ditentukan
  document.getElementById("input-value").innerHTML = nilaiSisiKeliling
}

const buttonKeliling = document.getElementById("hitung-keliling")
const resetKeliling = document.getElementById("reset-keliling")
const showKeliling = document.getElementById("value-keliling")
const resetNilaiKeliling = document.getElementById("sisi-keliling")

// memberikan fungsi jika button diklik
buttonKeliling.addEventListener("click", function() {
  showKeliling.classList.remove("value-keliling")
})

resetKeliling.addEventListener("click", function() {
  showKeliling.classList.add("value-keliling")
  resetNilaiKeliling.value = ""
})
