// Exercício 04:
// Você tem uma lista de tarefas [ "Lavar a louça", "Estudar", "Fazer compras"].
// Adicione uma nova tarefa ao final da lista e depois remova a primeira tarefa,
// já que foi completada. Por fim, verifique se "Estudar" ainda está na lista.

let listaTarefas = ["Lavar a louça", "Estudar", "Fazer compras"];
let verificarTarefa

listaTarefas.push("trabalhar");

listaTarefas.shift();

verificarTarefa = listaTarefas.includes("Estudar");

console.log(listaTarefas);