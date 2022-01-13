import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import TaskList from '@/components/TaskList.vue';
import TaskForm from '@/components/TaskForm.vue';
import TaskDetail from '@/components/TaskDetail.vue';

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        alias: "/tasks",
        name: "tasks",
        component: TaskList
    },
    {
        path: "/tasks/new",
        name: "tasks-new",
        component: TaskForm
    },
    {
        path: "/tasks/:id",
        name: "task-details",
        component: TaskDetail
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;