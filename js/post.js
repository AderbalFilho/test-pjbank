$(document).ready(function () {
  $("button").click(function () {
    $.ajax({
      url: 'https://sandbox.pjbank.com.br/contadigital/e0727263cc7a983f0aae5411ad86c5a144b8ed28/recebimentos/transacoes',
      type: 'post',
      crossDomain: true,
      data: {
        descricao_pagamento: $("#description").val(),
        valor: $("#value").val(),
        parcelas: $("#installments").val(),
        token_cartao: $("#token_cartao").val(),
      },
      headers: {
        "Content-Type": "application/json",
        'X-CHAVE-CONTA': 'e9db986de751de918ca19a1c377f0b7c313915f8'
      },
      success: function (data, status) {
        alert("Data: " + data + "\nStatus: " + status);
      }
    });
  });
});
