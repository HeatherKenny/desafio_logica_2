function calcularNivel(vitorias, derrotas) {
  // Validação básica: verifica se as entradas são números positivos
  if (vitorias < 0 || derrotas < 0) {
      return "Valores inválidos. Vitórias e derrotas devem ser números positivos.";
  }

  const saldoVitorias = vitorias - derrotas;

  let nivel;
  switch (true) {
      case saldoVitorias < 10:
          nivel = "Ferro";
          break;
      case saldoVitorias >= 11 && saldoVitorias <= 20:
          nivel = "Bronze";
          break;
      case saldoVitorias >= 21 && saldoVitorias <= 50:  
          nivel = "Prata";
          break;  
      case saldoVitorias >= 51 && saldoVitorias <= 80:
          nivel = "Ouro";
          break;
      case saldoVitorias >= 81 && saldoVitorias <= 90:
          nivel = "Diamante";
          break;
      case saldoVitorias >= 91 && saldoVitorias <= 100:
          nivel = "Lendario";
      default:
          nivel = "Imortal";
  }

  return nivel;
}

// Exemplo de uso:
const nivelDoHeroi = calcularNivel(30, 20);
console.log(`O herói tem de saldo de 20 está no nível de ${nivelDoHeroi}`);