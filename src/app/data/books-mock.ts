import { InMemoryDbService , RequestInfo} from 'angular-in-memory-web-api';
import { Book } from '../models/books';
import {User} from '../models/user'
import { Injectable } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

export const BOOKS: Book[]=
[
    {
        'id': 101,
        'bookTitle': 'Angular JS',
        'genre': 'AngularJS',
        'author': 'Brad Green',
        'cost': 375,
        'imgUrl': '/assets/AngularJS1.JPG',
        'issued': true,
        'isbn': '9781491901939',
        'description' :'Develop smaller, lighter web apps that are simple to create and easy to test, extend, and maintain as they grow. This hands-on guide introduces you to AngularJS, the open source JavaScript framework that uses Model–view–controller (MVC) architecture, data binding, client-side templates, and dependency injection to create a much-needed structure for building web apps.',
        'starRating': 2
    },
    { 
        'id': 102,
        'bookTitle': 'Instant AngularJS Starter',
        'genre': 'AngularJS',
        'author': 'Dan Menard',
        'cost': 150, 
        'imgUrl': '/assets/AngularJS2.JPG',
        'issued': true,
        'isbn' : '9781782166764',
        'description' :'Get to grips with a new technology, understand what it is and what it can do for you, and then get to work with the most important features and tasks. This book is written in an easytoread style, with a strong emphasis on realworld, practical examples. Stepbystep explanations are provided for performing important tasks.This book is for web developers familiar with JavascriptIt doesnt cover the history of AngularJS, and its not a pitch to convince you that AngularJS is the best framework on the entire web. Its a guide to help you learn everything you need to know about AngularJS in as few pages and with as many examples as possible.',
        'starRating': 3
    },
    {
        'id': 103,
        'bookTitle': 'Ng-Book: The Complete Book on AngularJS',
        'genre': 'AngularJS',
        'author': 'Ari Lerner',
        'cost': 4657,
        'imgUrl': '/assets/AngularJS3.JPG',
        'issued': false,
        'isbn' : '9780991344604',
        'description' :'Develop smaller, lighter web apps that are simple to create and easy to test, extend',
        'starRating': 4
    },
    {
        'id': 104,
        'bookTitle': 'Developing BackboneJS Applications',
        'genre': 'BackboneJS',
        'author': 'Addy Osmani',
        'cost': 650,
        'imgUrl': '/assets/BackboneJS1.JPG',
        'issued': false,
        'isbn' :'9781449328252',
        'description' :'What if you could master the entire framework – with solid foundations – in less time without beating your head against a wall? Imagine how quickly you could work if you knew the best practices and the best tools? Stop wasting your time searching and have everything you need to be productive in one, well-organized place, with complete examples to get your project up without needing to resort to endless hours of research.',
        'starRating': 5
    },
    {
        'id': 105,
        'bookTitle': 'Backbone.js Patterns and Best Practices',
        'genre': 'BackboneJS',
        'author': 'Swarnendu De',
        'cost': 390,
        'imgUrl': '/assets/BackboneJS2.JPG',
        'issued': false,
        'isbn': ' 9789351105138',
        'description' :'Backbone.js Patterns and Best Practices is packed with examples that will help you work with Backbone.js components. It also gives solutions to common problems faced by developers. It gives a complete overview of plugin development, large scale application architecture, and unit testing as well.',
        'starRating': 1
    },
    {
        'id': 106,
        'bookTitle': 'Backbone.js Cookbook',
        'genre': 'BackboneJS',
        'author': 'Vadim Mirgorod',
        'cost': 240,
        'imgUrl': '/assets/BackboneJS3.JPG',
        'issued': false,
        'isbn': '9781782162728',
        'description' :'This is a Cookbook with easy-to-follow recipes, containing practical and detailed examples which are all fully backed up with code, illustrations, and tips to dig deep into Backbone.js. This book is great for JavaScript developers who want to learn how to build advanced frontend applications with the Backbone.js framework. This book can be used in educational institutions to teach students how to build frontend applications in an MVC manner. Its assumed that you have some experience in jQuery, and are familiar with HTML.',
        'starRating': 5
    },
    {
        'id': 107,
        'bookTitle': 'Ember.js in Action',
        'genre': 'EmberJS',
        'author': 'Joachim Haagen Skeie',
        'cost': 2500,
        'imgUrl': '/assets/EmberJS1.JPG',
        'issued': false,
        'isbn': '9781617291456',
        'description' :'Ember.js in Action is a crisp tutorial that introduces the Ember.js framework and shows how to build production-quality web applications. It begins with the basic architecture: client- and server-side MVC and explores the amazing Handelbars templating engine that automatically updates apps when the data behind them changes. Readers will develop a complete Ember.js application and learn how to deploy, administer, and update it efficiently.',
        'starRating': 5
    },
    {
        'id': 108,
        'bookTitle': 'Mastering Ember.js',
        'genre': 'EmberJS',
        'author': 'Mitchel Kelonye',
        'cost': 3500,
        'imgUrl': '/assets/EmberJS2.JPG',
        'issued': false,
        'isbn' :'9781783981984',
        'description' :'Developing single-page web applications is about to get easier! This book introduces you to web application development using the Ember.js web framework. Mastering Ember.js will help you to utilize its full potential and will show you how to create web applications. You will learn about views, event management, logging, debugging, and error management, always focusing on best practices. Finally, you will test your application and learn how to use WebSockets with Ember.js and end the book by modularizing your project.',
        'starRating': 4
    },
    {
        'id': 109,
        'bookTitle': 'Developing an EmberJS Edge',
        'genre': 'EmberJS',
        'author': 'Jamie White and Matthew Beale',
        'cost': 2000,
        'imgUrl': '/assets/EmberJS3.JPG',
        'issued': false,
        'isbn': 'B00JETLW32',
        'description' :'Ember.js is a framework for building ambitious web applications. In more specific terms, it is a collection of libraries, abstractions and conventions for dealing with the common challenges of building web applications. ',
        'starRating': 2
    },
    {
        'id': 110,
        'bookTitle': 'Node.js in Action',
        'genre': 'NodeJS',
        'author': 'Mike Cantelon and Marc Harter',
        'cost': 800,
        'imgUrl': '/assets/NodeJS1.JPG',
        'issued': false,
        'isbn': '9781617290572',
        'description' :'Node.js in Action is an example-driven tutorial that starts at square one and guides you through all the features, techniques, and concepts youll need to build production-quality Node applications. Youll start by learning how to set up your Node development environment, including loading the community-created extensions. Next, youll run several simple demonstration programs where you ll learn the basics of a few common types of Node applications. Then you ll dive into asynchronous programming, a model Node leverages to lessen application bottlenecks.',
        'starRating': 5
    },
    {
        'id': 111,
        'bookTitle': 'Node.js the Right Way',
        'genre': 'NodeJS',
        'author': 'Jim R. Wilson',
        'cost': 1200,
        'imgUrl': '/assets/NodeJS2.JPG',
        'issued': false,
        'isbn': '9781937785734',
        'description' :'Get to the forefront of server-side JavaScript programming by writing compact, robust, fast, networked Node applications that scale. Ready to take JavaScript beyond the browser, explore dynamic languages features and embrace evented programming? Explore the fun, growing repository of Node modules provided by npm. Work with multiple protocols, load-balanced RESTful web services, express, 0MQ, Redis, CouchDB, and more. Develop production-grade Node applications fast.',
        'starRating': 1
    },
    {
        'id': 112,
        'bookTitle': 'Pro Node.js for Developers',
        'genre': 'NodeJS',
        'author': 'Colin Ihrig',
        'cost': 2800,
        'imgUrl': '/assets/NodeJS3.JPG',
        'issued': false,
        'isbn': '9781430258605',
        'description' :'Building upon your existing JavaScript skills you ll be shown how to use Node.js to build both Web- and Network-based applications, to deal with data sources, capture events and deal with child processes to create robust applications that will work well in a wide range of circumstances.',
        'starRating': 3
    }
];
// export class BookData implements InMemoryDbService {

 

// createDb(reqInfo?: RequestInfo) {

       
// const books: Book[] = [
//     {
//         'id': 101,
//         'bookTitle': 'Angular JS',
//         'genre': 'AngularJS',
//         'author': 'Brad Green',
//         'cost': 375,
//         'imgUrl': '/assets/AngularJS1.JPG',
//         'issued': true,
//         'isbn': '9781491901939',
//         'description' :'Develop smaller, lighter web apps that are simple to create and easy to test, extend, and maintain as they grow. This hands-on guide introduces you to AngularJS, the open source JavaScript framework that uses Model–view–controller (MVC) architecture, data binding, client-side templates, and dependency injection to create a much-needed structure for building web apps.'
//     },
//     { 
//         'id': 102,
//         'bookTitle': 'Instant AngularJS Starter',
//         'genre': 'AngularJS',
//         'author': 'Dan Menard',
//         'cost': 150, 
//         'imgUrl': '/assets/AngularJS2.JPG',
//         'issued': true,
//         'isbn' : '9781782166764',
//         'description' :'Get to grips with a new technology, understand what it is and what it can do for you, and then get to work with the most important features and tasks. This book is written in an easytoread style, with a strong emphasis on realworld, practical examples. Stepbystep explanations are provided for performing important tasks.This book is for web developers familiar with JavascriptIt doesnt cover the history of AngularJS, and its not a pitch to convince you that AngularJS is the best framework on the entire web. Its a guide to help you learn everything you need to know about AngularJS in as few pages and with as many examples as possible.'
//     },
//     {
//         'id': 103,
//         'bookTitle': 'Ng-Book: The Complete Book on AngularJS',
//         'genre': 'AngularJS',
//         'author': 'Ari Lerner',
//         'cost': 4657,
//         'imgUrl': '/assets/AngularJS3.JPG',
//         'issued': false,
//         'isbn' : '9780991344604',
//         'description' :'Develop smaller, lighter web apps that are simple to create and easy to test, extend'
//     },
//     {
//         'id': 104,
//         'bookTitle': 'Developing BackboneJS Applications',
//         'genre': 'BackboneJS',
//         'author': 'Addy Osmani',
//         'cost': 650,
//         'imgUrl': '/assets/BackboneJS1.JPG',
//         'issued': false,
//         'isbn' :'9781449328252',
//         'description' :'What if you could master the entire framework – with solid foundations – in less time without beating your head against a wall? Imagine how quickly you could work if you knew the best practices and the best tools? Stop wasting your time searching and have everything you need to be productive in one, well-organized place, with complete examples to get your project up without needing to resort to endless hours of research.'
//     },
//     {
//         'id': 105,
//         'bookTitle': 'Backbone.js Patterns and Best Practices',
//         'genre': 'BackboneJS',
//         'author': 'Swarnendu De',
//         'cost': 390,
//         'imgUrl': '/assets/BackboneJS2.JPG',
//         'issued': false,
//         'isbn': ' 9789351105138',
//         'description' :'Backbone.js Patterns and Best Practices is packed with examples that will help you work with Backbone.js components. It also gives solutions to common problems faced by developers. It gives a complete overview of plugin development, large scale application architecture, and unit testing as well.'
//     },
//     {
//         'id': 106,
//         'bookTitle': 'Backbone.js Cookbook',
//         'genre': 'BackboneJS',
//         'author': 'Vadim Mirgorod',
//         'cost': 240,
//         'imgUrl': '/assets/BackboneJS3.JPG',
//         'issued': false,
//         'isbn': '9781782162728',
//         'description' :'This is a Cookbook with easy-to-follow recipes, containing practical and detailed examples which are all fully backed up with code, illustrations, and tips to dig deep into Backbone.js. This book is great for JavaScript developers who want to learn how to build advanced frontend applications with the Backbone.js framework. This book can be used in educational institutions to teach students how to build frontend applications in an MVC manner. Its assumed that you have some experience in jQuery, and are familiar with HTML.'
//     },
//     {
//         'id': 107,
//         'bookTitle': 'Ember.js in Action',
//         'genre': 'EmberJS',
//         'author': 'Joachim Haagen Skeie',
//         'cost': 2500,
//         'imgUrl': '/assets/EmberJS1.JPG',
//         'issued': false,
//         'isbn': '9781617291456',
//         'description' :'Ember.js in Action is a crisp tutorial that introduces the Ember.js framework and shows how to build production-quality web applications. It begins with the basic architecture: client- and server-side MVC and explores the amazing Handelbars templating engine that automatically updates apps when the data behind them changes. Readers will develop a complete Ember.js application and learn how to deploy, administer, and update it efficiently.'
//     },
//     {
//         'id': 108,
//         'bookTitle': 'Mastering Ember.js',
//         'genre': 'EmberJS',
//         'author': 'Mitchel Kelonye',
//         'cost': 3500,
//         'imgUrl': '/assets/EmberJS2.JPG',
//         'issued': false,
//         'isbn' :'9781783981984',
//         'description' :'Developing single-page web applications is about to get easier! This book introduces you to web application development using the Ember.js web framework. Mastering Ember.js will help you to utilize its full potential and will show you how to create web applications. You will learn about views, event management, logging, debugging, and error management, always focusing on best practices. Finally, you will test your application and learn how to use WebSockets with Ember.js and end the book by modularizing your project.'
//     },
//     {
//         'id': 109,
//         'bookTitle': 'Developing an EmberJS Edge',
//         'genre': 'EmberJS',
//         'author': 'Jamie White and Matthew Beale',
//         'cost': 2000,
//         'imgUrl': '/assets/EmberJS3.JPG',
//         'issued': false,
//         'isbn': 'B00JETLW32',
//         'description' :'Ember.js is a framework for building ambitious web applications. In more specific terms, it is a collection of libraries, abstractions and conventions for dealing with the common challenges of building web applications. '
//     },
//     {
//         'id': 110,
//         'bookTitle': 'Node.js in Action',
//         'genre': 'NodeJS',
//         'author': 'Mike Cantelon and Marc Harter',
//         'cost': 800,
//         'imgUrl': '/assets/NodeJS1.JPG',
//         'issued': false,
//         'isbn': '9781617290572',
//         'description' :'Node.js in Action is an example-driven tutorial that starts at square one and guides you through all the features, techniques, and concepts youll need to build production-quality Node applications. Youll start by learning how to set up your Node development environment, including loading the community-created extensions. Next, youll run several simple demonstration programs where you ll learn the basics of a few common types of Node applications. Then you ll dive into asynchronous programming, a model Node leverages to lessen application bottlenecks.'
//     },
//     {
//         'id': 111,
//         'bookTitle': 'Node.js the Right Way',
//         'genre': 'NodeJS',
//         'author': 'Jim R. Wilson',
//         'cost': 1200,
//         'imgUrl': '/assets/NodeJS2.JPG',
//         'issued': false,
//         'isbn': '9781937785734',
//         'description' :'Get to the forefront of server-side JavaScript programming by writing compact, robust, fast, networked Node applications that scale. Ready to take JavaScript beyond the browser, explore dynamic languages features and embrace evented programming? Explore the fun, growing repository of Node modules provided by npm. Work with multiple protocols, load-balanced RESTful web services, express, 0MQ, Redis, CouchDB, and more. Develop production-grade Node applications fast.'
//     },
//     {
//         'id': 112,
//         'bookTitle': 'Pro Node.js for Developers',
//         'genre': 'NodeJS',
//         'author': 'Colin Ihrig',
//         'cost': 2800,
//         'imgUrl': '/assets/NodeJS3.JPG',
//         'issued': false,
//         'isbn': '9781430258605',
//         'description' :'Building upon your existing JavaScript skills you ll be shown how to use Node.js to build both Web- and Network-based applications, to deal with data sources, capture events and deal with child processes to create robust applications that will work well in a wide range of circumstances.'
//     }
// ];


// const users: User[] = [
//     {
//         'id': 1,
//         'userName': 'Admin',
//         'password': 'admin',
//         'isAdmin': true,
//         'booksIssued': null
//     },
//     {
//         'id': 2,
//         'userName': 'pallavi',
//         'password': 'pallavi',
//         'isAdmin': false,
//         'booksIssued': [101]
//     },

// ]
 

// //   var bookss= JSON.stringify(books);
// //   localStorage.setItem("books",bookss);
// //   var userss= JSON.stringify(users);
// //   localStorage.setItem("users",userss);
//   localStorage.setItem("maxBookId","112");
//   localStorage.setItem("maxUserId","2");


  
//   return { books };
//  }

// //  post(reqInfo?: RequestInfo)
// //  {

// //  }

// //  get(reqInfo?: RequestInfo)
// //  {
// //      const collectionName = reqInfo.collectionName;

// //      if (localStorage.getItem('books') === null){
// //         var books= JSON.stringify(reqInfo.collection);
// //         localStorage.setItem("books",books);
// //      }
// //      if (localStorage.getItem('books')!= null){
// //      if (collectionName === 'books') {
// //          if (reqInfo.id=undefined)
// //          {
// //             return localStorage.getItem('books');
// //          }
// //          else
// //          {
// //             var jsonbooks=JSON.parse(localStorage.getItem('books'));
// //             for (var key in jsonbooks) {
// //                 if (reqInfo.id==jsonbooks[key].id){
// //                  return jsonbooks[key];
// //          }
// //      }
// //     }
// //   }
// // }
// //      if (collectionName === 'users') {
// //          var users= JSON.stringify(users);
// //          localStorage.setItem("users",users);
// //      }

// //      return undefined; // let the default GET handle all others
// //  }

// //  put(reqInfo?: RequestInfo)
// //  {

// //  }
// //  delete(reqInfo?: RequestInfo)
// //  {

// //  }



// }
