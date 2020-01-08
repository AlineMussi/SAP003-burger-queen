if (!client){
    alert('Insira o nome do cliente.')
    return;
  }
  if (!table){
    alert('Insira o número da mesa.')
    return;
  }
  if (itens.length === 0){
    alert('Insira ao menos 1 item para enviar o pedido.')
    return;
  } 