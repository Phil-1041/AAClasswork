const FollowToggle = require("./follow_toggle.js");
const apiUtil = require("./api_util.js");

$( function() {
  $(".follow-toggle").each( (index, el) => new FollowToggle(el));
});

// $(document).ready(function () {
//   $("follow-toggle").each(function (index) {
//     new FollowToggle(this)
//   });
// });