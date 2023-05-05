import React from 'react'
import Layout from './Layout'

function ColumnLayout({items,config}) {
    

    const sliceData = function(items, cols, colIndex) {
        const colItems = [];
        for(let i = colIndex; i<items.length; i+=cols){
            colItems.push(items[i]);
        }
        return colItems;
    };
    
    const cols = function(format) {
        return breakpoints[format] || 1;
    };

    const props ={};
    return (
        <div style={config.style}>
            <div className="layout-container">
                <div style={{display: "flex"}}>
                <Layout render={(width, height, format) => (
                    Array.from(Array(cols(format)), (e, _colIndex) => {
                        return React.cloneElement((
                            <div style={{flex: "1 1 0px"}}>
                                {sliceData(items, cols(format), _colIndex).map((item, key) => (
                                    <div key={key}>
                                        {item.data}
                                    </div>
                                ))}
                                </div>
                        ), {...props})
                    })
                )}/>
                </div>
            </div>
        </div>
      );
}

export default ColumnLayout