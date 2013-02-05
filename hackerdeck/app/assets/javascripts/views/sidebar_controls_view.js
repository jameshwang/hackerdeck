Hackerdeck.Views.SidebarControlsView = Backbone.View.extend({
  id: 'sidebar-controls-view',
  template: JST['sidebar_controls_view'],

  events: {
    "click .start" : "startTimer",
    "click .pause" : "pauseTimer",
    "click .stop"  : "stopTimer",
    "click .next"  : "nextTeam",
    "click .prev"  : "prevTeam"
  },

  getRenderData: function() {},

  render: function() {
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  },

  afterRender: function() {

  },

  startTimer: function() {
    console.log('start timer');
    this.model.set('status', 'start');
  },

  pauseTimer: function() {
    console.log('pause timer');
    this.model.set('status', 'stop');
  },

  stopTimer: function() {
    console.log('stop timer');
    this.model.set('status', 'stop');
  },

  nextTeam: function() {
    console.log('next team');
    this.model.nextTeam();
  },

  prevTeam: function() {
    console.log('prev team');
    this.model.prevTeam();
  }
});