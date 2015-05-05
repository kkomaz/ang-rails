angular.module('flapperNews', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });

    $urlRouterProvider.otherwise('home');
}])

.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){

  $scope.posts = posts.posts;

  $scope.addPost = function(){
    if(!$scope.title || $scope.title === ''){
      return;
    };
    $scope.posts.push({
      title: $scope.title, 
      link: $scope.link,
      upvotes: 0,
      comments: [
        {author: 'James', body: 'Cool!', upvotes: 0},
        {author: 'John', body: 'Awesome!', upvotes: 0}
      ]
    });
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  };

}])

.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){
  $scope.post = posts.posts[$stateParams.id];
  $scope.addComment = function(){
    if($scope.body === '') { return; }
    $scope.post.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
    });
    $scope.body = '';
  };
  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  };
}])

.factory('posts', [function(){
  var o = {
    posts: [{title:"hey",upvotes:123}]
  };
  return o;
}]);