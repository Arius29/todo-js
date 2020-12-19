export class Todo {
    static fromJson ( { id, tarea, completado, creado }) {    //aqui se recibe un objeto

        const tempTodo = new Todo (tarea);

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    };

    constructor ( tarea ) {
        this.tarea = tarea;

        this.id = new Date().getTime(); //1236720 Cada tarea va a tener un id de acuerdo a la fecha y hora actual
        this.completado = false;
        this.creado = new Date();
    }
};