angular.module('contactApp', ['ngStorage']).controller('contacts', function($scope,$localStorage,$sessionStorage){




    
    
    if($localStorage.contacts == null)
        $scope.extractData = [{name: 'Justice Nefe', email: 'justicenefe@gmail.com', num: 08145951177, del: false}];
    else
        $scope.extractData = $localStorage.contacts


    /* Button to Add New Contact But Pass through verifications first
    and move to the next stage*/
    $scope.concatenateAndInsert = function(){
        
        if     ($scope.formCName == undefined){
            alert('Oops!, Please fill the form properly')
        }
        else if ($scope.formCEmail == undefined){
            alert('Sorry!, Please fill the form properly')
        }
        else if ($scope.formCNum == undefined){
            alert('Oops!, Please fill the form properly')

        }
        if ($scope.extractData !== null )
        $scope.verAfterConcat();
    };
    
    //After verification, add contact and save to localstorage
    $scope.verAfterConcat = function(){
        $scope.extractData.push( {name: $scope.formCName, email: $scope.formCEmail, num: $scope.formCNum, del: false});
        $localStorage.contacts = $scope.extractData;
        return $scope.verBeforeSave();
    };



    //Delete the old values of these variable objects.
    $scope.verBeforeSave = function () {
        delete $scope.formCName;
        delete $scope.formCEmail;
        delete $scope.formCNum;
        $scope.extractData = null;
        return $scope.load();
    };


    // Re-Assign $scope.extractData to Reading From Local Storage...
    $scope.load = function(){
        $scope.extractData = $localStorage.contacts;
    };
    

    /* Get Total Contacts */
    $scope.getTotalContacts = function (){
        if ($scope.extractData == undefined){
            $scope.extractData = 0;
        }
        else {
            return $scope.extractData.length;
        }
    };


 /*Button to Delete selected contact */
    $scope.removeSelected = function (){
        
        for(k in $scope.extractData){
            if($scope.extractData[k].del){
                $scope.extractData.splice(k);
            }
        };
        
        $localStorage.contacts = $scope.extractData;
        
    };

   
    console.log("Hello Console Crawler, My Name is Justice. Here are links to my personal profile: \nhttp://www.facebook.com/Just4Ease,\nhttp://www.twitter.com/Just4Ease,\nhttp://www.github.com/Just4Ease, \nhttp://google.com/+JusticeNefe. \nThanks and have a nice day ahead. :)")

});

