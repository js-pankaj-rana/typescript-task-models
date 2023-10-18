export enum Priority {
    high = "High",
    low = "Low",
    medium = "Medium"
} 

export enum Role {
    user = 'user',
    admin = "admin"     
}

export interface EffortInterface {
    role: Role;
    estimateHours?: number;
    remainingHours?: number;
}

export interface TaskInterface {
    id?: string;
    title?: string;
    priority?: Priority;
    progress?: number;
    description?: string;
    userAvatar?: string[];
    effort?: EffortInterface;   
}
