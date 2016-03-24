import Controller from 'ember-controller';

export default Controller.extend({
  options: ['one', 'two', 'three', 'four', 'five', 'six', 'seven'],
  selected: ['two', 'three', 'four'],

  actions: {
    dragStarted() {
      this.set('showLuke', true);
    },

    dragStopped() {
      this.set('showLuke', false);
    },
  }
});