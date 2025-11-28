// Simulação de pedido
function pedir(prato) {
  alert(`Você escolheu o prato: ${prato}. Em breve entraremos em contato para confirmar seu pedido!`);
}

// Envio de formulário
document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  alert(`Obrigado, ${nome}! Recebemos sua mensagem. Entraremos em contato em breve pelo e-mail: ${email}.`);
  this.reset();
});
