# Proxy

The Proxy object enables you to create a wrapper around another object that can intercept and redefine fundamental operations such as property access, assignment, deletion, and more.

## Description

A Proxy acts as an intermediary between your code and a target object. It allows you to intercept operations like get, set, and deleteProperty through handler functions (called traps).

Proxies are commonly used for:

- Logging property access

- Validation

- Input sanitization

- Access control

- Reactive state systems

## The Goal

While exploring JavaScript documentation, I came across the Proxy API and wanted to experiment with it in a practical way.

This project simulates failed password attempts using a Proxy. Once a defined threshold is reached, Proxy.revocable() is used to revoke access to the object, effectively invalidating further interactions.

This demonstrates how proxies can be used to enforce runtime rules and dynamically disable access when certain conditions are met.

[documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

---

![Image](https://github.com/user-attachments/assets/155a605e-025f-4c60-bdf2-ca93292c3ea8)

---
