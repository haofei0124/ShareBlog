import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return <div>正在加载</div>
  },
});

export default () => <LoadableComponent/>
// 直接返回一个无状态组件就可以了 简化代码

// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }