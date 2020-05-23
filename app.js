//  Encrypt-Decrypt ?? 
function encrypt(input, output) {
	let scr = "";
	for (let i = 0; i < input.length; i++) {
		scr += input.charCodeAt(i).toString(2) + "2";
	}
	scr = scr
			.replace(/0/g, inv0)
			.replace(/1/g, inv1)
			.replace(/2/g, inv2);
	output = output.charAt(0) + scr + output.substring(1);
	clipboardy.writeSync(output);
	console.log("input: " + input);
	console.log("output: " + output);
	console.log("length: " + output.length);
	console.log("Saved to clipboard!");
}
function decrypt(input) {
	let scr = input.substring(1, input.lastIndexOf(inv2));
	scr = scr.split(inv2).join("2").split(inv0).join("0").split(inv1).join("1");
	scr = scr.split("2");
	let output = "";
	for (let i = 0; i < scr.length; i++) {
		output += String.fromCharCode(parseInt(scr[i], 2));
	}
	console.log("input: " + input);
	console.log("output: " + output);
}


angular.module('app', ['ionic'])

.controller('Page1Ctrl', function($scope) {
 $scope.myTitle = 'Page 1 - Summary';
})

.controller('Page2Ctrl', function($scope) {
 $scope.myTitle = 'Page 2 - Scores';
})

.controller('Page3Ctrl', function($scope) {
 $scope.myTitle = 'Page 3 - Setup';
})

.config(function($stateProvider, $urlRouterProvider) {
 $stateProvider
  .state('page1', {
   url: "/page1",
   templateUrl: "templates/page1.html",
   controller: 'Page1Ctrl'
  })
  .state('page2', {
   url: "/page2",
   templateUrl: "templates/page2.html",
   controller: 'Page2Ctrl'
  })
  .state('page3', {
   url: "/page3",
   templateUrl: "templates/page3.html",
   controller: 'Page3Ctrl'
  })
  
// if none of the above states are matched, use this as the fallback:
 $urlRouterProvider.otherwise('page1');
});

// app.js (tabs)
// angular.module('app', ['ionic'])

.controller('DashCtrl', function($scope) {

})  

.controller('ChatsCtrl', function($scope) {

})  

.controller('AccountCtrl', function($scope) {

})

.controller('ChatDetailCtrl', function($scope) {

})  

.config(function($stateProvider, $urlRouterProvider) {
$stateProvider

 // Set up an abstract state for the tabs directive.
   .state('tab', {
   url: "/tab",
   abstract: true,
   templateUrl: "templates/tabs.html"
 })

 // Each tab has its own nav history stack:
 .state('tab.dash', {
   url: '/dash',
   views: {
     'tab-dash': {
       templateUrl: 'templates/tab-dash.html',
       controller: 'DashCtrl'
     }
   }
 })

 .state('tab.chats', {
     url: '/chats',
     views: {
       'tab-chats': {
         templateUrl: 'templates/tab-chats.html',
         controller: 'ChatsCtrl'
       }
     }
   })

.state('tab.chatDetail', {
  url: '/chatDetail',
  views: {
    'tab-chats': {
      templateUrl: 'templates/tab-chat-details.html',
      controller: 'ChatDetailCtrl'
    }
  }
})

 .state('tab.account', {
   url: '/account',
   views: {
     'tab-account': {
       templateUrl: 'templates/tab-account.html',
       controller: 'AccountCtrl'
     }
   }
 });

 // If none of the above states are matched, use this as the fallback:
 $urlRouterProvider.otherwise('/tab/dash');
})
