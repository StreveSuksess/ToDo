import { FC } from 'react'
import styles from './App.module.scss'
import todoLogo from './assets/todoLogo.svg'
import AddTaskForm from './components/addTaskForm/addTaskForm.tsx'
import TasksList from './components/TasksList/TasksList.tsx'

const App: FC = () => {
	return (
		<>
			<div className={styles.intro}>
				<img src={todoLogo} alt="" />
			</div>
			<div className={styles.content}>
				<AddTaskForm />
				<TasksList />
			</div>
		</>
	)
}

export default App
