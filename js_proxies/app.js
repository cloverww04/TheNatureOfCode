// ===== App startup =====
const { state, recordFailure } = createAuthState();

render(state);

const interval = setInterval(() => {
  try {
    recordFailure();
  } catch (err) {
    console.error("🔒 Access revoked:", err.message);
    clearInterval(interval);
  }
}, 1000);


// ===== Reactive + revocable system =====
function createAuthState() {
  const MAX_ATTEMPTS = 5;
  const target = { failedAttempts: 0 };

  let revoked = false;

  const { proxy, revoke } = Proxy.revocable(target, {
    set(obj, prop, value) {
      obj[prop] = value;

      render(proxy);

      if (prop === "failedAttempts" && value >= MAX_ATTEMPTS && !revoked) {
        revoked = true;

        queueMicrotask(() => {
          console.warn("❌ Too many failed attempts. Revoking access.");
          revoke();
        });
      }

      return true;
    }
  });

  function recordFailure() {
    proxy.failedAttempts += 1;
  }

  return { state: proxy, recordFailure };
}




// ===== Rendering =====
function render(state) {
  console.clear();
  console.log("🚨 Failed Password Attempts");
  console.log("Attempts:", state.failedAttempts);
}
