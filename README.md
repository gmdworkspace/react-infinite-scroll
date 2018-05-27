# super-react-infinite-scroll

[![Build Status](https://travis-ci.org/gmdworkspace/super-react-infinite-scroll.svg?branch=master)](https://travis-ci.org/gmdworkspace/super-react-infinite-scroll)
[![npm version](https://badge.fury.io/js/super-react-infinite-scroll.svg)](https://badge.fury.io/js/super-react-infinite-scroll)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Often wondered how facebook or instagram lazily loads data on page scroll and show loading animation? 

Well this library provides you with the react component to show loaders while you do API calls or any other async operations.

# Installation

Use npm to install super-react-infinite-scroll

```
npm install super-react-infinite-scroll
```

# Usage

First import super-react-infinite-scroll in to your project
```
import SuperReactInfiniteScroll from 'super-react-infinite-scroll';

```

```
const dataList = [
 <p> item1 </p>,
 <p> item2 </p>
];

const onScrollComplete = () =>{
  console.log('DO API call and get more data');
};

 <SuperReactInfiniteScroll
        loaderElem={<p> Loading..</p>}        
        onScrollComplete={onScrollComplete}
        dataList={dataList}
        totalDataLength={100}
  />
```

Refer `dev/index.js` to know the usage better.

# Props Usage

| Props              | Description                                                |     Type          | Defaults      |
| -------------      | -------------                                              | ---------------   | -----------   |
| loaderElem         | React element to render on lazy fetch                      | React.Element     |               |
| onScrollComplete   | callback function which is callled when scroll comes to end| Function          |            | 
| dataList           | List of react elements to render                | ArrayOf(React.Element)             |               |
|totalDataLength     | Length of Total/final records that will be loaded          | Number            |               | 
|scrollThresholdPercent| Threshold to call onScrollComplete before scrolling till end of the page| Number| 95         |


# Run app locally

To run the dev app locally run the following 

```
npm run start:dev
```

This project is integrated with mocha and chai for unit testing. To test the code run

```
npm test
```

