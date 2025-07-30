
import { useState } from 'react';
import './App.css';

function App() {
  const [motorista, setMotorista] = useState('');
  const [veiculo, setVeiculo] = useState('');
  const [destino, setDestino] = useState('');
  const [saidaConfirmada, setSaidaConfirmada] = useState(false);

  const [retorno, setRetorno] = useState(false);
  const [peso, setPeso] = useState('');
  const [obs, setObs] = useState('');

  const [pedido, setPedido] = useState('');
  const [cliente, setCliente] = useState('');
  const [canal, setCanal] = useState('');

  const handleSubmitSaida = () => {
    const payload = { Motorista: motorista, Veiculo: veiculo, Destino: destino, DataHora: new Date().toLocaleString() };
    console.log("Saída:", payload);
    setSaidaConfirmada(true);
  };

  const handleSubmitRetorno = () => {
    const payload = { Motorista: motorista, Veiculo: veiculo, Peso: peso, Observacoes: obs, DataHora: new Date().toLocaleString() };
    console.log("Retorno:", payload);
    setRetorno(true);
  };

  const handlePedidoEntregue = () => {
    const mensagem = `Olá ${cliente}, seu pedido nº ${pedido} foi entregue. Obrigado por comprar com a GRAM.`;
    const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <h1 style={{ color: 'green' }}>GRAM Automação</h1>

      <h2>🚛 Saída de Caminhão</h2>
      <input placeholder="Motorista" value={motorista} onChange={e => setMotorista(e.target.value)} /><br />
      <input placeholder="Veículo" value={veiculo} onChange={e => setVeiculo(e.target.value)} /><br />
      <input placeholder="Destino" value={destino} onChange={e => setDestino(e.target.value)} /><br />
      <button onClick={handleSubmitSaida}>Confirmar Saída</button>
      {saidaConfirmada && <p style={{ color: 'green' }}>✔️ Saída registrada!</p>}

      <h2>✅ Retorno de Viagem</h2>
      <input placeholder="Peso descarregado (kg)" value={peso} onChange={e => setPeso(e.target.value)} /><br />
      <input placeholder="Observações" value={obs} onChange={e => setObs(e.target.value)} /><br />
      <button onClick={handleSubmitRetorno}>Confirmar Retorno</button>
      {retorno && <p style={{ color: 'green' }}>✔️ Retorno registrado!</p>}

      <h2>📦 Pedido Entregue</h2>
      <input placeholder="Cliente" value={cliente} onChange={e => setCliente(e.target.value)} /><br />
      <input placeholder="Pedido Nº" value={pedido} onChange={e => setPedido(e.target.value)} /><br />
      <input placeholder="Canal de venda" value={canal} onChange={e => setCanal(e.target.value)} /><br />
      <button onClick={handlePedidoEntregue}>Enviar WhatsApp</button>
    </div>
  );
}

export default App;
