$(document).ready(function () {
  $("button").click(function () {
    $.ajax({
      url: 'https://api.pjbank.com.br/contadigital/e0727263cc7a983f0aae5411ad86c5a144b8ed28/recebimentos/tokens',
      type: 'post',
      crossDomain: true,
      data: {
        nome_cartao: $("#nome").val(),
        numero_cartao: $("#cartao").val(),
        mes_vencimento: $("#vencimento_mes").val(),
        ano_vencimento: $("#vencimento_ano").val(),
        cpf_cartao: $("#cpf").val(),
        email_cartao: $("#email").val(),
        celular_cartao: $("#phone").val(),
        codigo_cvv: $("#cvv").val()
      },
      headers: {
        // "Access-Control-Allow-Headers": "*",
        // "Access-Control-Allow-Origin": "*",
        // 'Access-Control-Allow-Methods': 'GET, POST, PUT',
        "Content-Type": "application/json",
        'X-CHAVE': 'e9db986de751de918ca19a1c377f0b7c313915f8'
      },
      success: function (data, status) {
        console.log("a");
        alert("Data: " + data + "\nStatus: " + status);
      }
    });
  });
});
