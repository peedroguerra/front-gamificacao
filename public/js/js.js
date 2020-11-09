
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

// CALCULA VALORES PASSIVO CIRCULANTE
$(document).ready(function() {
  $("#fornecedores,#salarios,#impostos,#aluguel").on('keyup', function() {
    
    var fornecedores = $('#fornecedores').val() || 0;
    var salarios = $('#salarios').val() || 0;
    var impostos = $('#impostos').val() || 0;    
    var aluguel = $('#aluguel').val() || 0;  

    var resultado = parseFloat(fornecedores) + parseFloat(salarios) + parseFloat(impostos) + parseFloat(aluguel);     
    $('#passivoCirculante').val(convertToCurrency(resultado));    
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
  

// CONVERTE FLOAT PARA CURRENCY ATUAL
  function convertToCurrency(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2
    })
  }


