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

You can add more than one accordion at the same time using different id's.

**Plugin Usage**

```javascript
$('#yourAccordionCustomId').booAccordion({
    speed: 400,
    action: 'click',
    animation: 'slide'
});
```

**Options**

```speed:``` 200 / 400 / 600 / 'slow' / 'fast'  
This will be the speed to open the expandable content once you click on the title.    
The default option is 200.   

```action:``` 'click' / 'mouseover'   
The way to expand the content can be click or mouseover on the title.   
The default option is 'click'.   

```animation:``` 'slide' / false   
The accordion animation can be show or hide when is set to false or slide down and up as default option with 'slide'.
