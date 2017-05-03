import { Meteor } from 'meteor/meteor';

News = new Meteor.Collection('news');

var allNews = News.find({});
