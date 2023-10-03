const submitButton = document.querySelector("#calculadora")
  // Add an event listener to the submit button

    submitButton.addEventListener('click', function()
    {
              const tempoEmMes = document.querySelector('#meses');
                      

               const mes = tempoEmMes.value;
               const valorTempoMensal = parseInt(mes);
              
               geraResultado(valorTempoMensal);

          
                      
                         

    });

function geraResultado(valorTempoMensal)
{


    
    const resultado = document.querySelector('#corpo');
         if (resultado.textContent == '')
         {

            for(let i = 1; i <= valorTempoMensal; i++)// linha
                  {
                                      
                              
                      const row = document.createElement('tr');
                      const table = document.getElementById("corpo");


                                  
                       table.appendChild(row);

                         for (let j = 1; j <= 4; j++) 
                         {
                                const column = document.createElement('td');
                                column.textContent = `Conteudo na linha ${i},coluna ${j}`;
                                row.appendChild(column);
                                        
                                    
                                      
                          }

                  }


         } else {  resultado.textContent = '';
                
        
        }

                  

}

function resetar()
{

  const resultTd = document.querySelector('#corpo')
  const resetButton = document.querySelector('#reset');

      
      resetButton.addEventListener('click', function() {
       
          resultTd.textContent = '';
});
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


resetar();