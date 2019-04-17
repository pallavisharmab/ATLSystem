import { User , IssueDetails} from '../models/user';

export const USERS: User[]=
 [   {
        'id': 1,
        'userName': 'Admin',
        'password': 'admin',
        'email' :'admin@atl.com',
        'image':'/assets/admin-avatar.jpg',
        'isAdmin': true,
        'booksIssued':[{'bookId':0,'Title':null,'IssuedDate':null,'RenewedDate':null }]
       
    },
    {
        'id': 2,
        'userName': 'pallavi',
        'password': 'pallavi',
        'email' :'',
        'image':null,
        'isAdmin': false,
        'booksIssued':[
        {'bookId':101,'Title':'Angular JS','IssuedDate':'3/12/2019','RenewedDate':null }]
    },

    
];