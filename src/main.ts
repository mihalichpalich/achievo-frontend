import { createApp } from "vue";

import App from "./App.vue";
import components from "@/components/ui";
import router from "@/router/routes";
import directives from "@/directives";

import './styles/index.css'

const app = createApp(App);

components.forEach((component) => app.component(component.name, component));

directives.forEach((directive) => {
    app.directive(directive.name, directive)
})

app.use(router).mount("#app");
