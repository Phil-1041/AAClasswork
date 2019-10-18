const apiUtil = require('./api_util.js')

class FollowToggle {

  constructor(el){
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.processing = false;
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === "followed"){
      this.$el.html("Unfollow!");

    } else if (this.followState === "following" || this.followState === "unfollowing"){
      this.$el.prop("disabled", true);
    } else {
      this.$el.html("Follow!");
    }
  }

  handleClick () {
   
    this.$el.on('click', e => {
      e.preventDefault();
      if(this.followState === "unfollowed") {
        this.followState = "following";
        this.render();
        apiUtil.followUser(this.userId)
          .then(function () { 
            this.followState = "followed"; 
            this.$el.prop("disabled", false);
            this.render(); 
          }.bind(this));
      } else {
        this.followState = "unfollowing";
        this.render();
        apiUtil.unfollowUser(this.userId)
          .then (function () { 
            this.followState = "unfollowed";
            this.$el.prop("disabled", false);
            this.render(); 
          }.bind(this));
        }
      }
    );
  }
}

module.exports = FollowToggle;


