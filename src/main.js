import { createApp } from 'vue'

import app from './app.vue'
import friendContact from './components/friendContact.vue'
import newFriend from './components/newFriend.vue'


const uyg = createApp(app);

uyg.component('friend-contact', friendContact);
uyg.component('new-friend', newFriend);

uyg.mount('#app');
