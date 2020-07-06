# What is this ?

A simple lib to truncate text with ellipsis

# Installation

`npm install truncatetexts --save`
Then...

```
import { truncateText } from "truncatetexts";

{truncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", {word: true, limit: 10, after: true} )}
```

# Options

truncateText supports 3 options, and these options are setting by default:

- _word_ - _true | false_ (Default to false)
- _limit_ - _number_ (Default to 160)
- _after_ - _boolean_ (Default to true)
