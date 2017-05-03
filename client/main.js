import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Meteor.setInterval(function(){
	var currentDate = new Date();
	Session.set('now',currentDate.toLocaleTimeString());
	},1000);

Template.timeDisplay.helpers({
	currentTime: function(){
		return Session.get('now');
	}
})

Template.news.helpers({
	news: function(){
		console.log(News.find({}))
		return News.find({});
	}
})

