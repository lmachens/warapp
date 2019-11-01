const hotkeyId = "show_hide";

export function registerHotKey(action) {
  overwolf.settings.registerHotKey(hotkeyId, function(result) {
    if (result.status === "success") {
      action();
    } else {
      console.error(`[HOTKEYS SERVICE] failed to register hotkey ${hotkeyId}`);
    }
  });
}
