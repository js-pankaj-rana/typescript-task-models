import { Task } from './Task';
import {User} from './User';
import { v4 as uuidv4 } from 'uuid';
import {Priority, Role } from './TaskInterface'
import { AxiosResponse } from 'axios';


const task = new Task("http://localhost:3000/tasks");
const user = new User("http://localhost:3000/users");


task.sync.add({
    id: uuidv4(),
    title: "Ayushman Task Name",
    description: "Some description",
    priority: Priority.high,
    progress: 0,
    userAvatar: ["https://www.gravatar.com/205e460b479e2e5b48aec07710c08d50"],
    effort: {
        role: Role.user,
        estimateHours: 10,
        remainingHours: 10
    }
}).then(
    (response: AxiosResponse) => {
        console.log("added", response.data);
    }
).catch((error) => {
    console.warn("error", error.message);
    }
);

task.sync.collection().then( (res: AxiosResponse) => {
    console.log("collection", res.data);
}).catch((error) => {
    console.warn("error", error.message);
    }
);


user.sync.add({
    id: uuidv4(),
    name: "Sudhir",
    email: "ramu@abs.com",
    profileImage: "https://someurl"
}).then(
    (res: AxiosResponse) => {
        console.log("user added", res.data);
    }
).catch((error) => {
    console.warn("error", error.message);
    }
);

user.sync.collection().then( (res: AxiosResponse) => {
    console.log("Collection data", res.data);
}).catch((error) => {
    console.warn("error", error.message);
    }
)
