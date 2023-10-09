import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../models/tasksModels.ts'

const LS_KEY_TASKS = 'tasks'
const LS_KEY_LAST_ID = 'lastId'

interface ITasksState {
	tasks: Task[]
}

const initialState: ITasksState = {
	tasks: JSON.parse(localStorage.getItem(LS_KEY_TASKS) ?? '[]')
}

export const TasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<string>) => {
			const task: Task = {
				id: Number(localStorage.getItem(LS_KEY_LAST_ID)) + 1 ?? 0,
				text: action.payload,
				active: true
			}
			state.tasks.push(task)
			localStorage.setItem(LS_KEY_TASKS, JSON.stringify(state.tasks))
			localStorage.setItem(LS_KEY_LAST_ID, JSON.stringify(task.id))
		},
		removeTask: (state, action: PayloadAction<Task>) => {
			state.tasks = state.tasks.filter(
				(task: Task) => task.id !== action.payload.id
			)

			localStorage.setItem(LS_KEY_TASKS, JSON.stringify(state.tasks))
		},
		setActive: (
			state,
			action: PayloadAction<{ id: number; active: boolean }>
		) => {
			state.tasks.filter(
				(task: Task) => task.id === action.payload.id
			)[0].active = action.payload.active
			localStorage.setItem(LS_KEY_TASKS, JSON.stringify(state.tasks))
		}
	}
})

export const tasksActions = TasksSlice.actions
export const tasksReducer = TasksSlice.reducer
