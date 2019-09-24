$(document).ready(function () {
  $("button").click(function () {
    $.ajax({
      url: 'https://api.pjbank.com.br/contadigital/1264e7bea04bb1c24b07ace759f64a1bd65c8560/recebimentos/tokens',
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
        'X-CHAVE': 'ef947cf5867488f744b82744dd3a8fc4852e529f'
      },
      success: function (data, status) {
        console.log("a");
        alert("Data: " + data + "\nStatus: " + status);
      }
    });
  });
});
