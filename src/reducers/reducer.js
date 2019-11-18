export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        item: action.payload,
        completed: false,
        id: new Date()
      }];
    case 'COMPLETE_TODO':
      state.map(todo => {
        if (todo.item === action.payload) {
          todo.completed = (todo.completed ? false : true)
          todo.style = (todo.completed ? 'complete' : '')
        }
      })
      return state;
    default:
      return state;
  }
}

export let todos = [{
  item: 'Learn about reducers',
  completed: false,
  style: '',
  id: 3892987588
},
{
  item: 'Do some stuff',
  completed: false,
  style: '',
  id: 3892987556
},
{
  item: 'Finish the project',
  completed: false,
  style: '',
  id: 3892987654
}];
