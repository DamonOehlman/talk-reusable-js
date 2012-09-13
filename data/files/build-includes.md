# Using JS Includes

---

Consider the following code, which provides the provides the `trim` shim for the `String.prototype`:

[[code code/simple/main.js]]

I'm ok with doing this once, but...

---

Shouldn't we include that trim function:

[[code code/simple/main-local-include.js]]

---

Even better how about we include that in directly from github:

[[code code/simple/main-remote-include.js]]

---

Or using a shorthand syntax:

[[code code/simple/main-github-include.js]]

---

## Include Responsibly