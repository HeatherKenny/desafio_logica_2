const niveis = [
  { min: 0, max: 9, nivel: 'Ferro' },
  { min: 10, max: 20, nivel: 'Bronze' },
  { min: 21, max: 50, nivel: 'Prata' },
  { min: 51, max: 80, nivel: 'Ouro' },
  { min: 81, max: 90, nivel: 'Diamante' }, 
  { min: 91, max: 100, nivel: 'Lendario' },
  { min: 101, max: Infinity, nivel: 'Imortal' }
];

function calcularSaldo(vitorias, derrotas) {
  // Calcula o saldo de vitórias
  return vitorias - derrotas;
}

function calcularNivel(vitorias, derrotas) {
  // Validação: verifica se as entradas são números inteiros positivos
  if (!Number.isInteger(vitorias) || !Number.isInteger(derrotas)) {
    return "Valores inválidos. Vitórias e derrotas devem ser números inteiros.";
  }
  if (vitorias < 0 || derrotas < 0) {
    return "Valores inválidos. Vitórias e derrotas não podem ser negativos.";
  }

  const saldo = calcularSaldo(vitorias, derrotas);

  // Encontra o nível correspondente
  for (const nivelObj of niveis) {
    if (saldo >= nivelObj.min && saldo <= nivelObj.max) {
      return nivelObj.nivel;
    }
  }

  // Se nenhum nível for encontrado, retorna um valor padrão (por exemplo, "Não classificado")
  return "Não classificado";
}

// Exemplo de uso:
const vitorias = 90;
const derrotas = 10;
const nivelDoHeroi = calcularNivel(vitorias, derrotas);
const saldo = calcularSaldo(vitorias, derrotas);

console.log(`O herói com ${vitorias} vitórias e ${derrotas} derrotas, tem um saldo de ${saldo} e está no nível ${nivelDoHeroi}`);