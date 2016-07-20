(function() {
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    }
  });

  app.controller("ReviewController", function(){
    this.review = {};
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive("reviewForm", function(){
    return {
      // <form name="reviewForm" ng-controller="ReviewController as reviewCtrl" 
      //         ng-submit="reviewForm.$valid && reviewCtrl.addReview(product)" novalidate>
      //     <b>Your new review will appear here</b>
      //     <blockquote>
      //       <b>Stars: {{ reviewCtrl.review.stars }}</b>
      //       <p>{{ reviewCtrl.review.body }}</p>
      //       <cite>by: {{ reviewCtrl.review.author }}</cite>
      //     </blockquote>
      //     <br>
      //     <select ng-model="reviewCtrl.review.stars" required>
      //       <option value="1">1 Star</option>
      //       <option value="2">2 Stars</option>
      //       <option value="3">3 Stars</option>
      //       <option value="4">4 Stars</option>
      //       <option value="5">5 Stars</option>
      //     </select>
      //     <br>
      //     <textarea ng-model="reviewCtrl.review.body" required></textarea><br>
      //     <input name="author" type="email" ng-model="reviewCtrl.review.author" required/><br>
      //     <div>Review Form is {{ reviewForm.$valid }}</div>
      //     <input type="submit"/>
      //   </form>
    }
  });

  var gems = [
      {
        name: 'Dedocahedron',
        price: 2,
        description: 'An awesome gem',
        canPurchase: true,
        soldOut: false,
        images: [
          {
            full: "full.png",
            thumb: "thumb.jpeg"
          },
          {
            full: "full.png",
            thumb: "thumb.jpeg"
          }
        ],
        reviews: [
          {
            stars: "3",
            body: "This is the first review",
            author: "psk.kudalkar@gmail.com"
          },
          {
            stars: "4",
            body: "This is the second review",
            author: "psk.kudalkar@gmail.com"
          }
        ]
      },
      {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'A new gem',
        canPurchase: false,
        soldOut: false,
        images: [
          {
            full: "full.png",
            thumb: "thumb.jpeg"
          },
          {
            full: "full.png",
            thumb: "thumb.jpeg"
          }
        ],
        reviews: [
          {
            stars: "3",
            body: "This is the first review",
            author: "psk.kudalkar@gmail.com"
          },
          {
            stars: "4",
            body: "This is the second review",
            author: "psk.kudalkar@gmail.com"
          }
        ]
      }
    ]
})();

