# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Noklikšķinot uz saites, teksts tiek paslēpts. Atsvaidzinot lapu, tā tiek atjaunota stāvoklī, kurā klikšķis nav noticis, tāpēc teksts joprojām tiek paslēpts.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Būtībā jūs noņemat notikumu, kas tiek ielādēts neatkarīgi no tā. Šajā gadījumā window.onload ielādē visu JS, kad lapa tiek ielādēta. Bez tā tā vienkārši nav izsaucama funkcija.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

You need to tell it what event it's listening for and what to do when the event occurs.
