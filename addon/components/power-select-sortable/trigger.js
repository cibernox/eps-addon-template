import MultipleTrigger from 'ember-power-select/components/power-select-multiple/trigger';
import layout from '../../templates/components/power-select-sortable/trigger';

export default MultipleTrigger.extend({
  layout,
  didInsertElement() {
    this._super(...arguments);
    let optionsList = document.getElementById(`${this.elementId}-ember-power-select-multiple-options`);
    optionsList.addEventListener('mousedown', function(e) {
      e.preventDefault();
    });
  },

  actions: {
    reorderItems(oldOrder, newOrder) {
      this.get('select.actions.select')(newOrder);
    },

    dragStarted() {
      let action = this.get('dragStarted');
      if (action) { action(...arguments); }
    },

    dragStopped() {
      let action = this.get('dragStopped');
      if (action) { action(...arguments); }
    }
  }
});
