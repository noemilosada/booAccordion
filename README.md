booAccordion jQuery plugin
==========================
--------------------------

**HTML Structure**

```html
<dl id="yourAccordionCustomId" class="booAccordion">
    <dt>Clicable title</dt>
    <dd>Expandeable content</dd>
</dl>
```


**Plugin Usage**

```javascript
$('#yourAccordionCustomId').booAccordion({
    speed: 400,
    action: 'click',
    animation: 'slide',
});