class Task{
    constructor(){
        this.state = new TaskToDo(this);
    }
    
    // Definição do Estado.
    setState(state){
        this.state = state;
    }

    start(){
        this.state.start();
    }

    pause(){
        this.state.pause();
    }

    conclude(){
        this.state.conclude()
    }

    print(){
        this.state.print()
    }
}

class TaskToDo{
    constructor(task){
        this.task = task;
    }

    // Estados de "TaskToDo".
    start(){
        console.log('Tarefa inicializada.');
        this.task.setState(new TaskInProgress(this.task));
    }

    pause(){
        console.log('Não é possível pausar neste momento.');
    }

    conclude(){
        console.log('Você precisa começar a tarefa antes de concluir.');
    }

    print(){
        return 'Tarefa: A fazer';
    }
}

class TaskInProgress{
    constructor(task){
        this.task = task;
    }

    // Estados de "TaskInProgress".
    start(){
        console.log('A tarefa já está em andamento.');
    }

    pause(){
        console.log('Tarefa pausada.');
        this.task.setState(new PausedTask(this.task));
    }

    conclude(){
        console.log('Tarefa concluída.');
        this.task.setState(new TaskCompleted(this.task));
    }

    print(){
        return 'Tarefa: Em andamento';
    }
}

class PausedTask{
    constructor(task){
        this.task = task;
    }

    // Estados de "PausedTask".
    start(){
        console.log('Tarefa retomada.');
        this.task.setState(new TaskInProgress(this.task));
    }

    pause(){
        console.log('A tarefa já está pausada.');
    }

    conclude(){
        console.log('Tarefa concluída.');
        this.task.setState(new TaskCompleted(this.task));
    }

    print(){
        return 'Tarefa: Pausada';
    }
}

class TaskCompleted{
    constructor(task){
        this.task = task;
    }

    // Estados de "TaskCompleted".
    start(){
        console.log('Não é possível iniciar uma tarefa concluída.');
    }

    pause(){
        console.log('Não é possível pausar uma tarefa concluída.');
    }
    
    conclude(){
        console.log('Tarefa já está concluída.');
    }

    print(){
        return 'Tarefa: Concluída';
    }
}

// Uso do padrão State
const task1 = new Task();
console.log(task1.print());

task1.start();
console.log(task1.print());

task1.pause();
console.log(task1.print());

task1.start();
task1.conclude();
console.log(task1.print());