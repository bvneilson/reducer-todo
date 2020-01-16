export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let d = new Date();
      return [...state, {
        item: action.payload,
        completed: false,
        id: d.getTime()
      }];
    case 'COMPLETE_TODO':
      return state.map(todo => {
        if (todo.item === action.payload) {
          todo.completed = todo.completed ? false : true
        }
        return todo;
      })
    case 'CLEAR_TODOS':
      return state.filter(todo => {
        if (!todo.completed) {
          return todo;
        }
      });
    default:
      return state;
  }
}

export let todos = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987588
},
{
  item: 'Do some stuff',
  completed: false,
  id: 3892987556
},
{
  item: 'Finish the project',
  completed: false,
  id: 3892987654
}];
