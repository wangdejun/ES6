# Async Rendering
* ```componentWillMount```
* ```componentWillReceiveProps```
* ```componentWillUpdate```

* 基于属性更新状态
```js
// After
class ExampleComponent extends React.Component {

    //  在构造函数中或属性初始化器中初始化状态
    state = {
        isScrollingDown: false,
        lastRow: null,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.currentRow !== prevState.lastRow) {
        return {
            isScrollingDown:
            nextProps.currentRow > prevState.lastRow,
            lastRow: nextProps.currentRow,
        };
        }

        // 返回 null 表示对state没有变化
        return null;
    }
}
```

* 属性变化的副作用
* Fetching external data when props change 
* Reading DOM properties before an update