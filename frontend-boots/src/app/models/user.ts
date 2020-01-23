export class User{

    constructor(
            _id = '',
            name='',
            isClient,
            entity='',
            email='',
            type=''
        ){
            this._id = _id;
            this.name = name;
            this.isClient = isClient;
            this.entity = entity;
            this.email = email;
            this.type = type;
        }
        
    _id: string;
    name: string;
    isClient: boolean;
    entity: string;
    email: string;
    type: string;
}