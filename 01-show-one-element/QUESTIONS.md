# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

  Teksts tiek paslēpts, jo mājaslapa tiek atjaunināta bez skripta palaišanas.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Liks varāk tekstu neuzrāda. Kods mājaslapu ielādē pirms koda palaišanas.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

Metode addEventListener uzstāda izpildāmo funkciju brīdī, kad notiks norādītais atgadījums. Common targets are Element, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).