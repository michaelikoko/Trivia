import { createContext, useReducer } from 'react'

const optionsReducer = (state, action) => {
  switch (action.type) {
  case 'SET_OPTIONS':
    return action.payload
  default:
    return state
  }
}

const scoreReducer = (state, action) => {
  switch(action.type) {
  case 'SET_SCORE':
    return action.payload
  case 'RESET_SCORE':
    return null
  default:
    return state
  }
}

const QuizContext = createContext()

export const QuizContextProvider = (props) => {
  const [options, optionsDispatch] = useReducer(optionsReducer, [])
  const [score, scoreDispatch] = useReducer(scoreReducer, null)

  return (
    <QuizContext.Provider value={[score, scoreDispatch, options, optionsDispatch]}>
      {props.children}
    </QuizContext.Provider>
  )
}

export default QuizContext
