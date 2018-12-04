// Global
import {strings} from "../../../localization/strings";

// Component
import notFound from './notFound';

// Routes
const routes = {
    root: {path: "*", component: notFound, isPublic: true , status:404, exact:true}
}

// Export
export { routes, strings };