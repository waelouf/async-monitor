import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/home/HomePage.vue';
import ListServers from '@/kafka/ListServers.vue';
import AddServer from '@/kafka/AddServer.vue';
import KafkaHome from '@/kafka/KafkaHome.vue';
import KafkaConnect from '@/kafka/KafkaConnect.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/kafka',
    name: 'Kafka',
    component: KafkaHome,
    children: [],
  },
  {
    path: '/kafka/add',
    name: 'KafkaAdd',
    component: AddServer,
  },
  {
    path: '/kafka/list',
    name: 'KafkaList',
    component: ListServers,
  },
  {
    path: '/kafka/connect/:id',
    name: 'KafkaConnect',
    component: KafkaConnect,
    props: true,
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
});

export default router;
