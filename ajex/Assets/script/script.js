
$(document).ready(function () {
    $.ajax({
        url: "https://api.spacexdata.com/v3/rockets?limit=20&offset=0",
        type: "get",
        success: function (response) {
            console.log("response", response);

            let str = "";
            response.map(item => {

                str += `<div class="card">
                       <h3>${item.rocket_name}</h3>
                      <img class="image-path" src="${item.flickr_images[0]}">
                       <button id="rocket_details_${item.rocket_id}" data-id="${item.rocket_id}">Details</button>
                      </div>`;
            });
            $("#rocket-data").html(str);
        }
    })
});
$(document).on("click", "button[id^=rocket_details_]", function () {
    let id = $(this).attr("data-id");
    $.ajax({
        url: "https://api.spacexdata.com/v3/rockets/" + id,
        type: "get",
        success: function (response) {
            console.log("response2", response);
            $(".title").text(response.rocket_name)
            $(".detail-img").attr("src", response.flickr_images[1]);
            $(".cost_per_launch").text(response.cost_per_launch);
            $(".country").text(response.country);
            $("#rocket-details").show();
        }
    })
})

