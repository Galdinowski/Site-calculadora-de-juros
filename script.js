const submitButton = document.getElementById("calculadora")
  // Add an event listener to the submit button
submitButton.addEventListener('click', geraResultado);


function geraResultado()
{


    //getmeses();
    //getValorInicial();
    for (let i = 0; i < 4; i++) {
      const column = document.createElement('td');
      column.textContent = `Column ${i + 1}`;
      const table = document.getElementById("tabelaCompleta"); 
      table.appendChild(column);
    }

    // Create 4 table rows
    for (let i = 0; i < 4; i++) {
      const row = document.createElement('tr');
  row.textContent = "Texto"
      // Add the 4 table columns to the row
      for (let j = 0; j < 4; j++) {
        const cell = table.querySelector(`td:nth-child(${j + 1})`);
        row.appendChild(cell);
      }

      // Add the row to the table
      const table = document.getElementById("tabelaCompleta"); 
      table.appendChild(row);
      
    }

    
   
}


function getmeses()

{

  const column = document.createElement('td')
  const palavra = document.createTextNode("Meses");
  column.appendChild(palavra);
  const table = document.getElementById("tabelaCompleta"); 
  table.appendChild(column);

for (let i = 0; i < 4; i++) 
{
  const row = document.createElement('tr');
  const palavra = document.createTextNode(i);
  row.appendChild(palavra);
  const table = document.getElementById("tabelaCompleta"); 
  table.appendChild(row);
}

}

function getValorInicial()
{

  let val = 10;

  const column = document.createElement('td')
  const palavra = document.createTextNode("Valor inicial");
  column.appendChild(palavra);
  const table = document.getElementById("tabelaCompleta"); 
  table.appendChild(column);

for (let i = 0; i < 4; i++) 
{
  const row = document.createElement('tr');
  const palavra = document.createTextNode(val+i);
  row.appendChild(palavra);
  const table = document.getElementById("tabelaCompleta"); 
  table.appendChild(row);
}
}