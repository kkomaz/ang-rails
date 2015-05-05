angular.module('flapperNews')

.factory('posts', [function(){
  var o = {
    posts: [{title:"hey",upvotes:123}]
  };
  return o;
}]);