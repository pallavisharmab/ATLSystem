import { InMemoryDbService , RequestInfo} from 'angular-in-memory-web-api';
import { Book } from '../models/books';
import {User} from '../models/user';
import { Injectable } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

export const BOOKS: Book[] =
[
    {
        id: 101,
        bookTitle: 'Angular JS',
        genre: 'AngularJS',
        author: 'Brad Green',
        cost: 375,
        imgUrl: '/assets/AngularJS1.JPG',
        issued: true,
        isbn: '9781491901939',
        likes: 0,
        description : 'Develop smaller, lighter web apps that are simple to create and easy to test, extend, and maintain as they grow. This hands-on guide introduces you to AngularJS.',
        starRating: 2
    },
    {
        id: 102,
        bookTitle: 'Instant AngularJS Starter',
        genre: 'AngularJS',
        author: 'Dan Menard',
        cost: 150,
        imgUrl: '/assets/AngularJS2.JPG',
        issued: true,
        isbn : '9781782166764',
        likes: 0,
        description : 'Get to grips with a new technology, understand what it is and what it can do for you, and then get to work with the most important features and tasks. ',
        starRating: 3
    },
    {
        id: 103,
        bookTitle: 'Ng-Book: The Complete Book on AngularJS',
        genre: 'AngularJS',
        author: 'Ari Lerner',
        cost: 4657,
        imgUrl: '/assets/AngularJS3.JPG',
        issued: false,
        isbn : '9780991344604',
        likes: 0,
        description : 'Develop smaller, lighter web apps that are simple to create and easy to test, extend',
        starRating: 4
    },
    {
        id: 104,
        bookTitle: 'Developing BackboneJS Applications',
        genre: 'BackboneJS',
        author: 'Addy Osmani',
        cost: 650,
        imgUrl: '/assets/BackboneJS1.JPG',
        issued: false,
        isbn : '9781449328252',
        likes: 0,
        description : 'What if you could master the entire framework – with solid foundations – in less time without beating your head against a wall? Imagine how quickly you could work if you knew the best practices and the best tools? ',
        starRating: 5
    },
    {
        id: 105,
        bookTitle: 'Backbone.js Patterns and Best Practices',
        genre: 'BackboneJS',
        author: 'Swarnendu De',
        cost: 390,
        imgUrl: '/assets/BackboneJS2.JPG',
        issued: false,
        isbn: ' 9789351105138',
        likes: 0,
        description : 'Backbone.js Patterns and Best Practices is packed with examples that will help you work with Backbone.js components. It also gives solutions to common problems faced by developers. It gives a complete overview of plugin development, large scale application architecture, and unit testing as well.',
        starRating: 1
    },
    {
        id: 106,
        bookTitle: 'Backbone.js Cookbook',
        genre: 'BackboneJS',
        author: 'Vadim Mirgorod',
        cost: 240,
        imgUrl: '/assets/BackboneJS3.JPG',
        issued: false,
        isbn: '9781782162728',
        likes: 0,
        description : 'This is a Cookbook with easy-to-follow recipes, containing practical and detailed examples which are all fully backed up with code, illustrations, and tips to dig deep into Backbone.js. ',
        starRating: 5
    },
    {
        id: 107,
        bookTitle: 'Ember.js in Action',
        genre: 'EmberJS',
        author: 'Joachim Haagen Skeie',
        cost: 2500,
        imgUrl: '/assets/EmberJS1.JPG',
        issued: false,
        isbn: '9781617291456',
        likes: 0,
        description : 'Ember.js in Action is a crisp tutorial that introduces the Ember.js framework and shows how to build production-quality web applications. ',
        starRating: 5
    },
    {
        id: 108,
        bookTitle: 'Mastering Ember.js',
        genre: 'EmberJS',
        author: 'Mitchel Kelonye',
        cost: 3500,
        imgUrl: '/assets/EmberJS2.JPG',
        issued: false,
        isbn : '9781783981984',
        likes: 0,
        description : 'Developing single-page web applications is about to get easier! This book introduces you to web application development using the Ember.js web framework.',
        starRating: 4
    },
    {
        id: 109,
        bookTitle: 'Developing an EmberJS Edge',
        genre: 'EmberJS',
        author: 'Jamie White and Matthew Beale',
        cost: 2000,
        imgUrl: '/assets/EmberJS3.JPG',
        issued: false,
        isbn: 'B00JETLW32',
        likes: 0,
        description : 'Ember.js is a framework for building ambitious web applications. In more specific terms, it is a collection of libraries, abstractions and conventions for dealing with the common challenges of building web applications. ',
        starRating: 2
    },
    {
        id: 110,
        bookTitle: 'Node.js in Action',
        genre: 'NodeJS',
        author: 'Mike Cantelon and Marc Harter',
        cost: 800,
        imgUrl: '/assets/NodeJS1.JPG',
        issued: false,
        isbn: '9781617290572',
        likes: 0,
        description : 'Node.js in Action is an example-driven tutorial that starts at square one and guides you through all the features, techniques, and concepts youll need to build production-quality Node applications.',
        starRating: 5
    },
    {
        id: 111,
        bookTitle: 'Node.js the Right Way',
        genre: 'NodeJS',
        author: 'Jim R. Wilson',
        cost: 1200,
        imgUrl: '/assets/NodeJS2.JPG',
        issued: false,
        isbn: '9781937785734',
        likes: 0,
        description : 'Get to the forefront of server-side JavaScript programming by writing compact, robust, fast, networked Node applications that scale. Ready to take JavaScript beyond the browser, explore dynamic languages features and embrace evented programming?',
        starRating: 1
    },
    {
        id: 112,
        bookTitle: 'Pro Node.js for Developers',
        genre: 'NodeJS',
        author: 'Colin Ihrig',
        cost: 2800,
        imgUrl: '/assets/NodeJS3.JPG',
        issued: false,
        isbn: '9781430258605',
        likes: 0,
        description : 'Building upon your existing JavaScript skills you ll be shown how to use Node.js to build both Web- and Network-based applications',
        starRating: 3
    }
];
