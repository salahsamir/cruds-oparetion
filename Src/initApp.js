import { connectionDb } from "../DB/connections.js"
import { router_auth } from "./Auth/auth.router.js"
import { router_comment } from "./Comment/comment.router.js"
import { user_router } from "./User/user.router.js"
export const initapp=(app,express)=>{
    app.use(express.json())
    app.use('/auth',router_auth)
    app.use('/user',user_router)
    app.use('/comment',router_comment)

    connectionDb()
    app.get('/', (req, res) => res.send('Hello World!'))
    
    app.get('*', (req, res) => res.send('not found'))

}