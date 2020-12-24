const defaultState = {
  inputValue: '默认值',
  isLogin: false,
}

type Action = {
  type: string
  payload?: any
}

export default (state = defaultState, action: Action) => {
  switch (action.type) {
    case 'add':
      return state
    case 'changeIsLogin':
      return {
        ...state,
        isLogin: action.payload,
      }
    default:
      return state
  }
}
