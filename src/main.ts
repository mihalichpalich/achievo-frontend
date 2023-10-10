import { createApp } from "vue";
import { VueQueryPlugin } from "vue-query";

import App from "./App.vue";
import components from "@/components/ui";
import router from "@/router/routes";
import directives from "@/directives";
import store from "@/store";

import './styles/index.css'

const app = createApp(App);

components.forEach((component) => app.component(component.name, component));

directives.forEach((directive) => {
    app.directive(directive.name, directive)
})

app.use(VueQueryPlugin).use(router).use(store).mount("#app");
