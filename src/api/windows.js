const desktopWindowName = "desktop";
const overlayWindowName = "overlay";

export function closeWindow() {
  overwolf.windows.close(desktopWindowName);
}

export function dragMoveWindow() {
  overwolf.windows.dragMove(desktopWindowName);
}

export function toggleOverlayWindow() {
  overwolf.windows.getWindowState(overlayWindowName, state => {
    if (state.status === "success") {
      const windowState = state.window_state_ex;
      if (windowState === "minimized" || windowState === "closed") {
        openOverlayWindow();
      } else if (windowState === "normal" || windowState === "maximized") {
        closeOverlayWindow();
      }
    }
  });
}

export function openOverlayWindow() {
  overwolf.windows.obtainDeclaredWindow(overlayWindowName, result => {
    const windowId = result.window.id;
    overwolf.windows.restore(windowId, result => {
      if (result.status !== "success") {
      }
    });
  });
}

export function closeOverlayWindow() {
  overwolf.windows.minimize(overlayWindowName, console.log);
}
