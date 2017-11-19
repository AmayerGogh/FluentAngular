import  {LoginComponent} from './login/login.component'
import  {WorkspaceModule} from "./workspace/workspace.module"
export const appRoutes =[
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
    {
		path: 'workspace',
		loadChildren: './workspace/workspace.module#WorkspaceModule'
	},
	{
		path: '**', // fallback router must in the last
		component: LoginComponent
	}
]