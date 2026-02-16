import {Task} from "../model/Task";
import {TitleIsEmptyError} from "../error/TitleIsEmptyError";
import {TitleNotAvailableError} from "../error/TitleNotAvailableError";

/**
 * Service responsible for handling task business rules.
 */
export class TaskService {

    // In memory task storage
    private taskList: Task[] = [];

    // Counter to determine task ids
    private idCounter: number = 0;

    public createTask(title: string): Task {

        // Set up valid title
        title = this.validateAndNormalizeTitle(title, undefined);

        // Create task object
        this.idCounter++;
        const task: Task = new Task(this.idCounter, title, false);

        // Add task to the task list
        this.taskList.push(task)

        // Return created task
        return task;

    }

    public validateAndNormalizeTitle(title: string, currentTaskId?: number): string {

        // Normalize title
        title = title.trim();

        // Check if title is empty
        if (title.length == 0) {
            throw new TitleIsEmptyError("Title cannot be empty")
        }

        // Loop through the task list
        for (const task of this.taskList) {

            // Check if task exists
            if (
                task.title.toLowerCase() === title.toLowerCase() &&
                task.id !== currentTaskId
            ) {
                throw new TitleNotAvailableError('Task already exists.');
            }
        }

        return title;

    }

}