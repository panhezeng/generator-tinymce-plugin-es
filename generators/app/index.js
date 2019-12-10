"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the peachy ${chalk.red(
          "generator-tinymce-plugin"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "confirm",
        name: "someAnswer",
        message: "Would you like to enable this option?",
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(this.templatePath("*"), this.destinationRoot(), {
      globOptions: { dot: true }
    });
    this.fs.copy(this.templatePath("src/*"), this.destinationPath("src/"), {
      globOptions: { dot: true }
    });
    this.fs.copy(
      this.templatePath("example/*"),
      this.destinationPath("example/"),
      {
        globOptions: { dot: true }
      }
    );
    this.fs.copy(
      this.templatePath("example/src/*"),
      this.destinationPath("example/src/"),
      {
        globOptions: { dot: true }
      }
    );
  }

  install() {
    this.installDependencies();
  }
};
