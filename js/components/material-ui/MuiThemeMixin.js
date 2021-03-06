"use strict"
let React = require('react');
let mui = require("material-ui");
let ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setTheme(ThemeManager.types.LIGHT);
let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

let MuiThemeMixin = {
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  },
};
module.exports = MuiThemeMixin;
