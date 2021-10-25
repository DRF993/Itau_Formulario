

function validarCPF(strCPF) {	

    var Soma;
    var Resto;
    Soma = 0;

  if (strCPF == "00000000000") {
      
    alert('CPF INVÁLIDO ');
    document.getElementById('cpfid').value="";
    return false; 
  }

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11; 

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) {
        
        alert('CPF INVÁLIDO ');
        document.getElementById('cpfid').value="";
        return false;
    }

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) {
        
        alert('CPF INVÁLIDO ');   
        document.getElementById('cpfid').value="";     
        return false;
        
    }

    return true;

    }


   
function enviar(){

     // var nome = document.getElementById('nomeid').value="";    

     // Vou pegar o valor de todos campos OBRIGATÓRIOS
     // Fazer um IF comparando se estão vazios com o operador || ( ou )
     // Se algum estiver vazio retornar FALSE e mostrar alert ( "Preencha todos campos")
     // ELSE ( se todos estiverem preenchidos ) retorna TRUE e mostra  alert ( " Cadastro efetuado com sucesso !")

}

    
   