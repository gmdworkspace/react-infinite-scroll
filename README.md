# react-infinite-scroll

Often wondered how facebook or instagram lazily loads data on page scroll and show loading animation? 

Well this library provides you with the react component to show loaders while you do API calls or any other async operations.

# Installation

Use npm to install react-infinite-scroll

```
npm install react-infinite-scroll
```

# Usage

First import react-infinite-scroll in to your project
```
import ReactInfiniteScroll from 'react-infinite-scroll';

```

```
const dataList = [
 <p> item1 </p>,
 <p> item2 </p>
];

const onScrollComplete = () =>{
  console.log('DO API call and get more data');
};

 <ReactInfiniteScroll
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

