import { v4 as myId } from 'uuid';

export default function todosReducer(currentState, action) {
  switch (action.type) {
    case 'added': {
      if (action.payload.title === '') {
        return currentState; 
      }

      const newTodo = {
        id: myId(),
        title: action.payload.title,
        desc: '',
        comp: false
      };

      return [...currentState, newTodo];
    }

    case 'toggle': {
      return currentState.map(t =>
        t.id === action.payload.id
          ? { ...t, comp: !t.comp }
          : t
      );
    }

    case 'delete': {
      return currentState.filter(t => t.id !== action.payload.id);
    }

    case 'edit': {
      return currentState.map(t =>
        t.id === action.payload.id
          ? {
              ...t,
              title: action.payload.titleValue || t.title,
              desc: action.payload.descValue || t.desc
            }
          : t
      );
    }

    default:
      return currentState;
  }
}