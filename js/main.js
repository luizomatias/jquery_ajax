function consultaCep(){
  $(".barra-progresso").show();
  var cep = document.getElementById("cep").value;
  var url = "http://viacep.com.br/ws/" + cep + "/json";
  console.log(url);
  $.ajax({
    url: url,
    type: "GET",
    success: function(response){
      console.log(response);
      $("#logradouro").html(response.logradouro);
      $("#uf").html(response.uf);
      $("#localidade").html(response.localidade);
      $("#bairro").html(response.bairro);
      $("#titulo_cep").html("CEP: " + response.cep);
      $(".cep").show();
      $(".barra-progresso").hide();
      //$(#logradouro).html("Rua: " + response.logradouro);
      //document.getElementById("logradouro").innerHTML = "Rua: " + response.logradouro;
      //document.getElementById("bairro").innerHTML = "Bairro: " + response.bairro;
      //document.getElementById("localidade").innerHTML = "Cidade: " + response.localidade;
      //document.getElementById("uf").innerHTML = "Estado: " + response.uf;
      //alert(response.logradouro);
    }
  })
}
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});