const prices = { male: 50, female: 45 };
const quantities = { male: 0, female: 0 };
const brl = value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const totalTickets = () => quantities.male + quantities.female;
const totalPrice = () => quantities.male * prices.male + quantities.female * prices.female;

function renderOrder() {
  document.getElementById('male-count').textContent = quantities.male;
  document.getElementById('female-count').textContent = quantities.female;
  document.getElementById('male-summary').textContent = quantities.male;
  document.getElementById('female-summary').textContent = quantities.female;
  document.getElementById('total-tickets').textContent = totalTickets();
  document.getElementById('total-price').textContent = brl(totalPrice());
  document.getElementById('pix-total').textContent = brl(totalPrice());
}
document.querySelectorAll('.qty-btn').forEach(button => {
  button.addEventListener('click', () => {
    const type = button.dataset.target;
    quantities[type] = Math.max(0, Math.min(20, quantities[type] + Number(button.dataset.step)));
    renderOrder();
  });
});

const eventDate = new Date('2027-01-15T22:00:00-03:00').getTime();
function updateCountdown() {
  const diff = eventDate - Date.now();
  if (diff <= 0) {
    document.getElementById('days').textContent = '000';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('count-note').textContent = 'A MARRA COMEÇOU!';
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  document.getElementById('days').textContent = String(days).padStart(3, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById('copy-pix').addEventListener('click', async () => {
  const key = document.getElementById('pix-key').textContent.trim();
  const feedback = document.getElementById('copy-feedback');
  try {
    await navigator.clipboard.writeText(key);
    feedback.textContent = 'Chave Pix copiada!';
  } catch (error) {
    const temp = document.createElement('textarea');
    temp.value = key;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    temp.remove();
    feedback.textContent = 'Chave Pix copiada!';
  }
});

document.getElementById('confirm-whatsapp').addEventListener('click', () => {
  const name = document.getElementById('buyer-name').value.trim();
  const age = Number(document.getElementById('buyer-age').value);
  if (!name) {
    alert('Por favor, informe seu nome completo.');
    document.getElementById('buyer-name').focus();
    return;
  }
  if (!Number.isInteger(age) || age < 16 || age > 99) {
    alert('A entrada é permitida a partir de 16 anos. Informe uma idade válida.');
    document.getElementById('buyer-age').focus();
    return;
  }
  if (totalTickets() < 1) {
    alert('Escolha pelo menos 1 ingresso para continuar.');
    return;
  }
  const phone = '5585986882730'; // Altere aqui se o WhatsApp de atendimento for outro.
  const message = [
    'Olá! Quero confirmar minha compra para a MARRA — 2ª EDIÇÃO.',
    '',
    `Nome completo: ${name}`,
    `Idade: ${age} anos`,
    `Ingressos masculinos: ${quantities.male}`,
    `Ingressos femininos: ${quantities.female}`,
    `Quantidade total: ${totalTickets()}`,
    `Valor total: ${brl(totalPrice())}`,
    '',
    'Vou anexar o comprovante do Pix nesta conversa.',
    'Chave Pix utilizada: 85986882730',
    '',
    'Estou ciente de que a confirmação é manual, após a conferência do pagamento.'
  ].join('\n');
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
renderOrder();
