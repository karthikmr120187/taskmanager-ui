/*Created interface to check what is the difference */
export interface ITask{
    TaskId:number;
    TaskName: string;
    Priority:number;
    ParentTaskName:string;
    StartDate:string;
    EndDate:string;
    IsCompleted:boolean;
}
export class Task implements ITask
{
    TaskId:number;
    TaskName: string;
    Priority:number;
    ParentTaskName:string;
    StartDate:string;
    EndDate:string;
    IsCompleted:boolean;
}