import TasksPage from "../pages/TasksPage.vue"
// import LoginPage from "../pages/LoginPage.vue"
import LoginPage from "../pages/LoginPage.vue"
import RegisterPage from "../pages/RegisterPage.vue"

const routes = [
    {
        path: "/tasks",
        comments: TasksPage,
        name: 'tasks'
    },
    {
        path: "/login",
        comments: LoginPage,
        name: 'login'
    },
    {
        path: "/register",
        comments: RegisterPage,
        name: 'register'
    },
]


export default routes