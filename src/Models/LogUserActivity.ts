import Model from './BaseModel'

export default class LogUserActivity extends Model {
    public id: string // Discord ids are strings
    public game: string
    public username: string
    public created_at: string

    static get tableName() {
        return 'log_users_activity';
    }
}
