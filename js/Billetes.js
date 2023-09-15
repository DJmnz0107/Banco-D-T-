function limpiarCampos() {
    document.getElementById("form").reset();

}
function cajeroAutomático() {
    var cliente = document.getElementById("cliente").value;
    var billetesARetirar = parseInt(document.getElementById("billetesARetirar").value);

    if (!cliente || isNaN(billetesARetirar) || billetesARetirar <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos deben de estar llenos/completos.'
        });
        return;
    }

    var billete_100 = Math.floor(billetesARetirar / 100);
    billetesARetirar = billetesARetirar % 100;

    var billete_50 = Math.floor(billetesARetirar / 50);
    billetesARetirar = billetesARetirar % 50;

    var billete_20 = Math.floor(billetesARetirar / 20);
    billetesARetirar = billetesARetirar % 20;

    var billete_10 = Math.floor(billetesARetirar / 10);
    billetesARetirar = billetesARetirar % 10;

    var billete_5 = Math.floor(billetesARetirar / 5);
    billetesARetirar = billetesARetirar % 5;

    var billete_1 = billetesARetirar;
    
    Swal.fire({
        icon: 'success',
        title: 'Operación completada',
        text: `Billetes retirados correctamente.`
    });

    var totalBilletes = `
    <div class="alert alert-success text-center" role="alert">
    <h2>Gracias por elegirnos, ${cliente}, se ha retirado efectivamente todo el dinero solicitado.</h2>
</div>
      <div class="alert alert-warning text-dark" role="alert">
  <h4 class="alert-heading text-center">Billetes a otorgar</h4>
  <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg/640px-Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg" class="img-fluid float-end" alt="Logo" width="70" height="64"> <strong> Billetes de 100 dólares:</strong> ${billete_100}</div>
  <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/50_USD_Series_2004_Note_Front.jpg/640px-50_USD_Series_2004_Note_Front.jpg" class="img-fluid float-end" alt="Logo" width="70" height="64"><strong> Billetes de 50 dólares:</strong> ${billete_50}</div>
  <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/US_%2420_Series_2006_Obverse.jpg/1500px-US_%2420_Series_2006_Obverse.jpg" class="img-fluid float-end" alt="Logo" width="70" height="64"><strong> Billetes de 20 dólares:</strong> ${billete_20}</div>
  <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/US10dollarbill-Series_2004A.jpg/255px-US10dollarbill-Series_2004A.jpg" class="img-fluid float-end" alt="Logo" width="70" height="64"><strong> Billetes de 10 dólares:</strong> ${billete_10}</div>
  <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/US_%245_Series_2006_obverse.jpg/1200px-US_%245_Series_2006_obverse.jpg" class="img-fluid float-end" alt="Logo" width="70" height="64"><strong> Billetes de 5 dólares:</strong> ${billete_5}</div>
  <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/United_States_one_dollar_bill%2C_obverse.jpg/640px-United_States_one_dollar_bill%2C_obverse.jpg" class="img-fluid float-end" alt="Logo" width="70" height="64"><strong> Billetes de 1 dólar:</strong> ${billete_1}</div>
  <hr>
</div>
      </div>
    `;

    document.getElementById("totalBilletes").innerHTML = totalBilletes;
}
