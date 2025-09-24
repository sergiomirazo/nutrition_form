document.getElementById("nutricionForm").addEventListener("submit", function(e) {
      e.preventDefault();

      // Obtener datos
      const nombre = document.getElementById("nombre").value;
      const edad = parseInt(document.getElementById("edad").value);
      const sexo = document.getElementById("sexo").value;
      const peso = parseFloat(document.getElementById("peso").value);
      const alturaCm = parseFloat(document.getElementById("altura").value);
      const cintura = parseFloat(document.getElementById("cintura").value);

      const alturaM = alturaCm / 100;

      // Cálculo IMC
      const imc = peso / (alturaM * alturaM);

      // Clasificación IMC
      let clasificacion = "";
      if (imc < 18.5) clasificacion = "Bajo peso";
      else if (imc < 24.9) clasificacion = "Normal";
      else if (imc < 29.9) clasificacion = "Sobrepeso";
      else clasificacion = "Obesidad";

      // Cálculo índice cintura/altura (ICA)
      let ica = null;
      let riesgo = "";
      if (!isNaN(cintura)) {
        ica = cintura / alturaCm;
        if ((sexo === "hombre" && ica > 0.5) || (sexo === "mujer" && ica > 0.5)) {
          riesgo = "Riesgo cardiometabólico alto";
        } else {
          riesgo = "Riesgo cardiometabólico bajo";
        }
      }

      // Resultado
      let resultadoHTML = `<h3>Resultados para ${nombre}</h3>
        <p><b>Edad:</b> ${edad} años</p>
        <p><b>Sexo:</b> ${sexo}</p>
        <p><b>IMC:</b> ${imc.toFixed(2)} (${clasificacion})</p>`;
      
      if (ica !== null) {
        resultadoHTML += `<p><b>Índice Cintura/Altura:</b> ${ica.toFixed(2)} (${riesgo})</p>`;
      }

      document.getElementById("resultado").innerHTML = resultadoHTML;
    });
