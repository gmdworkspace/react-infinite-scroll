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
 <ReactInfiniteScroll
        loaderElem={<p> Loading..</p>}
        showLoader={this.state.showLoader}
        onScrollComplete={onScrollComplete}
  >
     {YOUR_DYNAMIC_CONTENT}
  </ReactInfiniteScroll>
```

Refer `dev/index.js` to know the usage better.

# Run app locally

To run the dev app locally run the following 

```
npm run start:dev
```

This project is integrated with mocha and chai for unit testing. To test the code run

```
npm test
```

