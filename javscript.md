## Case

| Entity | Case | e.g. |
|-|-|-|
| Variables | `camelCase`| `calendarEvents` |
| Functions | `camelCase`| `processCalendarEvents(events)` |
| Classes | `PascalCase` | `CalendarEvent` |
| CSS rules | `kebab-case` | `#calendar-view` `.my-class` |
| Modules & class constants | `SNAKE_UPPER_CASE` | `CONFERENCE_STATUS` |
| Files/Folders | `kebab-case` | `meeting-director/add-participant.spec.js` |
| WebSocket messages | `kebab-case` | `update-meeting` |
| Node's event emitter | `camelCase` | - |
| AngularJS controllers | `camelCase` | `ldapGroupsCtrl` |
| AngularJS directives | `camelCase` on definition, `kebab-case` when invoking | `w3TestDirective` and `w3-test-directive` |
| URL | `kebab-case` | `https://wfs.domain.com/path-to-something` |

### Long `if` statements indent

```javascript
if (isRecording
  && isAvailable
  && areProcessed
  && hasPermissions
  && doCheck
  && isInProgress) {
}
```

### Ternary operator indent

- Do not nest (eslint will complain)
- If very long and doesn't fit in a line then break into 3 lines as follow

```javascript
const myVariable = isProcessed 
  ? thisVeryLongVariable
  : thatOtherVeryLongVariable
```

### Chained function indent

**IMPORTANT**: We should avoid overuse of chaining.

Yet you should indent as follow for better readability:

```javascript
const leds = stage
  .selectAll('.led')
  .data(data)
  .enter()
  .append('svg:svg')
  .classed('led', true)
  .attr('width', (radius + margin) * 2)
  .append('svg:g')
  .attr('transform', `translate(${radius + margin},${radius + margin})`)
  .call(tron.led);
```

which can still be improved by splitting as follow

```javascript
const leds = stage.selectAll('.led');

leds.data(data);

const svg = leds.enter()
  .append('svg:svg')
  .classed('led', true)
  .attr('width', (radius + margin) * 2);

const g = svg.append('svg:g');

g.attr('transform', `translate(${radius + margin},${radius + margin})`)
  .call(tron.led);
```

> Source: Discussed in [AirBnB issue 1566](https://github.com/airbnb/javascript/issues/1566)

### Wrapping function arguments

```javascript
function myFunction(
  someVeryLongArgumentName1,
  someVeryLongArgumentName2,
  someVeryLongArgumentName3
) {
  // Function body
}
```

> Source: Discussed in [AirBnB issue 532](https://github.com/airbnb/javascript/issues/532#issuecomment-155232701)

### Return

Avoid returns with long snippets of code. Break it down to enhance readability and maintainability.

```javascript
// Good!
function isEqual(a, b) {
   return a === b;
}
```

e.g. 
```javascript
// It is fine but
// it can be improved
function isDeviceTrio(clientRequest) {
  return (
    (clientRequest.method === 'GET'
      && clientRequest.headers['user-agent']
      && clientRequest.headers['user-agent'].match(/PolycomRealPresenceTrio/))
    || (clientRequest.method === 'GET'
      && clientRequest.headers.authorization.match(/Bearer/))
  );
}

```

to 

```javascript
// Better
function isEndpointTrio(request) {
  const isTrio = (request.method === 'GET'
    && request.headers['user-agent']
    && request.headers['user-agent'].match(/PolycomRealPresenceTrio/);

  const isAuthorized = request.method === 'GET'
    && request.headers.authorization.match(/Bearer/)

  return isTrio || isAuthorized;
  );
}
```

### Magic Number

Magic numbers are referred as anti-pattern. These should not be used in code. Named variables should be assigned the numeric constants and used in code. See [Wiki](https://en.wikipedia.org/wiki/Magic_number_(programming)) page for reference.




- Lint your files using eslint configured with **AirBnB** rules
- Check [Javascript Style Guide](https://google.github.io/styleguide/jsguide.html)