/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('Welcome Page', { title: 'CS Surveys' });
};

exports.surveys = function(req, res){
  res.render('Surveys',{ title: 'Surveys' , tourLink: '/TourSurveyForm' });
};

exports.results = function(req, res){
  res.render('Results', { title: 'Surveys' , tourLink: '/TourSurveyResults' });
};

exports.tourSurveyForm = function(req, res){
  res.render('TourSurveyForm', { title: 'Surveys' , tourLink: '/TourSurveyForm' });
};

exports.tourSurveyResults = function(req, res){
  res.render('TourSurveyResults', { title: 'Surveys' , tourLink: '/TourSurveyResults' });
};