var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 },
  ];
  
  var selectedAccount = -1;
  var password = "1234"; // Password para todas las cuentas (esto es solo un ejemplo, en un entorno real debería ser más seguro)
  
  function seleccionarCuenta() {
    var cuentaSelect = document.getElementById("cuentas");
    var cuentaIndex = cuentaSelect.value;
  
    if (cuentaIndex !== "-1") {
      selectedAccount = parseInt(cuentaIndex);
      document.getElementById("interaccion").style.display = "block";
    } else {
      selectedAccount = -1;
      document.getElementById("interaccion").style.display = "none";
      document.getElementById("operaciones").style.display = "none";
      document.getElementById("resultado").style.display = "none";
    }
  }
  
  function verificarPassword() {
    var inputPassword = document.getElementById("password").value;
  
    if (inputPassword === password) {
      document.getElementById("operaciones").style.display = "block";
      document.getElementById("nombreCuenta").innerText =
        "Cuenta de " + cuentas[selectedAccount].nombre;
      document.getElementById("interaccion").style.display = "none";
    } else {
      alert("Password incorrecto. Intenta nuevamente.");
      document.getElementById("password").value = "";
    }
  }
  
  function consultarSaldo() {
    var saldoActual = cuentas[selectedAccount].saldo;
    mostrarResultado("Saldo actual: $" + saldoActual);
  }
  
  function ingresarMonto() {
    var montoIngresar = prompt("Ingresa el monto a ingresar:");
    montoIngresar = parseFloat(montoIngresar);
  
    if (isNaN(montoIngresar) || montoIngresar <= 0) {
      alert("Ingresa un monto válido.");
      return;
    }
  
    var saldoActual = cuentas[selectedAccount].saldo;
    var nuevoSaldo = saldoActual + montoIngresar;
  
    if (nuevoSaldo > 990) {
      alert("No se puede ingresar más dinero, saldo máximo permitido es $990.");
      return;
    }
  
    cuentas[selectedAccount].saldo = nuevoSaldo;
    mostrarResultado("Monto ingresado: $" + montoIngresar + "\nNuevo saldo: $" + nuevoSaldo);
  }
  
  function retirarMonto() {
    var montoRetirar = prompt("Ingresa el monto a retirar:");
    montoRetirar = parseFloat(montoRetirar);
  
    if (isNaN(montoRetirar) || montoRetirar <= 0) {
      alert("Ingresa un monto válido.");
      return;
    }
  
    var saldoActual = cuentas[selectedAccount].saldo;
    var nuevoSaldo = saldoActual - montoRetirar;
  
    if (nuevoSaldo < 10) {
      alert("No se puede retirar más dinero, saldo mínimo permitido es $10.");
      return;
    }
  
    cuentas[selectedAccount].saldo = nuevoSaldo;
    mostrarResultado("Monto retirado: $" + montoRetirar + "\nNuevo saldo: $" + nuevoSaldo);
  }
  
  function mostrarResultado(mensaje) {
    document.getElementById("resultado").innerText = mensaje;
    document.getElementById("resultado").style.display = "block";
  }
  


