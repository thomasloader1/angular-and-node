export class User{

    constructor(
            _id = '',
            name='',
            isEntity='',
            entity='',
            email=''
        ){
            this._id = _id;
            this.name = name;
            this.isEntity = isEntity;
            this.entity = entity;
            this.email = email;
        }
        
    _id: string;
    name: string;
    isEntity: string;
    entity: string;
    email: string;
}