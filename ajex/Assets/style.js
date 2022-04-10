

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}






$(document).ready(function () {
    $.ajax({

        url: "https://api.spacexdata.com/v3/payloads?limit=9&offset=1",
        type: "get",
        success: function (response) {
            console.log("response1", response);

            let str = "";
            response.map(item => {

                str += `<div class="card">
                       <h3>${item.payload_id}</h3>
                       <button id="rocket_details_${item.payload_id}" data-id="${item.payload_id}">Details</button>
                      </div>`;
            });
            $("#rocket-data").html(str);
        }
    })
});
$(document).ready(function () {
    $("#payload").click(function payloadbtn() {
        $("#rocket-data").toggle();
    })
});


$(document).on("click", "button[id^=rocket_details_]", function () {
    let id = $(this).attr("data-id");
    $.ajax({
        url: "https://api.spacexdata.com/v3/payloads/" + id,
        type: "get",
        success: function (response) {
            $(".launch_date_utc").text(response.customers);
            $(".nationality").text(response.nationality);
            $(".norad_id").text(response.norad_id);
            $(".payload_type").text(response.payload_type);
            $(".manufacturer").text(response.manufacturer);
            $("#rocket-details").toggle();
        }
    });
});
