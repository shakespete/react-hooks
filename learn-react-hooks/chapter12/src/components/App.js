import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTodos } from '../actions'

import Header from './Header'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import ConnectedTodoFilter from '../containers/ConnectedTodoFilter'

export default function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodos())
  }, [ fetchTodos ])

  return (
    <div style={{ width: 400 }}>
      <Header />
      <AddTodo />
      <hr />
      <TodoList />
      <hr />
      <ConnectedTodoFilter />
    </div>
  )
}