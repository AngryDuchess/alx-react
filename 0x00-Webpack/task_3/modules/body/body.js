import "./body.css";
import $ from 'jquery';
import _ from 'lodash';

$("body").append("<button>Click here to get started</button>");
$("body").append('<p id="count"><p>');

const updateCounter = () => {
  let times = $("#count").html() || 0;
  $("button").on("click", () => {
    times++;
    $("#count").html(`${times} clicks on the button`);
  });
};

_.debounce(updateCounter, 500);
updateCounter();