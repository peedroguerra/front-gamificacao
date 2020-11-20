
// CALCULOS PARA O BALANÇO PATRIMONIAL

// CALCULA VALORES ATIVO CIRCULANTE
$(document).ready(function() {
    $("#estoque,#contasReceber,#caixa").on('keyup', function() {
      var caixa = $('#caixa').val() || 0;
      var contasReceber = $('#contasReceber').val() || 0;
      var estoque = $('#estoque').val() || 0;    
      var resultado = parseFloat(caixa) + parseFloat(contasReceber) + parseFloat(estoque);     
      $('#ativoCirculante').val(convertToCurrency(resultado));    
    });
  });

// CALCULA VALORES ATIVO NAO CIRCULANTE
$(document).ready(function() {
  $("#equipamentos,#moveisUtensilhos,#veiculos").on('keyup', function() {
    var equipamentos = $('#equipamentos').val() || 0;
    var moveisUtensilhos = $('#moveisUtensilhos').val() || 0;
    var veiculos = $('#veiculos').val() || 0;    
    var resultado = parseFloat(equipamentos) + parseFloat(moveisUtensilhos) + parseFloat(veiculos);     
    $('#ativoNaoCirculante').val(convertToCurrency(resultado));
    $('#imobilizados').val(convertToCurrency(resultado));       
  });
});

// CALCULA TODOS OS ATIVOS
$(document).ready(function(){
  $("#equipamentos,#moveisUtensilhos,#veiculos,#estoque,#contasReceber,#caixa").on('keyup', function(){
    var caixa = $('#caixa').val() || 0;
      var contasReceber = $('#contasReceber').val() || 0;
      var estoque = $('#estoque').val() || 0;    
      var equipamentos = $('#equipamentos').val() || 0;
      var moveisUtensilhos = $('#moveisUtensilhos').val() || 0;
      var veiculos = $('#veiculos').val() || 0;      
      var resultado = parseFloat(caixa) + parseFloat(contasReceber) + parseFloat(estoque) + 
      parseFloat(equipamentos) + parseFloat(moveisUtensilhos) + parseFloat(veiculos); 
    $('#ativo').val(convertToCurrency(resultado));
  });
});

// CALCULA TODOS OS PASSIVOS
$(document).ready(function(){
    $("#fornecedores,#salarios,#impostos,#aluguel,#financiamentos,#emprestimos").on('keyup', function(){
        var fornecedores = $('#fornecedores').val() || 0;
        var salarios = $('#salarios').val() || 0;
        var impostos = $('#impostos').val() || 0;    
        var aluguel = $('#aluguel').val() || 0;
        var financiamentos = $('#financiamentos').val() || 0;
        var emprestimos = $('#emprestimos').val() || 0;      
        var resultado = parseFloat(fornecedores) + parseFloat(salarios) + parseFloat(impostos) + 
        parseFloat(aluguel) + parseFloat(financiamentos) + parseFloat(emprestimos); 
      $('#passivo').val(convertToCurrency(resultado));
    });
  });

// CALCULA VALORES PASSIVO CIRCULANTE
$(document).ready(function() {
  $("#fornecedores,#salarios,#impostos,#aluguel").on('keyup', function() {
    
    var fornecedores = $('#fornecedores').val() || 0;
    var salarios = $('#salarios').val() || 0;
    var impostos = $('#impostos').val() || 0;    
    var aluguel = $('#aluguel').val() || 0;  

    var resultado = parseFloat(fornecedores) + parseFloat(salarios) + parseFloat(impostos) + parseFloat(aluguel);     
    $('#passivoCirculante').val(convertToCurrency(resultado));  
    console.log(convertToCurrency(resultado));
  });
});

// CALCULA VALORES PASSIVO NÃO CIRCULANTE
$(document).ready(function() {
  $("#financiamentos,#emprestimos").on('keyup', function() {
    var financiamentos = $('#financiamentos').val() || 0;
    var emprestimos = $('#emprestimos').val() || 0;
    var resultado = parseFloat(financiamentos) + parseFloat(emprestimos);     
    $('#passivoNaoCirculante').val(convertToCurrency(resultado));    
  });
});
  
// CALCULA PATRIMONIO LIQUIDO
$(document).ready(function() {
    $("#capitalSocial").on('keyup', function() {
      var capitalSocial = $('#capitalSocial').val() || 0;
      var resultado = parseFloat(capitalSocial);   
      $('#patrimonioLiquido').val(convertToCurrency(resultado));    
    });
  });

//CALCULOS DO DEMONSTRATIVO RESULTADO EXERCICIO
//CALCULO RECEITA OPERACIONAL BRUTA
$(document).ready(function() {
  $("#vendaMercadorias").on('keyup', function() {
    var vendaMercadorias = $('#vendaMercadorias').val() || 0;
    var resultado = parseFloat(vendaMercadorias);   
    $('#receitaOperacionalBruta').val(convertToCurrency(resultado));    
  });
});

//CALCULO DEDUCOES DA RECEITA BRUTA
$(document).ready(function() {
  $("#devolucoes,#impostosContribuicoes").on('keyup', function() {
    var devolucoes = $('#devolucoes').val() || 0;
    var impostosContribuicoes = $('#impostosContribuicoes').val() || 0;
    var resultado = parseFloat(impostosContribuicoes) + parseFloat(devolucoes);  
    if(resultado < 0){
      $("#deducoesReceitaBruta").addClass("valorNegativo");
    }
    $('#deducoesReceitaBruta').val(convertToCurrency(resultado));    
  });
});

//CALCULO RECEITA OPERACIONAL LIQUIDA
$(document).ready(function() {
  $("#devolucoes,#impostosContribuicoes,#vendaMercadorias").on('keyup', function() {
    var vendaMercadorias = $('#vendaMercadorias').val() || 0;
    var devolucoes = $('#devolucoes').val() || 0;
    var impostosContribuicoes = $('#impostosContribuicoes').val() || 0;
    var resultado = parseFloat(vendaMercadorias) - parseFloat(devolucoes) - parseFloat(impostosContribuicoes);   
    if(resultado < 0){
      $("#receitaOperacionalLiquida").addClass("valorNegativo");
    }else{
      $("#receitaOperacionalLiquida").removeClass("valorNegativo");
    }
    $('#receitaOperacionalLiquida').val(convertToCurrency(resultado));    
  });
});

//CALCULO DESPESAS OPERACIONAIS
$(document).ready(function() {
  $("#despesasAdministrativas,#despesasComVendas").on('keyup', function() {
    var despesasComVendas = $('#despesasComVendas').val() || 0;
    var despesasAdministrativas = $('#despesasAdministrativas').val() || 0;

    var resultado = parseFloat(despesasComVendas) + parseFloat(despesasAdministrativas) ;   
    $('#despesasOperacionais').val(convertToCurrency(resultado));    
  });
});


//CALCULO RECEITA OPERACIONAL LIQUIDA
$(document).ready(function() {
  $("#devolucoes,#impostosContribuicoes,#vendaMercadorias,#despesasComVendas,#despesasAdministrativas").on('keyup', function() {
    var vendaMercadorias = $('#vendaMercadorias').val() || 0;
    var devolucoes = $('#devolucoes').val() || 0;
    var impostosContribuicoes = $('#impostosContribuicoes').val() || 0;
    var despesasComVendas = $('#despesasComVendas').val() || 0;
    var despesasAdministrativas = $('#despesasAdministrativas').val() || 0;
    var resultado = parseFloat(vendaMercadorias) - parseFloat(devolucoes) - parseFloat(impostosContribuicoes)
    - parseFloat(despesasComVendas)  - parseFloat(despesasAdministrativas);   
    
    if(resultado < 0){
      $("#resultadoAntesImpostoRenda").addClass("valorNegativo");
    }else{
      $("#resultadoAntesImpostoRenda").removeClass("valorNegativo");
    }
    $('#resultadoAntesImpostoRenda').val(convertToCurrency(resultado));    
  
  });
});

//CALCULO RESULTADO LIQUIDO DO EXERCICIO
$(document).ready(function() {
  $("#devolucoes,#impostosContribuicoes,#vendaMercadorias,#despesasComVendas,#despesasAdministrativas,#impostoDeRenda").on('keyup', function() {
    var vendaMercadorias = $('#vendaMercadorias').val() || 0;
    var devolucoes = $('#devolucoes').val() || 0;
    var impostosContribuicoes = $('#impostosContribuicoes').val() || 0;
    var despesasComVendas = $('#despesasComVendas').val() || 0;
    var despesasAdministrativas = $('#despesasAdministrativas').val() || 0;
    var impostoDeRenda = $('#impostoDeRenda').val() || 0;
    
    var resultado = parseFloat(vendaMercadorias) - parseFloat(devolucoes) - parseFloat(impostosContribuicoes)
    - parseFloat(despesasComVendas)  - parseFloat(despesasAdministrativas) - parseFloat(impostoDeRenda);   
    
    if(resultado < 0){
      $("#resultadoLiquidoExercicio").removeClass("valorPositivo");
      $("#resultadoLiquidoExercicio").addClass("valorNegativo");
    }else{
      $("#resultadoLiquidoExercicio").removeClass("valorNegativo");
      $("#resultadoLiquidoExercicio").addClass("valorPositivo");
    }
    $('#resultadoLiquidoExercicio').val(convertToCurrency(resultado));    
  
  });
});

// CONVERTE FLOAT PARA CURRENCY ATUAL
function convertToCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
  })
}

// CAMPOS SOMENTE NUMEROS
function somenteNumeros(num) {
  var er = /[^0-9.]/;
  er.lastIndex = 0;
  var campo = num;
  if (er.test(campo.value)) {
    campo.value = "";
  }
}