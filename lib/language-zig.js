const { AutoLanguageClient } = require("atom-languageclient");
const cp = require("child_process");

class ZigLanguageClient extends AutoLanguageClient {
  getGrammarScopes() {
    return ["source.zig"];
  }
  getLanguageName() {
    return "Zig";
  }
  getServerName() {
    return "zls";
  }

  startServerProcess() {
    const zlsPath = atom.config.get("language-zig.zls");
    if (!zlsPath) {
      atom.notifications.addError("zls path is not set", {
        detail:
          "set config item language-zig.zls to the /path/to/zls executable. reload once ready.",
        dismissable: true
      });
      return;
    }
    return cp.spawn(zlsPath, [], {});
  }
}

module.exports = new ZigLanguageClient();
module.exports.config = {
  zls: {
    type: "string",
    default: "zls",
    title: "zls path",
    description: "Window: Reload after changing this setting."
  }
};
