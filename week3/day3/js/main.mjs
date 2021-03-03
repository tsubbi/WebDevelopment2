import { getAllUsers } from './axiosFetcher.mjs';
import { baseURL, allUsers } from './variables.mjs';

let users = [];

// load all users
getAllUsers(baseURL, allUsers, (data) => {
    users = data;
    data.forEach(user => {
        var $card = $("<div>").addClass("card");
        // left card
        var $detailInfo = $("<div>").addClass("detail-info");
        var $userCard = $("<div>").addClass("user-card");
        var $userName = $("<div>").addClass("user-name center").text(user.username);
        var $svg = $("<div>").addClass("svg-pic").load("svg.html");
        $userCard.append($userName, $svg);

        // right card bottom
        var $moreInfo = $("<div>").addClass("more-info");
        var $infoH1 = $("<h1>").addClass("name").text(user.name);
        var $phoneCoord = $("<div>").addClass("coords").append(
            $("<span>").text("Phone"),
            $("<span>").text(user.phone)
        );
        var address_part1 = [user.address.suite, user.address.street].join(" ");
        var address_part2 = [user.address.city, user.address.zipcode].join(" ");
        var $addressCoord = $("<div>").addClass("coords").append(
            $("<span>").text("Address"),
            $("<span>").html(address_part1 + "<br>" + address_part2)
        );
        var $emailCoord = $("<div>").addClass("coords").append(
            $("<span>").text("Email"),
            $("<span>").text(user.email)
        );
        $moreInfo.append($infoH1, $phoneCoord, $addressCoord, $emailCoord);

        $detailInfo.append($userCard, $moreInfo);
        // right card top
        var $general = $("<div>").addClass("general");
        var $generalH1 = $("<h1>").text(user.name);
        var $companyCoord = $("<div>").addClass("coords").append(
            $("<span>").text("Company"),
            $("<span>").text(user.company.name)
        );
        var $generalH3 = $("<h3>").text(user.company.catchPhrase);
        var $readMore = $("<span>").addClass("more").text("Mouse over the card for more info");
        $general.append($generalH1, $companyCoord, $generalH3, $readMore);

        $card.append($detailInfo, $general);        

        $("#users").append($card);
    });
}, (error) => {
    alert(`opps, there is an error: ${error}`);
    if (!alert(`Houston, we have a problem: ${error}`)) {
        window.location.reload();
    }
});

// serch 
$("#search-name").keyup(function() {
    let filter = $("#search-name").val().toUpperCase();
    const $cards = $(".card");
    // if the text is cleared, will reveal all cards
    if (filter === "") {
        $cards.each((index, card) => card.style.display = ""); 
        return;
    }

    // call different functions by num or name
    // if the filter contains both string and number, it will automatically be string
    isNaN(filter) ? searchByName(filter) : searchById(filter);
});

function searchByName(filter) {
    const $cards = $(".card");
    let textValue, h1;

    $cards.each ((index, card) => {
        h1 = card.querySelector(".name");
        textValue = h1.textContent || h1.innerText;
        card.style.display = textValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
    });
}

function searchById(filter) {
    const $cards = $(".card");
    // first fetch out all the ids and then find the index that matches to id
    const i = users.map((user) => user.id)
                .findIndex((id) => id == filter);
    $cards.each((index, card) => card.style.display = (index == i) ? "" : "none");
}