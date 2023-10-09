import { FC } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector.ts'
import styles from './TasksList.module.scss'
import { Task as TTask } from '../../models/tasksModels.ts'
import Task from './Task/Task.tsx'
import noTaskPng from '../../assets/notasks.png'

const TasksList: FC = () => {
	const tasks: TTask[] = useAppSelector((state) => state.tasks.tasks)
	const activeTasksCount: number = tasks.reduce(
		(accumulator: number, currentTask: TTask) =>
			currentTask.active ? accumulator + 1 : accumulator,
		0
	)

	return (
		<>
			<div className={styles.info}>
				<div className={styles.created}>
					<span className={styles.createdText}>Created tasks</span>
					<span className={styles.createdCount}>{tasks.length}</span>
				</div>
				<div className={styles.completed}>
					<span className={styles.completedText}>Completed tasks</span>
					<span className={styles.completedCount}>
						{tasks.length
							? `${tasks.length - activeTasksCount} of ${tasks.length}`
							: '0'}
					</span>
				</div>
			</div>
			{tasks.length ? (
				<div className={styles.tasksList}>
					{[...tasks]
						.sort(function (x, y) {
							return Number(x.active) - Number(y.active)
						})
						.map((task: TTask) => (
							<Task
								active={task.active}
								text={task.text}
								id={task.id}
								key={task.id}
							/>
						))
						.reverse()}
				</div>
			) : (
				<div className={styles.noTasksContainer}>
					<img src={noTaskPng} alt="" />
					<p>
						<span className={styles.bold}>
							You don't have any tasks registered yet
						</span>
						<span className={styles.regular}>
							Create tasks and organize your to-do items
						</span>
					</p>
				</div>
			)}
		</>
	)
}

export default TasksList
