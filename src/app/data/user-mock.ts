import { User , IssueDetails} from '../models/user';

export const USERS: User[]=
 [   {
        'id': 1,
        'userName': 'Admin',
        'password': 'admin',
        'isAdmin': true,
        'booksIssued':[{'bookId':0,'IssuedDate':null,'RenewedDate':null }]
       
    },
    {
        'id': 2,
        'userName': 'pallavi',
        'password': 'pallavi',
        'isAdmin': false,
        'booksIssued':[
        {'bookId':101,'IssuedDate':"2014-01-01T23:28:56.782Z",'RenewedDate':null }]
    },

    
];