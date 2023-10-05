const submitButton = document.querySelector("#calculadora")
  
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
                      let tempomensal = i;
                      getmeses(i);

                                  
                       table.appendChild(row);

                         for (let j = 1; j <= 4; j++) 
                         {
                            if(j == 1)
                              {
                                const column = document.createElement('td');
                                column.textContent = i;
                                row.appendChild(column);
                              }
                              else if(j == 2)
                              {
                                 
                                   let valorIncial= getValorInicial();
                                   const column = document.createElement('td');
                                   column.textContent = valorIncial;
                                   row.appendChild(column);
                              }else if(j == 3)
                                {
                                  let rentabilidade= getRentabilidade();
                                  const column = document.createElement('td');
                                  column.textContent = (rentabilidade/12).toFixed(2);
                                  row.appendChild(column);
                               
                                }else if (j == 4)
                                  {
                                      const valorF = getValorFinal()

                                      column = document.createElement('td');
                                      column.textContent = valorF;
                                      row.appendChild(column);
                                  }
                                  
                                       
                                    
                                      
                          }

                          getmeses(tempomensal);

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
  const meses = document.querySelector("#meses").value;
  return parseInt(meses);
 

}

function getValorInicial()
{
   const valorIncial = document.getElementById("valorIncial").value;
   return parseFloat(valorIncial);
} 

function getRentabilidade()
{
  const rentabilidade = document.getElementById("rentabilidade").value;

   return parseFloat(rentabilidade);
}


function getValorFinal()
{

  let rentabilidade = getRentabilidade();
  let tempo = getmeses()
  let valor = getValorInicial();
  rentabilidade = (rentabilidade/100) + 1;
  let jc = Math.pow(rentabilidade,tempo);

  
  let valorFinal = valor * jc;

  return valorFinal.toFixed(2);
}
resetar();